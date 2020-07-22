
import AdminBaseService from '@/services/admin/admin.base';
import { ReadNoticeRecord, ReadNoticeRecordInfo, ReadNoticeRecordPagingParams } from '@/entities/zz/read.notice.record';
import { Page } from '@/entities/paging';

/**
 * 阅读记录服务
 */
class AdminReadNoticeRecordService extends AdminBaseService<ReadNoticeRecord, ReadNoticeRecordInfo, any, any> {
    /**
     * 主页
     */
    paging(conditions: ReadNoticeRecordPagingParams): Promise<Page<ReadNoticeRecordInfo>> {
        return this.client({
            url: `${this.path}/paging/notice/${conditions.noticeId}`,
            method: 'get',
            params: conditions
        }) as unknown as Promise<Page<ReadNoticeRecordInfo>>;
    }
}

const adminReadNoticeRecordService = new AdminReadNoticeRecordService('/read/notice/record');
export default adminReadNoticeRecordService;
