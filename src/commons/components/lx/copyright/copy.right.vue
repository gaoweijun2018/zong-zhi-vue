<template>
    <div class="copyright">
        © 2020-2021 江西通服科技有限公司
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Copyright'
})
export default class extends Vue {
}
</script>

<style scoped lang="scss">
    .copyright {
        position: absolute;
        bottom: 24px;
        width: 100%;
        height: 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 20px;
        text-align: center;
    }
</style>
