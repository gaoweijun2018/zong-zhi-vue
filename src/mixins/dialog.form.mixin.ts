import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { Form } from 'element-ui';
import { clearUndefinedOrNull } from '@/commons/utils';

/**
 * 有弹出框表单的混入
 */
@Component({
    name: 'DialogFormMixin'
})
export default class extends Vue {
    /**
     * 创建模式 create/update
     */
    @Prop({ type: String })
    public mode!: string
    /**
     * 表单数据
     */
    @Prop()
    public formData!: any;
    /**
     * 调用接口中
     */
    public loading: boolean = false;
    /**
     * 表单service
     */
    public service: any = null;

    /**
     * 操作成功
     */
    public parentNeedReload: boolean = false;

    /**
     * 标题
     */
    public get title(): string {
        return this.mode === 'create' ? '新建' : '编辑';
    }

    /**
     * 提交表单
     * 1. 验证表单数据是否满足验证规则
     * 2. 判断是新建还是更新
     * 3. 调用后端接口
     */
    public async submit(data?: any) {
        try {
            const valid = await (<Form> this.$refs.dialogForm).validate();
            if (!valid) return;
            if (!data) {
                clearUndefinedOrNull(this.formData);
                data = this.formData;
            }
            data = data || this.formData;
            const methodName = this.mode === 'create' ? 'create' : 'update';
            this.loading = true;
            try {
            // 新建/更新该数据 成功之后关闭弹框 提示
                const res = await this.service[methodName](data);
                this.loading = false;
                this.parentNeedReload = true;
                this.close();
                this.$message.success(this.mode === 'create' ? '新建成功' : '编辑成功');
            } catch (e) {
                this.loading = false;
            }
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * 关闭弹框;
     */
    @Emit()
    public close() {
        return this.parentNeedReload;
    }
}
