import { BaseEntity } from '@/entities/entity';
import {Pager} from "@/entities/paging";

/**
 * 通知
 */
export interface Notice extends BaseEntity {
    /**
     * 标题
     */
    title: string;
    /**
     * 类型
     */
    type: number;
    /**
     * 通知内容
     */
    text: string;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
    /**
     * 通知人员id集合
     */
    recipientIds: number[];
}

/**
 * 通知及其相关信息
 */
export interface NoticeInfo {
    /**
     * 通知
     */
    notice: Notice;
    /**
     * 已读总数
     */
    readTotal: number;
    /**
     * 被通知人总数
     */
    notifiedTotal: number;
    /**
     * 上传文件
     */
    uploadFiles: string[];
}

/**
 * 表单数据
 */
export class NoticeForm {
    /**
     * 标题
     */
    title: string;
    /**
     * 类型
     */
    type: number;
    /**
     * 通知内容
     */
    text: string;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
    /**
     * 通知人员id集合
     */
    recipientIds: number[];
    /**
     * 上传的文件
     */
    uploadFiles: File[];

    constructor(title: string, type: number, text: string, attachmentIds: number[], recipientIds: number[], uploadFiles: File[]) {
        this.title = title;
        this.type = type;
        this.text = text;
        this.attachmentIds = attachmentIds;
        this.recipientIds = recipientIds;
        this.uploadFiles = uploadFiles;
    }
}

/**
 * 提示分页查询数据
 */
export class NoticePagingParams extends Pager {
    /**
     * 标题
     */
    title: string;
    /**
     * 状态
     */
    state: number;
    /**
     * 类型
     */
    type: number;

    constructor(page: number, size: number, title: string, state: number, type: number) {
        super(page, size);
        this.title = title;
        this.state = state;
        this.type = type;
    }
}
