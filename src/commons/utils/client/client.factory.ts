import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HTTP_STATUS } from '@/meta/common';
import { Message } from 'element-ui';
import { handlerErrorMsg } from '@/commons/utils/client/service.response.handler';

export type ClientConfig = {
    baseURL: string,
    timeout: number
}

/**
 * 请求中间件，处理上传的config
 */
interface RequestMiddleWare {
    (config: AxiosRequestConfig): void
}

/**
 * 返回信息错误处理中间件
 */
interface ResponseMiddleware {
    (error: any): void
}

interface ProduceParams {
    config: ClientConfig,
    requestMiddleWare?: RequestMiddleWare,
    // responseSuccessMiddleware?:
}

export class ClientFactory {
    /**
     * 生产Http请求客户端
     */
    static produce(config?: ClientConfig, requestMiddleWare?: RequestMiddleWare, responseMiddleware?:ResponseMiddleware): AxiosInstance {
        const axiosInstance = axios.create(config);
        axiosInstance.interceptors.request.use(
            config => {
                requestMiddleWare && requestMiddleWare(config);
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        axiosInstance.interceptors.response.use(
            response => {
                const { data: res } = response;
                if (typeof res === 'object') {
                    res.code = Number(res.code);
                    switch (res.code) {
                    case HTTP_STATUS.SUCCESS[0]:
                        if (res.errors && res.errors.length) {
                            let errorMsgHtml = '';
                            // @ts-ignore
                            res.errors.forEach(error => {
                                errorMsgHtml += error.message + '<br />';
                            });
                            Message({
                                dangerouslyUseHTMLString: true,
                                message: errorMsgHtml,
                                type: 'error'
                            });
                        }
                        return res.data;
                    case HTTP_STATUS.PARAMETER_ERROR[0]:
                        return Promise.reject(res.message || 'error');
                    default:
                        return res.data;
                    }
                }
            },
            (error) => {
                console.log(error);
                // 请求超时错误
                if (error.message.includes('timeout of 5000ms exceeded')) {
                    Message({
                        message: '请求超时',
                        type: 'error',
                        duration: 5 * 1000
                    });
                    return Promise.reject(error);
                }

                const { response } = error;
                if (response.message === 'Network Error') {
                    Message({
                        message: '网络错误',
                        type: 'error',
                        duration: 5 * 1000
                    });
                    return Promise.reject(error);
                }

                if (response.status) {
                    handlerErrorMsg(response);
                }

                return Promise.reject(response.data);
            }
        );
        return axiosInstance;
    }
}
