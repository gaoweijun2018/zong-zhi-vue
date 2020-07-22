import { BaseService } from '@/services/base.service';
import { Page } from '@/entities/paging';
import account from '@/clients/account';

export class AccountService extends BaseService<any, any, any, any> {
    constructor(path: string) {
        super(path, account);
    }

    /**
     * mainView的查询
     * @param conditions
     */
    async paging(conditions: any): Promise<Page<any>> {
        const json = await this.client({
            url: this.path + '/main/view',
            method: 'get',
            params: conditions
        });

        return json as unknown as Page<any>;
    }
}
