<template>
    <div class="detail-item">
        <span class="detail-item__label">{{ label }}：</span>
        <span class="detail-item__value">
            <slot />
        </span>
        <slot name="suffix" />
    </div>
</template>

<script lang="ts">
import { Component, Inject, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'DetailItem'
})
export default class extends Vue {
    @Inject() readonly Detail!: any;

    @Prop({
        required: true
    })
    label!: string;

    created() {
        console.log(this.Detail);
    }
}
</script>

<style lang="scss">
    .detail-item {
        display: inline-block;
        height: 22px;
        line-height: 22px;
        width: 516px;
        margin-bottom: 32px;

        &__label {
            color: $subTitle;
        }

        &__value {
            color: $normal;
            font-weight: bolder;
        }
    }
</style>
