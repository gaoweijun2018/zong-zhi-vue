import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Dictionary } from 'vue-router/types/router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { UserLoginParams } from '@/entities/login/login.def';
import {
    getRemember,
    getUserName,
    getPassword,
    setUserName,
    setPassword,
    setRemember
} from '@/commons/utils/storage/local.storage.utils';

@Component({
    name: 'Login'
})
export default class extends Vue {
    /**
     * 登录表单
     */
    private loginForm: UserLoginParams = {
        username: '',
        password: '',
        grant_type: 'password'
    };
    /**
     * 登录表单验证规则
     */
    private loginRules = {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    /**
     * 密码类型
     */
    private passwordType = 'password';
    /**
     * 登录状态
     */
    private loading = false;
    private showDialog = false;
    private redirect?: string;
    private otherQuery: Dictionary<string> = {}
    /**
     * 记住密码
     */
    private rememberPassword: boolean = false

    @Watch('$route', { immediate: true })
    private onRouteChange(route: Route) {
        // See https://github.com/vuejs/vue-router/pull/2050 for details
        const query = route.query as Dictionary<string>;
        if (query) {
            this.redirect = query.redirect;
            this.otherQuery = this.getOtherQuery(query);
        }
    }

    mounted() {
        // 从localStorage中读取是否记住密码，如果记住密码，读取用户名和密码，填充
        this.rememberPassword = getRemember() === 'true';
        if (this.rememberPassword) {
            this.loginForm.username = getUserName() as string;
            this.loginForm.password = getPassword() as string;
        }
        // 当用户名或者密码为空时，聚焦在输入框
        if (this.loginForm.username === '') {
            (this.$refs.username as Input).focus();
        } else if (this.loginForm.password === '') {
            (this.$refs.password as Input).focus();
        }
    }

    /**
     * 在登录成功时，记住密码
     */
    private savePassword() {
        if (this.rememberPassword) {
            setUserName(this.loginForm.username);
            setPassword(this.loginForm.password);
            setRemember(this.rememberPassword);
        } else {
            localStorage.clear();
        }
    }

    /**
     * 展示密码或者隐藏密码
     */
    private showPwd() {
        if (this.passwordType === 'password') {
            this.passwordType = '';
        } else {
            this.passwordType = 'password';
        }
        this.$nextTick(() => {
            (this.$refs.password as Input).focus();
        });
    }

    /**
     * 登录业务
     */
    private async handleLogin() {
        const valid = await (this.$refs.loginForm as ElForm).validate();
        if (!valid) return;
        // 调用登录请求接口。请求成功，获取返回token，通过token获取userInfo
        this.loading = true;
        try {
            await UserModule.Login(this.loginForm);
            this.$router.push({
                path: this.redirect || '/',
                query: this.otherQuery
            });
            this.savePassword();
            this.loading = false;
        } catch (e) {
            this.loading = false;
        }
    }

    /**
     * 路由重导航的逻辑
     * @param query
     */
    private getOtherQuery(query: Dictionary<string>) {
        return Object.keys(query).reduce((acc, cur) => {
            if (cur !== 'redirect') {
                acc[cur] = query[cur];
            }
            return acc;
        }, {} as Dictionary<string>);
    }
}
