<template>
    <div
        class="sidebar-logo-container"
        :class="{'collapse': collapse}"
    >
        <transition name="sidebarLogoFade">
            <router-link
                v-if="collapse"
                key="collapse"
                class="sidebar-logo-link"
                to="/"
            >
                <svg-icon
                    name="logo"
                    class="sidebar-logo"
                />
            </router-link>
            <router-link
                v-else
                key="expand"
                class="sidebar-logo-link"
                to="/"
            >
                <svg-icon
                    name="logo"
                    class="sidebar-logo"
                />
                <h1 class="sidebar-title">
                    {{ title }}
                </h1>
            </router-link>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import settings from '@/settings';

    @Component({
        name: 'SidebarLogo'
    })
export default class extends Vue {
        @Prop({ required: true }) private collapse!: boolean

        private title = settings.title
}
</script>

<style lang="scss" scoped>
    .sidebarLogoFade-enter-active {
        transition: opacity 1.5s;
    }

    .sidebarLogoFade-enter,
    .sidebarLogoFade-leave-to {
        opacity: 0;
    }

    .sidebar-logo-container {
        position: relative;
        width: 100%;
        height: $navHeight;
        line-height: $navHeight;
        background: $primaryColor;
        overflow: hidden;

        & .sidebar-logo-link {
            height: 100%;
            width: 100%;

            & .sidebar-logo {
                font-size: 48px;
                vertical-align: -0.48em;
                margin: 0 8px 0 24px;
                color: white;
            }

            & .sidebar-title {
                display: inline-block;
                margin: 0;
                color: #fff;
                font-weight: 600;
                line-height: $sideBarMenuHeight;
                font-size: 20px;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
                vertical-align: middle;
            }
        }

        &.collapse {
            .sidebar-logo {
                margin-right: 0px;
            }
        }
    }
</style>
