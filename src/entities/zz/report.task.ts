import { BaseEntity } from '@/entities/entity';
import { Dept } from '@/entities/zz/dept';
import { ReportTaskType } from '@/entities/zz/report.task.type';
import { Pager } from '@/entities/paging';

/**
 * 上报任务reportTask
 */
export interface ReportTask extends BaseEntity {
    /**
     * 栏目类型id
     */
    typeId: number;
    /**
     * 部门列表
     */
    deptIds: number[];
    /**
     * 任务起始时间
     */
    startTime: string;
    /**
     * 任务结束时间
     */
    endTime: string;
    /**
     * 是否需要上传附件
     */
    needAttachment: number;
    /**
     * 描述 备注
     */
    remark: string;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
}

/**
 * 上报任务及其相关信息
 */
export interface ReportTaskInfo {
    /**
     * 上报任务
     */
    reportTask: ReportTask;
    /**
     * 部门
     */
    dept: Dept;
    /**
     * 栏目
     * @link ReportTaskType
     */
    reportTaskType: ReportTaskType;
    /**
     * 上传文件
     */
    uploadFiles: string[];
}

/**
 * 表单数据
 */
export class ReportTaskForm {
    /**
     * 栏目id
     */
    typeId: number;
    /**
     * 任务名称
     */
    name: string;
    /**
     * 任务描述
     */
    remark: string;
    /**
     * 上报单位ids
     */
    deptIds: number[];
    /**
     * 状态，发布、草稿
     */
    state: number;
    /**
     * 任务起始时间
     */
    startTime: string;
    /**
     * 任务结束时间
     */
    endTime: string;
    /**
     * 是否需要上传附件
     */
    needAttachment: number;
    /**
     * 附件id集合
     */
    attachmentIds: number[];
    /**
     * 上传的文件
     */
    files: File[];

    constructor(typeId: number, name: string, remark: string, deptIds: number[], state: number, startTime: string, endTime: string, needAttachment: number, attachmentIds: number[], files: File[]) {
        this.typeId = typeId;
        this.name = name;
        this.remark = remark;
        this.deptIds = deptIds;
        this.state = state;
        this.startTime = startTime;
        this.endTime = endTime;
        this.needAttachment = needAttachment;
        this.attachmentIds = attachmentIds;
        this.files = files;
    }
}

/**
 * 提示分页查询数据
 */
export class ReportTaskParams extends Pager {
    /**
     * 任务名称
     */
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
