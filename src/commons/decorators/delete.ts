export function deleteEntity(entityName?: string, loadingProp?: string) {
    return function(target: any, propertyKey: string, properDescriptor: PropertyDescriptor) {
        let success: boolean = true;
        const method = target[propertyKey];
        properDescriptor.value = async function() {
            try {
                // @ts-ignore
                await this.$confirm('确认删除吗？删除后不可还原', '确认提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                // @ts-ignore
                this[loadingProp || 'loading'] = true;
                try {
                    await method.apply(this, arguments);
                    // @ts-ignore
                    this.$message.success('删除成功');
                    // @ts-ignore
                    this.pagingLoading = false;
                } catch (e) {
                    // @ts-ignore
                    this[loadingProp || 'loading'] = false;
                    success = false;
                }
            } catch (e) {
                console.log('已取消删除');
                success = false;
            }
            return success;
        };
        return properDescriptor;
    };
}

/**
 * 取消
 * @param entityName
 * @param loadingProp
 */
export function cancelEntity(entityName?: string, loadingProp?: string) {
    return function(target: any, propertyKey: string, properDescriptor: PropertyDescriptor) {
        const method = target[propertyKey];
        properDescriptor.value = async function() {
            try {
                // @ts-ignore
                await this.$confirm('确认取消吗？取消后不可还原', '确认提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                // @ts-ignore
                this[loadingProp || 'loading'] = true;
                try {
                    await method.apply(this, arguments);
                    // @ts-ignore
                    this.paging();
                    // @ts-ignore
                    this.$message.success('取消成功');
                    // @ts-ignore
                    this.pagingLoading = false;
                } catch (e) {
                    // @ts-ignore
                    this.pagingLoading = false;
                    // @ts-ignore
                    this[loadingProp || 'loading'] = false;
                }
            } catch (e) {
                console.log('已取消删除');
            }
        };
        return properDescriptor;
    };
}
