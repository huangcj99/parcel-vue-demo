import Vue from 'vue';
import Router from 'vue-router';

import P1 from '../components/p1.vue'
import P2 from '../components/p2.vue'

//引入组件与路由配置文件
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/p1',
      component: P1
    },
    {
      path: '/p2',
      component: P2
    }
  ]
});


export default router;
