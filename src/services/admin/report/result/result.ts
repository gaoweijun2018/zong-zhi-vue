import { ReportResultInfo, ReportResultPagingParams } from '@/entities/zz/report';
import AdminBaseService from '@/services/admin/admin.base';
import { Page } from '@/entities/paging';

class AdminReportResultService extends AdminBaseService<any, ReportResultInfo, ReportResultPagingParams, any> {
    /**
     * 主页
     */
    async paging(conditions: ReportResultPagingParams) {
        return this.client({
            url: `${this.path}/paging/${conditions.typeId}`,
            method: 'get',
            params: conditions
        }) as unknown as Promise<Page<ReportResultInfo>>;
    }
}

const adminReportResultService = new AdminReportResultService('/report/result');
export default adminReportResultService;
