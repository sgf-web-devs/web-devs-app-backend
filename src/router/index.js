import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/views/Welcome';
import Admin from '@/views/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }, 
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
});
