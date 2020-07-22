import { BaseEntity } from '@/entities/entity';
import { Dept } from '@/entities/zz/dept';
import { ReportTask } from '@/entities/zz/report.task';
import { ReportTaskType } from '@/entities/zz/report.task.type';
import { UploadFile } from '@/entities/zz/upload.file';
import { Pager } from '@/entities/paging';

/**
 * 信息上报report
 */
export interface Report extends BaseEntity {
    /**
     * 上报任务id
     */
    taskId: number;
    /**
     * 栏目类型id
     */
    taskTypeId: number;
    /**
     * 部门id
     */
    deptId: number;
    /**
     * 报告时间
     */
    reportTime: string;
    /**
     *是否逾期 逾期60，未逾期61
     */
    expire: number;
    /**
     * 处理结果
     */
    result: string;
    /**
     * 审核意见
     */
    review: string;
    /**
     * 审核状态 / 暂不用
     */
    reviewState: number;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
}

/**
 * 信息上报及其相关信息
 */
export interface ReportInfo {
    /**
     * 信息
     */
    report: Report;
    /**
     * 部门
     */
    dept: Dept;
    /**
     * 上报任务
     */
    reportTask: ReportTask;
    /**
     * 栏目
     */
    reportTaskType: ReportTaskType;
    /**
     * 上传文件
     */
    uploadFiles: UploadFile[];
}
/**
 * 信息上报结果及其相关信息
 */
export interface ReportResultInfo {
    /**
     * 信息
     */
    report: Report;
    /**
     * 部门
     */
    dept: Dept;
}
/**
 * 表单数据
 */
export class ReportForm {
    /**
     * 处理结果
     */
    result: string;
    /**
     * 审查状态 预留
     */
    reviewState: number;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
    /**
     * 上传的文件
     */
    files: File[];

    constructor(result: string, reviewState: number, attachmentIds: number[], files: File[]) {
        this.result = result;
        this.reviewState = reviewState;
        this.attachmentIds = attachmentIds;
        this.files = files;
    }
}

/**
 * 提示分页查询数据
 */
export class ReportResultPagingParams extends Pager {
    /**
     * 栏目
     */
    typeId: number;

    constructor(typeId: number) {
        super();
        this.typeId = typeId;
    }
}

/**
 * 提示分页查询数据
 */
export class ReportPagingParams extends Pager {
    /**
     * 栏目
     */
    typeId: number;
    /**
     * 任务名称
     */
    taskName: string;
    /**
     * 部门id
     */
    deptId: string;

    constructor(typeId: number, taskName: string, deptId: string) {
        super();
        this.typeId = typeId;
        this.taskName = taskName;
        this.deptId = deptId;
    }
}
