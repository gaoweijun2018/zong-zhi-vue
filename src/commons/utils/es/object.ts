/**
 * 将对象转化为formData
 * @param object
 */
export function convertObjectToFormData(object: Object): FormData {
    const formData = new FormData();
    for (const key of Object.keys(object)) {
        // @ts-ignore
        if (object[key] !== undefined || object[key] !== null) {
            // @ts-ignore
            formData.append(key, object[key]);
        }
    }
    return formData;
}

/**
 * 获取属性值
 */
export function getValueByProp(data: any, prop: string, codeMap?: Map<any, any>) {
    const defaultText = '--';
    let temp = data;
    const propArr = prop.split('.');
    let i = 0;
    while (i < propArr.length) {
        if (!temp) return defaultText;
        temp = temp[propArr[i]];
        i++;
    }
    if (temp === undefined || temp === null) return defaultText;
    if (codeMap) { return codeMap.get(temp); }
    return temp;
}
