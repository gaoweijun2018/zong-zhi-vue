import { BaseEntity } from '@/entities/entity';

/**
 * 角色和权限关系
 */
export interface Permissions extends BaseEntity {
    /**
     * 编码
     */
    code: number;
}
