import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Test from '../page/Test/Test';
import Content from '../page/Content/Content.vue';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Test',
    name: 'Test',
    component: Test
  },{
    path: '/Content',
    name: 'Content',
    component: Content
  }]
})
