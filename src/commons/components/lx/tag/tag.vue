<template>
    <div class="tag">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    @Component({
        name: 'Tag'
    })
export default class extends Vue {

}
</script>

<style scoped lang="scss">
    .tag {
        display: inline-block;
        height:24px;
        line-height: 24px;
        padding: 0 8px;
        background:rgba(230,247,255,1);
        border-radius:2px;
        border:1px solid rgba(145,213,255,1);

        font-size:12px;
        font-weight:400;
        color:rgba(0,102,192,1);
    }
</style>
