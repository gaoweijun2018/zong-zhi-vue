import { Meta } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

const PERSON_SEX: Meta = {
    metaData: {
        FEMALE: [0, '女'],
        MALE: [1, '男']
    },
    list: [],
    valueEnum: {}
};

const PERSON_STATE: Meta = {
    metaData: {
        // UN_ACHIEVED: [-1, '未删除'],
        // ACHIEVED: [0, '删除'],
        ACTIVATED: [1, '已激活', 'success-dot'],
        UN_ACTIVATED: [2, '未激活', 'default-dot'],
        FROZEN: [3, '已冻结', 'error-dot']
    },
    list: [],
    valueEnum: {}
};

initConstants([ PERSON_SEX, PERSON_STATE ]);
export { PERSON_SEX, PERSON_STATE };
