<template>
    <div class="pagination">
        <div class="total">
            共 {{ pageData ? pageData.total : 0 }} 条   第 {{ currentPage }}/{{ pageData ? (pageData.totalPage || pageData.pages) : 1 }} 页
        </div>
        <el-pagination
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            :pager-count="5"
            layout="prev, pager, next, sizes, jumper"
            :total="pageData ? pageData.total : 0"
            v-on="$listeners"
            @update:current-page="updateCurrentPage"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    name: 'LXPagination'
})
export default class extends Vue {
    @Prop({
        required: true
    })
    private currentPage!: any;
    @Prop({
        required: true
    })
    private pageData!: any;
    /**
     * 更新currentPage
     */
    private updateCurrentPage(value: any) {
        this.$emit('update:current-page', value);
    }
}
</script>

<style scoped>

</style>
