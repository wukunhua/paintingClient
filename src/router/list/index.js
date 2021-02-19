import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  path: 'list',
  componemts: function () { return import('@/views/list/index') }
}
