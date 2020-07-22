import { AxiosBasicCredentials } from 'axios';
import passport from '@/clients/passport';
import { AdminAuthorize, UserLoginParams } from '@/entities/login/login.def';
import { AccountService } from '@/services/account/account.service';
import {
    PasswordForm,
} from '@/entities/account/user';
import { UserAuth } from '@/entities/login/user.def';

class UserService extends AccountService {
    /**
     * 登录请求token
     * @param data
     */
    async login(data: UserLoginParams): Promise<AdminAuthorize> {
        const auth: AxiosBasicCredentials = {
            username: <string>process.env.VUE_APP_AUTH_USERNAME,
            password: <string>process.env.VUE_APP_AUTH_PASSWORD
        };
        const res = await passport({
            url: '/oauth/token',
            method: 'post',
            auth,
            withCredentials: false,
            params: data
        });
        return res as unknown as AdminAuthorize;
    }

    /**
     * 获取用户的授权信息
     * @param token
     * @return Promise<UserInfo>
     */
    async getUserAuth(token: string): Promise<UserAuth> {
        const res = await passport({
            url: '/oauth/account ',
            method: 'get',
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return res as unknown as Promise<UserAuth>;
    }

    /**
     * 重置密码（用户自己修改密码）
     * @param data
     */
    async userResetPassword(data: PasswordForm): Promise<void> {
        await this.client({
            url: this.path + '/user/reset/password/',
            method: 'put',
            data: data
        });
    }
}

const userService = new UserService('/user');
export default userService;
