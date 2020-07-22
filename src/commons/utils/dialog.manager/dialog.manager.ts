export default class DialogManager {
    public visible: boolean;
    public reload: Function;
    public editingEntity: any;

    constructor(reload: Function, EditingEntity?: any) {
        this.visible = false;
        this.reload = reload;
        if (typeof EditingEntity === 'function') {
            this.editingEntity = new EditingEntity();
        } else {
            this.editingEntity = EditingEntity;
        }
    }

    public open(data?: any, EntityType?: Function) {
        this.visible = true;
        // @ts-ignore
        data && (this.editingEntity = Object.assign(EntityType ? new EntityType() : this.editingEntity, data));
    }

    public close(reloading: boolean) {
        reloading && this.reload();
        this.editingEntity = null;
        this.visible = false;
    }
}

interface PDialogManager <T> {
    visible: boolean;
    reload?: Function;
    dataConstructor?: Function;
    data: T;
}

class NDialogManager <T> {
    public visible: boolean;
    private readonly reload: Function | null;
    private dataConstructor: Function | null;
    public data: T;

    constructor(config: PDialogManager<T>) {
        const { visible, data, reload, dataConstructor } = config;
        this.visible = visible || false;
        this.data = data;
        this.reload = reload || null;
        this.dataConstructor = dataConstructor || null;
    }

    /**
     * 打开弹出框
     */
    private open(data?: any) {

    }
}
