'use strict';

/**
 * 分页信息的结构
 */
export interface Page<T> {
    /**
     * 分页内容
     */
    list: Array<T>
    /**
     * 每页数量
     */
    pageSize: number
    /**
     * 当前页的数量
     */
    size: number
    /**
     * 当前页
     */
    pageNum: number
    /**
     * 总页数
     */
    totalPage: number
    /**
     * 总记录数
     */
    total: number

    /**
     * 当前页面第一个元素在数据库中的行号
     */
    startRow: number

    /**
     * 当前页面最后一个元素在数据库中的行号
     */
    endRow: number

    /**
     * 是否有前一页
     */
    hasPreviousPage: boolean

    /**
     * 是否有下一页
     */
    hasNextPage: boolean
}

/**
 * 分页查询参数
 */
export class Pager {
    /**
     * 页
     */
    pageNum: number;
    /**
     * 每页大小
     */
    pageSize: number;

    constructor(pageNum: number = 1, pageSize: number = 10) {
        this.pageNum = pageNum;
        this.pageSize = pageSize;
    }
}
