import AdminBaseService from '@/services/admin/admin.base';
import { Notice, NoticeForm, NoticeInfo, NoticePagingParams } from '@/entities/zz/notice';

/**
 * 通知服务
 */
class AdminNoticeService extends AdminBaseService<Notice, NoticeInfo, NoticePagingParams, NoticeForm> {

}

const adminNoticeService = new AdminNoticeService('/notice');
export default adminNoticeService;
