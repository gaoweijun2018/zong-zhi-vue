import { compressAccurately } from 'image-conversion';

/**
 * 清除提交表单的null/undefined
 * @param form
 */
export const clearUndefinedOrNull = (form: any) => {
    Object.keys(form).forEach(key => {
        if (form[key] === undefined || form[key] === null) {
            form[key] = '';
        }
    });
};

/**
 * 压缩文件到制定大小
 */
export const compressImage = (image: File): Promise<Blob> => {
    return compressAccurately(image, {
        size: 500,
        orientation: 2
    });
};
