import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
import Login from '@/components/Login'
import List from './list'
import list from '@/views/list/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        List
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: 'list',
          component: list
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
