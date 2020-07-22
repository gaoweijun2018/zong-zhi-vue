import { BaseEntity } from '@/entities/entity';
import { UserInfo } from '@/entities/zz/user';
import { Pager } from '@/entities/paging';

/**
 * 阅读记录
 */
export interface ReadNoticeRecord extends BaseEntity {
    /**
     * 通知id
     */
    noticeId: number;
    /**
     * 用户id
     */
    userId: number;
}

/**
 * 阅读记录及其相关信息
 */
export interface ReadNoticeRecordInfo {
    /**
     * 信息
     */
    readNoticeRecord: ReadNoticeRecord;
    /**
     * 用户及其相关信息
     */
    userInfo: UserInfo;
}

/**
 * 阅读记录分页查询参数
 */
export class ReadNoticeRecordPagingParams extends Pager {
    /**
     * 通知ID
     */
    noticeId: number;

    constructor(noticeId: number) {
        super();
        this.noticeId = noticeId;
    }
}
