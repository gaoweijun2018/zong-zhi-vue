<template>
    <section :class="['app-main', isCreatePerson && 'no-padding']">
        <transition
            name="fade-transform"
            mode="out-in"
        >
            <router-view />
        </transition>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'AppMain'
})
export default class extends Vue {
    /**
    * 是否为创建人员
    */
    private get isCreatePerson() {
        return this.$route.name === 'createPerson' || this.$route.name === 'updatePerson';
    }
}
</script>

<style lang="scss" scoped>
    .app-main {
        overflow: hidden;
        margin-top: $navHeight + $breadcrumbHeight;
        padding: 24px 24px 0;
    }

    .no-padding {
        padding: 0;
    }
</style>
