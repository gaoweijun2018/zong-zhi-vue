import { BaseEntity } from '@/entities/entity';
import { Dept } from '@/entities/zz/dept';

/**
 * 员工信息
 */
export interface Employee extends BaseEntity {
    /**
     * 员工号
     */
    code: number;
    /**
     * 所属部门id
     */
    deptId: number;
    /**
     * 性别
     */
    sex: number;
    /**
     * 身份证号
     */
    idCard: string;
    /**
     * 手机号
     */
    mobile: number;
    /**
     * 电子邮箱
     */
    email: string;
    /**
     * 籍贯
     */
    originPlace: string;
}
export interface EmployeeInfo {
    /**
     * 员工
     */
    employee: Employee;
    /**
     * 部门
     */
    dept: Dept;
}
