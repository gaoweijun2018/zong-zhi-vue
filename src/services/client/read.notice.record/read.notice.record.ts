import ClientBaseService from '@/services/client/client.base';

class ClientReportNoticeRecordService extends ClientBaseService<any, any, any, any> {
    /**
     * 查看 已读业务
     * @param noticeId 通知id
     */
    read(noticeId: number) {
        return this.client({
            url: `${this.path}/notice/{noticeId}`,
            method: 'put'
        });
    }
}
const clientReportNoticeRecordService = new ClientReportNoticeRecordService('/read/notice/record');
export default clientReportNoticeRecordService;
