import { Meta } from '@/meta/meta';
import { coerceTruthyValueToArray } from '../es/array.utils';

interface InitConstant {
    (constant: Meta): void
}

/**
 * 初始化常量
 * @param constant
 */
export const initConstant: InitConstant = (constant: Meta): void => {
    for (const key of Object.keys(constant.metaData)) {
        constant.list.push([constant.metaData[key][0], constant.metaData[key][1]]);
        constant.valueEnum[constant.metaData[key][0]] = {
            text: constant.metaData[key][1],
            status: constant.metaData[key][2] ? constant.metaData[key][2] : 'default-dot'
        };
    }
};

/**
 * 初始化多个常量
 * @param constants
 */
export const initConstants = (constants: Meta | Meta[]): void => {
    const constantArray: Meta[] = coerceTruthyValueToArray(constants);
    constantArray.forEach(meta => initConstant(meta));
};
