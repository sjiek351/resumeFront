import Vue from 'vue'
import Router from 'vue-router'
import Rsaa100 from '@/components/rsaa/rsaa100'
import Rsba100 from '@/components/rsba/rsba100'
import Rsca100 from '@/components/rsca/rsca100'
import Rsda100 from '@/components/rsda/rsda100'
import Rsea100 from '@/components/rsea/rsea100'
import Rseb100 from '@/components/rseb/rseb100'
import Rsec100 from '@/components/rsec/rsec100'
import Rsed100 from '@/components/rsed/rsed100'
import Rsza100 from '@/components/rsza/rsza100'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rsaa100',
      component: Rsaa100
    },
    {
      path: '/Rsba100',
      name: 'Rsba100',
      component: Rsba100
    },
    {
      path: '/Rsca100',
      name: 'Rsca100',
      component: Rsca100
    },
    {
      path: '/Rsda100',
      name: 'Rsda100',
      component: Rsda100
    },
    {
      path: '/Rsea100',
      name: 'Rsea100',
      component: Rsea100
    },
    {
      path: '/Rseb100',
      name: 'Rseb100',
      component: Rseb100
    },
    {
      path: '/Rsec100',
      name: 'Rsec100',
      component: Rsec100
    },
    {
      path: '/Rsed100',
      name: 'Rsed100',
      component: Rsed100
    },
    {
      path: '/Rsza100',
      name: 'Rsza100',
      component: Rsza100
    }
  ]
})
