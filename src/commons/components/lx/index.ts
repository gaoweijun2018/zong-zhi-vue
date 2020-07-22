import Vue from 'vue';

import LxDialog from './dialog/index.vue';
import LxDetail from '@/commons/components/lx/detail/detail.vue';
import LxDetailItem from '@/commons/components/lx/detail/detail.item.vue';
import LxFormPage from '@/commons/components/lx/form.page/form.page.vue';
import Copyright from './copyright/copy.right.vue';
import Pagination from './pagination/pagination.vue';
import Tag from './tag/tag.vue';

Vue.component('LxDialog', LxDialog);
Vue.component('LxDetail', LxDetail);
Vue.component('LxDetailItem', LxDetailItem);
Vue.component('LxFormPage', LxFormPage);
Vue.component('LxCopyright', Copyright);
Vue.component('LxPagination', Pagination);
Vue.component('LxTag', Tag);
