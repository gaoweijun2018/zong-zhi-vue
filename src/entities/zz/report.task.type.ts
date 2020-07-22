import { BaseEntity } from '@/entities/entity';
import { Pager } from '@/entities/paging';

/**
 * 栏目类型reportTaskType
 */
export interface ReportTaskType extends BaseEntity {
    /**
     * 描述 备注
     */
    remark: string;
}

/**
 * 表单数据
 */
export class ReportTaskTypeForm {
    /**
     * 名称
     */
    name: string;
    /**
     * 备注
     */
    remark: string;

    constructor(name: string, remark: string) {
        this.name = name;
        this.remark = remark;
    }
}

/**
 * 提示分页查询数据
 */
export class ReportTaskTypePagingParams extends Pager {
    /**
     * 类型名称
     */
    name: string;
    /**
     * 状态
     */
    state: number;

    constructor(name: string, state: number) {
        super();
        this.name = name;
        this.state = state;
    }
}
