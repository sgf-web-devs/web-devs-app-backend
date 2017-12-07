import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '@/components/Welcome';
import Admin from '@/components/Admin';

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
