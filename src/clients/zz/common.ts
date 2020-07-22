import { ClientConfig, ClientFactory } from '@/commons/utils/client/client.factory';
import { AxiosRequestConfig } from 'axios';
import { UserModule } from '@/store/modules/user';

const baseConfig = {
    baseURL: process.env.VUE_APP_ZZ_BASE_URL + '/common',
    timeout: 10000
};

const requestMiddleWare = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = 'Bearer ' + UserModule.token;
};

/**
 * 管理员和用户通用client
 */
const commonClient = ClientFactory.produce(baseConfig as ClientConfig, requestMiddleWare);
export default commonClient;
