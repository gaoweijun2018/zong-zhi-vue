import { User, UserForm, UserInfo } from '@/entities/zz/user';
import CommonBaseService from '@/services/common/common.base';
import { Page } from '@/entities/paging';

class CommonUserService extends CommonBaseService<User, UserInfo, any, UserForm> {
    /**
     * 获取个人信息
     */
    async paging(conditions: any) {
        return this.client({
            url: `${this.path}/me`,
            method: 'get',
            params: conditions
        }) as Promise<unknown> as Promise<Page<UserInfo>>;
    }
}
const userService = new CommonUserService('/common/user');
export default userService;
