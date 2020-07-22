/**
 * 登录请求token，参数
 */
export class UserLoginParams {
    username: string;
    password: string;
    // eslint-disable-next-line camelcase
    grant_type: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.grant_type = 'password';
    }
}

/**
 * admin授权的信息
 */
export interface AdminAuthorize {
    /**
     * 授权token
     */
    access_token: string
    /**
     * 过期时间
     */
    expires_in: number
    /**
     * 作用域
     */
    scope: string
    /**
     * token类型
     */
    token_type: string
}
