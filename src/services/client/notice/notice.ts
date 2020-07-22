import { Notice, NoticeForm, NoticeInfo, NoticePagingParams } from '@/entities/zz/notice';
import ClientBaseService from '@/services/client/client.base';

class ClientNoticeService extends ClientBaseService<Notice, NoticeInfo, NoticePagingParams, NoticeForm> {

}

const clientNoticeService = new ClientNoticeService('/notice');
export default clientNoticeService;
