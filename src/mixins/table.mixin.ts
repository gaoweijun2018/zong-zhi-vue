import { Component, Vue } from 'vue-property-decorator';
import { deleteEntity as deleteDec } from '@/commons/decorators/delete';

export function multiSelect(entityProp: string, entityName: string) {
    return function(target: any, propertyKey: string, properDescriptor: PropertyDescriptor) {
        const method = target[propertyKey];
        properDescriptor.value = function() {
            // @ts-ignore
            if (!this.selectedEntityInfos.length) {
                target.$message.error(`请选择${entityName}`);
                return;
            }
            // @ts-ignore
            if (!this.selectedEntityInfos.length > 1) {
                target.$message.error('当前不支持批量操作');
                return;
            }
            // @ts-ignore
            const entityIds = this.selectedEntityInfos.map((entityInfo: any) => entityInfo[entityProp].id);
            method.call(this, entityIds);
        };
        return properDescriptor;
    };
}

@Component({
    name: 'TableMixin'
})
export default class TableMixin<T> extends Vue {
    [x: string]: any;
    /**
     * 已选择的实例
     */
    public selectedEntityInfos: Array<T> = [];

    /**
     * 勾选表格事件处理
     */
    public handleSelectionChange(infos: Array<T>) {
        this.selectedEntityInfos = infos;
    }

    @deleteDec(undefined, 'pagingLoading')
    public async deleteEntities(ids: Array<number>) {
        // todo: service批量删除
        await this.service.delete(ids[0]);
        this.paging();
    }
}
