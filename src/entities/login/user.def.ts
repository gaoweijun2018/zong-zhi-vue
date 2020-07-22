/**
 * 用户信息
 */
import { Pager } from '@/entities/paging';

/**
 * 用户授权信息
 */
export interface UserAuth {
    /**
     * 主键
     */
    id: number;
    /**
     * 状态
     */
    state: number;
    /**
     * 用户类型
     */
    type: number;
    /**
     * 账户名
     */
    accountName: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 权限列表
     */
    authorities: string[]
}

export class UserPagingParams extends Pager {
    /**
     *  用户账户  模糊查询
     */
    account: string;

    constructor(account: string, page: number, size: number) {
        super(page, size);
        this.account = account;
    }
}

/**
 *  新建  修改时 form类
 */
export class UserForm {
    /**
     * 账号
     */
    account: string;
    /**
     * 密码
     */
    password: string;

    constructor(account: string = '', password: string = '') {
        this.account = account;
        this.password = password;
    }
}
