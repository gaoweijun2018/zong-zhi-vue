<template>
    <div class="login-container">
        <div class="login__right">
            <div class="login-title">
                <span class="login-title__text">区域管控系统</span>
            </div>
            <el-form
                ref="loginForm"
                :model="loginForm"
                :rules="loginRules"
                class="login-form"
                autocomplete="on"
                label-position="left"
            >
                <el-form-item prop="username">
                    <span class="svg-container">
                        <svg-icon name="user" />
                    </span>
                    <el-input
                        ref="username"
                        v-model.trim="loginForm.username"
                        name="username"
                        type="text"
                        autocomplete="on"
                        placeholder="用户名"
                    />
                </el-form-item>

                <el-form-item
                    prop="password"
                    class="password"
                >
                    <svg-icon name="password" />
                    <el-input
                        :key="passwordType"
                        ref="password"
                        v-model.trim="loginForm.password"
                        :type="passwordType"
                        placeholder="密码"
                        name="password"
                        autocomplete="on"
                        @keyup.enter.native="handleLogin"
                    />
                </el-form-item>

                <el-button
                    :loading="loading"
                    type="primary"
                    style="width:100%; margin-bottom:30px;"
                    @click.native.prevent="handleLogin"
                >
                    登录
                </el-button>

                <div class="copy-right">
                    &copy; 2020-2021 江西通服科技有限公司
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" src="./login.ts">

</script>

<style lang="scss">
    // References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
    @supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
        .login-container .el-input {
            input {
                color: $loginCursorColor;
                height: 0;
                background-clip: content-box;
            }
        }
    }

    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .el-input {
            display: inline-block;
            height: 40px;
            width: 85%;

            input {
                background: transparent content-box;
                height: 0;
                border: 0px;
                border-radius: 0px;
                padding: 12px 5px 12px 0;
                color: $normal;
                -webkit-appearance: none;
            }
        }

        .el-form-item {
            height: 40px;
            background: rgba(255, 255, 255, 0);
            border-radius: 4px;
            color: #454545;
            border: 1px solid rgba(217, 217, 217, 1);
            margin-bottom: 24px;
        }

        .remember-password {
            margin-bottom: 24px;
            color: rgba(0,0,0,0.65);
        }
    }
</style>

<style lang="scss" src="./login.scss" scoped>

</style>
