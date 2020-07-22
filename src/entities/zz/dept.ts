import { BaseEntity } from '@/entities/entity';

/**
 * 部门信息
 */
export interface Dept extends BaseEntity {
    /**
     * 上级部门id 外键关联
     */
    parentId: number;
    /**
     * 排序
     */
    sort: number;
}
