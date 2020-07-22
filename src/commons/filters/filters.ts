import _ from 'lodash';

// 解析地址
export { parseTime } from '@/commons/utils/es/time.utils';

// 拼接完整的图片地址
export const getImageUrl = (imageUrl?: string) => imageUrl ? process.env.VUE_APP_OSS_URL + imageUrl : null;

// form的模式
export const mode = (editingObject: any): string => (editingObject && editingObject.id) ? 'update' : 'create';

export const percentage = (percentage: number): string => percentage + '%';

// 通过code获取text
export const getTextByCode = (code: number | '--', codeMap: Map<number, string>, defaultText: string = '--') => {
    if (code === undefined || code === null || code === '--') {
        return defaultText;
    }
    const text = codeMap.get(code);
    return text || defaultText;
};

/**
 * 表单弹框的标题
 */
export const title = (mode: 'create' | 'update', entityName: string) => mode === 'create'
    ? `新增${entityName}` : `编辑${entityName}`;
