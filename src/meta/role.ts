import { Meta } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

/**
 * 角色类型
 */
const ROLE_TYPE: Meta = {
    metaData: {
        ADMIN: [1, '管理员', 'success-dot'],
        USER: [2, '综治联络员', 'processing-dot']
    },
    list: [],
    valueEnum: {}
};

initConstants(ROLE_TYPE);
export { ROLE_TYPE };
