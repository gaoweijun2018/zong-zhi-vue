import { Meta, MetaData } from '@/meta/meta';
import { initConstants } from '@/commons/utils/meta/code.utils';

export const HTTP_STATUS: MetaData = {
    SUCCESS: [0, '成功'],
    PARAMETER_ERROR: [112, '参数错误'],
    BAD_REQUEST: [400, 'Bad Request'],
    UNAUTHORIZED: [401, 'Unauthorized'],
    FORBIDDEN: [403, 'Forbidden'],
    NOT_FOUND: [404, 'Not Found'],
    SERVER_ERROR: [500, 'Internal Server Error']
};

export const STATE: MetaData = {
    ACHIEVED: [0, '删除'],
    ACTIVE: [1, '激活'],
    NO_ACTIVE: [10, '未激活']
};
