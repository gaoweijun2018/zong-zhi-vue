import axios from 'axios';
import { Message } from 'element-ui';
import { UserModule } from '@/store/modules/user';

export const passport = axios.create({
    baseURL: process.env.VUE_APP_PASSPORT_BASE_URL, // url = base url + request url
    timeout: 10000 // request timeout
});

const passportClientErrorResponseHandler = (error: any) => {
    if (error.message === 'Network Error' || (error.message && error.message.includes('timeout'))) {
        Promise.reject(new Error('服务器请求超时，请检查网络连接'));
    }

    if (error.response.status === 401) {
        Message.error('登录已过期, 请重新登录');
        UserModule.LogOut();
    }

    const data = error.response.data;

    if (data.error_description === 'Bad credentials') {
        data.error_description = '账号或密码不正确';
        Message.error(data.error_description);
    }
};

// request interceptor
passport.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

passport.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        passportClientErrorResponseHandler(error);
        return Promise.reject(error.response.message);
    }
);

export default passport;
