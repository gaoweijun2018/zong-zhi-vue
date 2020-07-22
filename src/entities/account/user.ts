import { BaseEntity } from '@/entities/entity';

export interface User extends BaseEntity{
    /**
     * 账号名称
     */
    account: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 员工id
     */
    personId: number;
    /**
     * 账号类型
     */
    type: number;
}

/**
 * 重置密码的表单
 */
export class PasswordForm {
    /**
     * 密码
     */
    password: string;

    /**
     * 重复密码
     */
    rePassword: string;

    /**
     * 旧密码
     */
    oldPassword: string;

    constructor(password: string, rePassword: string, oldPassword: string) {
        this.password = password;
        this.rePassword = rePassword;
        this.oldPassword = oldPassword;
    }
}
