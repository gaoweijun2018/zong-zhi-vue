import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { getSidebarStatus, setSidebarStatus } from '@/commons/utils/storage/cookies';
import store from '@/store';

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface IAppState {
    device: DeviceType
    sidebar: {
        opened: boolean
        withoutAnimation: boolean
    }
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
    public sidebar = {
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false
    };

    public device = DeviceType.Desktop;

    @Mutation
    private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.opened = !this.sidebar.opened;
        this.sidebar.withoutAnimation = withoutAnimation;
        if (this.sidebar.opened) {
            setSidebarStatus('opened');
        } else {
            setSidebarStatus('closed');
        }
    }

    @Mutation
    private CLOSE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.opened = false;
        this.sidebar.withoutAnimation = withoutAnimation;
        setSidebarStatus('closed');
    }

    @Mutation
    private OPEN_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.opened = true;
        this.sidebar.withoutAnimation = withoutAnimation;
        setSidebarStatus('opened');
    }

    @Mutation
    private TOGGLE_DEVICE(device: DeviceType) {
        this.device = device;
    }

    @Action
    public ToggleSideBar(withoutAnimation: boolean) {
        this.TOGGLE_SIDEBAR(withoutAnimation);
    }

    @Action
    public CloseSideBar(withoutAnimation: boolean) {
        this.CLOSE_SIDEBAR(withoutAnimation);
    }

    @Action
    public OpenSideBar(withoutAnimation: boolean) {
        this.OPEN_SIDEBAR(withoutAnimation);
    }

    @Action
    public ToggleDevice(device: DeviceType) {
        this.TOGGLE_DEVICE(device);
    }
}

export const AppModule = getModule(App);
