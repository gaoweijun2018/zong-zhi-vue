import AdminBaseService from '@/services/admin/admin.base';
import { ReportTask, ReportTaskForm, ReportTaskInfo, ReportTaskParams } from '@/entities/zz/report.task';

class AdminReportTaskService extends AdminBaseService<ReportTask, ReportTaskInfo, ReportTaskParams, ReportTaskForm> {

}

const adminReportTaskService = new AdminReportTaskService('/report/task');
export default adminReportTaskService;
