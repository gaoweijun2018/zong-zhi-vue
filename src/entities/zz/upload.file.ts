import { BaseEntity } from '@/entities/entity';
import { Pager } from '@/entities/paging';

/**
 * 用户信息
 */
export interface UploadFile extends BaseEntity {
    /**
     * 存储路径
     */
    path: string;
}

/**
 * 提示分页查询数据
 */
export class UploadFilePagingParams extends Pager {
    /**
     * 文件上传时间
     */
    createTime: string;

    constructor(createTime: string) {
        super();
        this.createTime = createTime;
    }
}
