import { BaseEntity } from '@/entities/entity';

/**
 * 角色信息
 */
export interface Role extends BaseEntity {
    /**
     * 编码
     */
    code: number;
}
export interface RoleInfo {
    /**
     * 查看角色关联对象
     */
    role: Role;
    /**
     * 查看权限关联对象组
     */
    permissions: Permissions;
}
