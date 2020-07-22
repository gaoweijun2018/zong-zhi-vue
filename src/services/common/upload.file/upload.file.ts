import CommonBaseService from '../common.base';
import { UploadFile, UploadFilePagingParams } from '@/entities/zz/upload.file';

class CommonUploadFileService extends CommonBaseService<UploadFile, any, UploadFilePagingParams, any> {

}

const uploadFileService = new CommonUploadFileService('/upload/file');
export default uploadFileService;
