<template>
    <el-dialog
        :visible="true"
        :close-on-click-modal="false"
        :title="title"
        :width="$attrs.width || '424px'"
        append-to-body
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />

        <template v-slot:footer>
            <slot v-if="$slots.footer" name="footer" />
            <template v-else-if="$attrs.type === 'none'" />
            <template v-else>
                <el-button
                    size="mini"
                    @click="$emit('close')"
                >
                    取消
                </el-button>
                <el-button
                    :loading="$attrs.loading"
                    :disabled="$attrs.disabled"
                    :type="$attrs.type || 'primary'"
                    size="mini"
                    @click="$emit('submit')"
                >
                    {{ $attrs.type === 'danger' ? '移除' : '确定' }}
                </el-button>
            </template>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
    @Component({
        name: 'LxDialog'
    })
export default class extends Vue {
        private title: string = '';

        created() {
            this.title = this.$attrs.title || (this.$attrs.mode === 'create' ? '新建' : '编辑');
        }
}
</script>

<style scoped>

</style>
