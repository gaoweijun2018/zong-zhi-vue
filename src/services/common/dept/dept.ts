import CommonBaseService from '@/services/common/common.base';
import { Dept } from '@/entities/zz/dept';

class CommonDeptService extends CommonBaseService<Dept, Dept, any, any> {
    /**
     * 获取上级部门名称 树结构
     */
    tree() {
        return this.client({
            url: `${this.path}/tree`,
            method: 'get'
        });
    }
}

const commonDeptService = new CommonDeptService('/dept');
export default commonDeptService;
