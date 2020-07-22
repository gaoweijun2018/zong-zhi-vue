import { Meta } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

/**
 * 通知类型
 */
const NOTICE_TYPE: Meta = {
    metaData: {
        WORK: [1, '工作通知'],
        NEWS: [2, '综治动态'],
        BRIEF: [3, '综治工作简报']
    },
    list: [],
    valueEnum: {}
};

/**
 * 通知状态
 */
const NOTICE_STATE: Meta = {
    metaData: {
        ACHIEVED: [0, '已归档', 'processing-dot'],
        UN_ACHIEVED: [-1, '未归档', 'success-dot'],
        ACTIVE: [1, '发布', 'default-dot'],
        DRAFT: [10, '草稿', 'error-dot']
    },
    list: [],
    valueEnum: {}
};

initConstants([ NOTICE_TYPE, NOTICE_STATE ]);
export { NOTICE_TYPE, NOTICE_STATE };
