import AdminBaseService from '@/services/admin/admin.base';
import { User, UserForm, UserInfo, UserPagingParams } from '@/entities/zz/user';

class AdminUserService extends AdminBaseService<User, UserInfo, UserPagingParams, UserForm> {

}

const adminUserService = new AdminUserService('/user');
export default adminUserService;
