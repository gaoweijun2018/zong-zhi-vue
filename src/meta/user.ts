import { Meta } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

/**
 * 用户状态
 */
const USER_STATE: Meta = {
    metaData: {
        ACTIVE: [1, '是', 'processing-dot'],
        UN_ACTIVE: [0, '否', 'default-dot']
    },
    list: [],
    valueEnum: {}
};

initConstants(USER_STATE);

export { USER_STATE };
