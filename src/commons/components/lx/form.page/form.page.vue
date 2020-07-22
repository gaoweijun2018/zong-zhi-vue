<template>
    <div class="form-page">
        <div class="header">
            <div class="header__route-name">
                {{ $route.meta.title }}
            </div>
        </div>
        <div class="form-page__form">
            <slot />
        </div>
        <div class="form-page__footer">
            <el-button @click="$router.go(-1)">
                返回
            </el-button>
            <slot name="footer" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'FormPage'
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.form-page {
    background-color: #fff;
    border-radius: 2px;
    padding: 16px 32px 40px;
}
</style>
