import { BaseService } from '@/services/base.service';
import { BaseEntity } from '@/entities/entity';
import clientClient from '@/clients/zz/client';

/**
 * 客户端基础服务
 */
export default class ClientBaseService<E extends BaseEntity, I, C, F> extends BaseService<E, I, C, F> {
    constructor(path: string) {
        super(path, clientClient);
    }
}
