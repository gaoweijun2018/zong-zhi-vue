import AdminBaseService from '../admin.base';
import { Report, ReportForm, ReportInfo, ReportPagingParams } from '@/entities/zz/report';

class AdminReportService extends AdminBaseService<Report, ReportInfo, ReportPagingParams, ReportForm> {
}

export default new AdminReportService('/report');
