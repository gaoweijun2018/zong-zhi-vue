import { ClientConfig, ClientFactory } from '@/commons/utils/client/client.factory';
import { UserModule } from '@/store/modules/user';
import { AxiosRequestConfig } from 'axios';

const baseConfig = {
    baseURL: process.env.VUE_APP_ACCOUNT_BASE_URL,
    timeout: 10000
};
const requestMiddleWare = (config: AxiosRequestConfig) => {
    config.headers['Authorization'] = 'Bearer ' + UserModule.token;
};

const account = ClientFactory.produce(baseConfig as ClientConfig, requestMiddleWare);

export default account;
