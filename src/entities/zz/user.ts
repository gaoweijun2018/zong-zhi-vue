import { BaseEntity } from '@/entities/entity';
import { EmployeeInfo } from '@/entities/zz/employee';
import { RoleInfo } from '@/entities/zz/role';
import { Pager } from '@/entities/paging';

/**
 * 用户信息
 */
export interface User extends BaseEntity {
    /**
     * 员工ID
     */
    employeeId: number;
    /**
     * 角色ID
     */
    roleId: number;
    /**
     * 电话
     */
    phone: number;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 开户行
     */
    bank: string;
    /**
     * 银行账号
     */
    bankAccount: string;
}
/**
 * 用户及其相关信息
 */
export interface UserInfo {
    /**
     * 用户
     */
    user: User;
    /**
     * 员工
     */
    employeeInfo: EmployeeInfo;
    /**
     * 角色
     */
    roleInfo: RoleInfo;
}
/**
 * 用户的表单数据
 */
export class UserForm {
    /**
     * 员工号
     */
    employeeId: number;
    /**
     * 角色id
     */
    roleId: number;
    /**
     * 电话
     */
    phone: number;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 开户银行
     */
    bank: string;
    /**
     * 银行卡号
     */
    bankAccount: string;
    /**
     * 备注
     */
    remark: string;

    constructor(employeeId: number, roleId: number, phone: number, email: string, bank: string, bankAccount: string, remark: string) {
        this.employeeId = employeeId;
        this.roleId = roleId;
        this.phone = phone;
        this.email = email;
        this.bank = bank;
        this.bankAccount = bankAccount;
        this.remark = remark;
    }
}

/**
 * 提示分页查询数据
 */
export class UserPagingParams extends Pager {
    /**
     * 部门id==单位名称
     */
    deptId: number;
    /**
     * 员工号==登录名
     */
    code: string;
    /**
     * 姓名
     */
    name: string;

    constructor(deptId: number, code: string, name: string) {
        super();
        this.deptId = deptId;
        this.code = code;
        this.name = name;
    }
}
