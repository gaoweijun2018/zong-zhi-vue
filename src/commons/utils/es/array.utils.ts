import _ from 'lodash';

/**
 * /**
 * 将truthy值强制转化为数组
 * @param value 值
 */
export const coerceTruthyValueToArray = (value: any): Array<any> => {
    if (Array.isArray(value)) {
        return value;
    } else if (value) {
        return [value];
    } else {
        return [];
    }
};
