import Vue from 'vue'
import Router from 'vue-router'
import Rsca100 from '@/components/rsca/rsca100'
import Rsda100 from '@/components/rsda/rsda100'

import Rsfa100 from '@/components/rsfa/rsfa100'
import Rsfb100 from '@/components/rsfb/rsfb100'
import Rsfc100 from '@/components/rsfc/rsfc100'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rsca100',
      component: Rsca100
    },
    {
      path: '/Rsda100',
      name: 'Rsda100',
      component: Rsda100,
      children: [
        {
          path: 'Rsfa100',
          component: Rsfa100
        },
        {
          path: 'Rsfb100',
          component: Rsfb100
        },
        {
          path: 'Rsfc100',
          component: Rsfc100
        },
        {
          path: '*',
          redirect: '/'
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
