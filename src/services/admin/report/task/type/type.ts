import AdminBaseService from '@/services/admin/admin.base';
import {
    ReportTaskType,
    ReportTaskTypeForm,
    ReportTaskTypePagingParams
} from '@/entities/zz/report.task.type';
import { Page } from '@/entities/paging';

class AdminReportTaskTypeService extends AdminBaseService<ReportTaskType, ReportTaskType, ReportTaskTypePagingParams, ReportTaskTypeForm> {
    /**
     * 主页
     */
    paging(conditions: ReportTaskTypePagingParams) {
        return this.client({
            url: `${this.path}/paging`,
            method: 'get',
            params: conditions
        }) as Promise<unknown> as Promise<Page<ReportTaskType>>;
    }
}

const adminReportTaskTypeService = new AdminReportTaskTypeService('/report/task/type');
export default adminReportTaskTypeService;
