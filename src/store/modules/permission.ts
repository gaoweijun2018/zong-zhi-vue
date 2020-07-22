import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { RouteConfig } from 'vue-router';
import { asyncRoutes, constantRoutes } from '@/router';
import store from '@/store';
import { UserModule } from '@/store/modules/user';
import { UserAuth } from '@/entities/login/user.def';

/**
 * 判断路由是否拥有权限
 * @param permissions 用户拥有的权限
 * @param route
 */
const hasPermission = (permissions: string[], route: RouteConfig): boolean => {
    if (route.meta && route.meta.permissions) {
        return route.meta.permissions.some((el: string) => permissions.includes(
            'permission'
            // 示例 TODO: 添加权限常量
            // { ...zmPermissionDef, ...accountPermissionDef }[el].code
        ));
    } else {
        return true;
    }
};

export const filterAsyncRoutes = (routes: RouteConfig[], permissions: string[]): RouteConfig[] => {
    const res: RouteConfig[] = [];
    routes.forEach(route => {
        const r = { ...route };
        if (hasPermission(permissions, r)) {
            if (r.children) {
                r.children = filterAsyncRoutes(r.children, permissions);
                // 路由重导航
                if (r.children && r.children.length) {
                    r.redirect = { name: r.children[0].name };
                }
            }
            if (!r.children || r.children.length) {
                res.push(r);
            }
        }
    });
    return res;
};

export interface IPermissionState {
    routes: RouteConfig[]
    dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
    public routes: RouteConfig[] = [];
    public dynamicRoutes: RouteConfig[] = [];

    @Mutation
    private SET_ROUTES(routes: RouteConfig[]) {
        this.routes = constantRoutes.concat(routes);
        this.dynamicRoutes = routes;
    }

    @Action({ rawError: true })
    public async GenerateRoutes(permissions: string[]) {
        const userState = (UserModule.userAuth as unknown as UserAuth).state;
        let accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions);
        const indexPage = {
            path: '/',
            name: 'index',
            redirect: accessedRoutes[0].path
        };
        this.SET_ROUTES([indexPage, ...accessedRoutes]);
    }
}

export const PermissionModule = getModule(Permission);
