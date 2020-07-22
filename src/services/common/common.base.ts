import { BaseService } from '@/services/base.service';
import { BaseEntity } from '@/entities/entity';
import commonClient from '../../clients/zz/common';

/**
 * 通用基础服务
 */
export default class CommonBaseService<E extends BaseEntity, I, C, F> extends BaseService<E, I, C, F> {
    constructor(path: string) {
        super(path, commonClient);
    }
}
