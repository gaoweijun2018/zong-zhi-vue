import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { getToken, setToken, removeToken } from '@/commons/utils/storage/cookies';
import store from '@/store';
import { UserLoginParams } from '@/entities/login/login.def';
import userService from '@/services/account/user.service';
import router, { resetRouter } from '@/router';
import { UserAuth } from '@/entities/login/user.def';
import { Message } from 'element-ui';

export interface IUserState {
    token: string
    permissions: string[]
    userAuth: UserAuth | null
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public token = getToken() || '';
    public userAuth: UserAuth | null = null;
    public permissions: string[] = [];

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token;
    }

    @Mutation
    private SET_PERMISSIONS(permissions: string[]) {
        this.permissions = permissions;
    }

    @Mutation
    private SET_USER_AUTH(userAuth: UserAuth) {
        this.userAuth = userAuth;
    }

    @Mutation
    private CLEAR_USER_AUTH() {
        this.userAuth = null;
    }

    @Action({ rawError: true })
    public async Login(userLoginParams: UserLoginParams) {
        userLoginParams.username.trim();
        const { access_token } = await userService.login(userLoginParams);
        setToken(access_token);
        this.SET_TOKEN(access_token);
    }

    @Action({ rawError: true })
    public ResetToken() {
        removeToken();
        this.SET_TOKEN('');
        this.SET_PERMISSIONS([]);
    }

    @Action({ rawError: true })
    public async GetUserInfo() {
        if (this.token === '') {
            throw Error('登录已过期，请重新登录');
        }
        const userAuth: UserAuth = await userService.getUserAuth(this.token);

        const { authorities: permissions } = userAuth;
        if (!permissions || permissions.length <= 0) {
            Message.error('无角色权限，请联系管理员');
            this.SET_TOKEN('');
            removeToken();
            throw Error('GetUserInfo: roles must be a non-null array!');
        }
        this.SET_PERMISSIONS(permissions);
        this.SET_USER_AUTH(userAuth);
    }

    @Action({ rawError: true })
    public async LogOut() {
        this.SET_PERMISSIONS([]);
        resetRouter();
        if (this.token === '') {
            throw Error('LogOut: token is undefined!');
        }
        removeToken();
        this.SET_TOKEN('');
        this.CLEAR_USER_AUTH();
        await router.push({ name: 'login' });
    }
}

export const UserModule = getModule(User);
