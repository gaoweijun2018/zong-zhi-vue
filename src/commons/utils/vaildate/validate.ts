export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path);

/**
 * 判断只能是数字或者字母
 * @param str
 */
export const isCharOrNumber = (str: string) => /^[A-Za-z0-9]+$/.test(str);

/**
 * 验证手机号
 */
export const validatePhone = (phone: string): boolean => {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(phone);
};

/**
 * 验证验证码
 */
export const validateCode = (code: string): boolean => {
    return /^\d{6}$/.test(code);
};

/**
 * 验证身份证
 */
export const validateIdCard = (id: string): boolean => {
    const pattern = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return pattern.test(id);
};

/**
 * el form validator
 */
export class FormValidator {
    /**
     * 验证手机号格式是否正确
     * @param rule
     * @param value
     * @param callback
     */
    static validatePhone(rule: any, value: any, callback: Function) {
        if (!value) {
            callback();
            return;
        }
        if (!validatePhone(value)) {
            callback(new Error('手机号格式不正确'));
            return;
        }
        callback();
    }

    /**
     * 验证手机号格式是否正确
     * @param rule
     * @param value
     * @param callback
     */
    static validateBlank(rule: any, value: any, callback: Function) {
        if (!value) {
            callback();
            return;
        }
        if (!/^[^\s].*[^\s]$/.test(value)) {
            callback(new Error('字段首尾不能有空格'));
            return;
        }
        callback();
    }

    /**
     * 验证手机号格式是否正确
     * @param rule
     * @param value
     * @param callback
     */
    static validateIdCard(rule: any, value: any, callback: Function) {
        if (!value) {
            callback();
            return;
        }
        if (!validateIdCard(value)) {
            callback(new Error('身份证格式不正确'));
            return;
        }
        callback();
    }

    /**
     * 验证手机号格式是否正确
     * @param rule
     * @param value
     * @param callback
     */
    static validateName(rule: any, value: any, callback: Function) {
        if (!value) {
            callback();
            return;
        }
        if (!/^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/.test(value)) {
            callback(new Error('姓名格式不正确'));
            return;
        }
        callback();
    }

    /**
     * 验证工号
     * @param rule
     * @param value
     * @param callback
     */
    static validatePersonCode(rule: any, value: any, callback: Function) {
        if (!value) {
            callback();
            return;
        }
        if (!/^[0-9a-zA-Z]*$/g.test(value)) {
            callback(new Error('工号只能为字母或数字'));
            return;
        }
        if (value.length < 6 || value.length > 18) {
            callback(new Error('工号长度为6-18'));
            return;
        }
        callback();
    }
}
