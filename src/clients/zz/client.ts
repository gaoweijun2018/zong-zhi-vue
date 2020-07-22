import { ClientConfig, ClientFactory } from '@/commons/utils/client/client.factory';
import { AxiosRequestConfig } from 'axios';
import { UserModule } from '@/store/modules/user';

const baseConfig = {
    baseURL: process.env.VUE_APP_ZZ_BASE_URL + '/client',
    timeout: 10000
};

const requestMiddleWare = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = 'Bearer ' + UserModule.token;
};

/**
 * 用户client
 */
const clientClient = ClientFactory.produce(baseConfig as ClientConfig, requestMiddleWare);

export default clientClient;
