import { Vue, Component } from 'vue-property-decorator';
import { Page } from '@/entities/paging';
import { throttle } from '@/commons/utils/es/function.utils';
import { deleteEntity as deleteDec } from '@/commons/decorators/delete';
import { ElForm } from 'element-ui/types/form';

@Component({ name: 'PagingMixin' })
export default class <T> extends Vue {
    /**
     * 页面的服务
     */
    public service: any = null;
    /**
     * 加载状态
     */
    public pagingLoading: boolean = false;
    /**
     * paging请求参数
     */
    pagingConditions: any = null;
    /**
     * paging请求返回的数据
     */
    public pageData: Page<T> | null = null;
    /**
     * 分页请求每一页的数据数量
     */
    public pageSize: number[] = [10, 20, 30, 40, 50, 100];

    /**
     * 当前编辑或者操作的实例
     */
    public entity: any = null;

    /**
     * 请求方法
     */
    public async paging(service?: any) {
        service = service || this.service;
        this.pagingLoading = true;
        try {
            this.pageData = await service.paging(this.pagingConditions);
            this.pagingLoading = false;
        } catch (e) {
            this.pagingLoading = false;
        }
    }

    /**
     * 点击搜索
     */
    public searchByConditions = throttle(this.paging)
    /**
     * 变更分页
     * @param current 新的页码
     */
    public changePage(current: number) {
        this.pagingConditions.page = current;
        this.paging();
    }
    /**
     * 变更每页数量
     * @param size 新的每页数量
     */
    public changeSize(size: number) {
        this.pagingConditions.page = 1;
        this.pagingConditions.size = size;
        this.paging();
    }

    /**
     * 删除实例
     * @param id 实例ID
     * @param service 实例服务
     */
    @deleteDec(undefined, 'pagingLoading')
    public async deleteEntity(id: number, service?: any) {
        service = service || this.service;
        const res = await service.delete(id);
        await this.paging();
    }

    /**
     * 重置查询条件
     */
    public reset() {
        (this.$refs.conditionsForm as ElForm).resetFields();
        this.paging();
    }

    /**
     * resetConditions
     */
    public resetConditions = throttle(this.reset);
}
