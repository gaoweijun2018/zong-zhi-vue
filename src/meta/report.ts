import { Meta } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

/**
 * report状态
 */
const REPORT_STATE: Meta = {
    metaData: {
        UN_ACHIEVED: [-1, '未归档', 'default-dot'],
        ARCHIVED: [0, '已归档', 'processing-dot'],
        ACTIVE: [1, '激活', 'success-dot'],
        DRAFT: [10, '草稿', 'default-dot'],
        UN_REPORTED: [50, '未上报', 'default-dot'],
        REPORTED: [51, '逾期', 'error-dot'],
        UN_EXPIRE: [60, '未逾期', 'success-dot']
    },
    list: [],
    valueEnum: {}
};

initConstants(REPORT_STATE);
export { REPORT_STATE };
