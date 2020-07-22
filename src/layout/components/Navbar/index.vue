<template>
    <div class="navbar">
        <hamburger
            id="hamburger-container"
            :is-active="sidebar.opened"
            class="hamburger-container"
            @toggleClick="toggleSideBar"
        />
        <div class="right-menu">
            <el-dropdown
                class="avatar-container right-menu-item hover-effect"
                trigger="click"
            >
                <div class="avatar-wrapper">
                    <span class="user-name">{{ userName }}</span>
                    <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <span
                            style="display:block;"
                            @click="openDialogForm(personal('accountinfo'))"
                        >账号信息</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span
                            style="display:block;"
                            @click="openDialogForm(personal('password'))"
                        >修改密码</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span
                            style="display:block;"
                            @click="logout"
                        >退出登录</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import { UserModule } from '@/store/modules/user';
import Hamburger from '@/commons/components/Hamburger/index.vue';
import { UserAuth } from '@/entities/login/user.def';
import AccountInfo from '@/layout/components/Navbar/account.info.vue';

@Component({
    name: 'Navbar',
    components: {
        Hamburger,
        AccountInfo
    }
})
export default class extends Vue {
    private mode: string = '';

    get sidebar() {
        return AppModule.sidebar;
    }

    get userName() {
        return (UserModule.userAuth as UserAuth).accountName;
    }

    get device() {
        return AppModule.device.toString();
    }

    private toggleSideBar() {
        AppModule.ToggleSideBar(false);
    }

    private async logout() {
        await UserModule.LogOut();
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        height: $navHeight;
        overflow: hidden;
        position: relative;
        background: #fff;
        box-shadow:0px 1px 4px 0px rgba(0,21,41,0.12);

        .hamburger-container {
            line-height: 60px;
            height: 100%;
            float: left;
            padding: 0 15px;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color: transparent;

            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }

        .breadcrumb-container {
            float: left;
        }

        .right-menu {
            float: right;
            height: 100%;
            line-height: $navHeight;

            &:focus {
                outline: none;
            }

            .right-menu-item {
                display: inline-block;
                padding: 0 8px;
                height: 100%;
                font-size: 18px;
                color: #5a5e66;
                vertical-align: text-bottom;

                &.hover-effect {
                    cursor: pointer;
                    transition: background .3s;

                    &:hover {
                        background: rgba(0, 0, 0, .025)
                    }
                }
            }

            .avatar-container {
                margin-right: 30px;

                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;
                    font-size: 14px;

                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }

                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
