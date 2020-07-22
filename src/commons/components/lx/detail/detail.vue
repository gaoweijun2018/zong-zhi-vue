<template>
    <div class="form-page">
        <div class="header">
            <div class="header__route-name">
                {{ $route.meta.title }}
            </div>
        </div>
        <div class="form-page__content">
            <slot />
        </div>
        <slot name="footer">
            <el-button type="primary" @click="$router.go(-1)">
                返回
            </el-button>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator';
@Component({
    name: 'Detail'
})
export default class extends Vue {
    @Provide() Detail = this;

    /**
     * 数据
     */
    @Prop({
        required: true
    })
    public model!: any;
}
</script>

<style lang="scss" scoped>
.form-page {
    background-color: #fff;
    border-radius: 2px;
    padding: 16px 32px 40px;

    &__content {
        padding-top: 48px;
    }
}
</style>
