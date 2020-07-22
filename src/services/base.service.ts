'use strict';

import { AxiosInstance } from 'axios';
import { Page } from '@/entities/paging';
import { BaseEntity } from '@/entities/entity';

// E 实体类型
// I 实体关联信息
// C 实体分页查询条件
// F 实体创建/更新参数

export abstract class BaseService<E extends BaseEntity, I, C, F> {
    path: string;
    client: AxiosInstance;
    constructor(path: string, client: AxiosInstance) {
        this.path = path;
        this.client = client;
    }

    /**
     * 根据条件查询
     * @param conditions
     */
    find(conditions?: any): Promise<E[]> {
        return this.client({
            url: this.path + '/all',
            method: 'get',
            params: conditions
        }) as unknown as Promise<E[]>;
    }

    /**
     * 分页查询
     * @param conditions
     */
    paging(conditions: C): Promise<Page<I>> {
        return this.client({
            url: this.path + '/main/view',
            method: 'get',
            params: conditions
        }) as unknown as Promise<Page<I>>;
    }

    /**
     * 根据ID查询
     * @param id
     */
    get(id: number): Promise<E> {
        return this.client({
            url: this.path + '/' + id,
            method: 'get'
        }) as unknown as Promise<E>;
    }

    /**
     * 新建
     * @param data
     */
    create(data: F): Promise<void> {
        return this.client({
            url: this.path,
            method: 'post',
            data: data
        }) as unknown as Promise<void>;
    }

    /**
     * 更新
     * @param id
     * @param data
     */
    update(id: number, data: F): Promise<void> {
        return this.client({
            url: this.path + '/' + id,
            method: 'put',
            data: data
        }) as unknown as Promise<void>;
    }

    /**
     * 删除
     * @param id
     */
    delete(id: number): Promise<void> {
        return this.client({
            url: this.path + '/' + id,
            method: 'delete'
        }) as unknown as Promise<void>;
    }
}
