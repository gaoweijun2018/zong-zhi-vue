import { parseTime, getImageUrl, mode, percentage, getTextByCode, title } from './filters';
import Vue from 'vue';
import { getValueByProp } from '@/commons/utils/es/object';

Vue.filter('parseTime', parseTime);
Vue.filter('getImageUrl', getImageUrl);
Vue.filter('mode', mode);
Vue.filter('percentage', percentage);
Vue.filter('getValueByProp', getValueByProp);
Vue.filter('getTextByCode', getTextByCode);
Vue.filter('title', title);
