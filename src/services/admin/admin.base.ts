import { BaseService } from '@/services/base.service';
import { BaseEntity } from '@/entities/entity';
import adminClient from '@/clients/zz/admin';

/**
 * 管理端基础服务
 */
export default class AdminBaseService<E extends BaseEntity, I, C, F> extends BaseService<E, I, C, F> {
    constructor(path: string) {
        super(path, adminClient);
    }
}
