import { ElForm } from 'element-ui/types/form';
import { clearUndefinedOrNull } from '@/commons/utils';
import { Loading } from 'element-ui';
import { ElLoadingComponent } from 'element-ui/types/loading';

/**
 * 验证表单
 * @param formName
 */
export function validateForm(formName: string) {
    return function(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {
        const method = target[propertyName];
        propertyDescriptor.value = async function() {
            // @ts-ignore
            const validate = await (this.$refs[formName] as ElForm).validate();
            if (!validate) return;
            const result = method.apply(this, arguments);
            return result;
        };
        return propertyDescriptor;
    };
}

/**
 * 对表单数据进行处理
 */
export function formatFormData(formDataName: string) {
    return function(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {
        const method = target[propertyName];
        propertyDescriptor.value = function() {
            // @ts-ignore
            clearUndefinedOrNull(this[formDataName]);
            return method.apply(this, arguments);
        };
        return propertyDescriptor;
    };
}

/**
 * async loading
 */
export function asyncLoading(querySelector?: any) {
    let loadingInstance: ElLoadingComponent | null = null;
    return function(target: any, propertyKey: string, properDescriptor: PropertyDescriptor) {
        const method = target[propertyKey];
        properDescriptor.value = async function() {
            // @ts-ignore
            querySelector ? (loadingInstance = Loading.service({ target: querySelector, fullscreen: false })) : (this.loading = true);
            try {
                const result = await method.apply(this, arguments);
                loadingInstance ? loadingInstance.close() : ((this as { loading: boolean}).loading = false);
                return result;
            } catch (e) {
                // @ts-ignore
                loadingInstance ? loadingInstance.close() : ((this as { loading: boolean}).loading = false);
            }
        };
        return properDescriptor;
    };
}
