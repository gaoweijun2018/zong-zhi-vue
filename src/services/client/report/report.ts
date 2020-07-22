import ClientBaseService from '@/services/client/client.base';
import { Report, ReportForm, ReportInfo, ReportPagingParams } from '@/entities/zz/report';

class ClientReportService extends ClientBaseService<Report, ReportInfo, ReportPagingParams, ReportForm> {

}

const clientReportService = new ClientReportService('/report');
export default clientReportService;
