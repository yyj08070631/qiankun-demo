import { registerMicroApps, start } from 'qiankun'
import store from '@/store.js'

store.commit('setBaseAppLoading', true)
window.setTimeout(() => {
  registerMicroApps([
    {
      name: 'vue2',
      entry: '//localhost:10200',
      container: '#vue2',
      activeRule: location => location.pathname.startsWith('/vue2'),
      props: {
        user: { name: '张三', imcode: '9461' }
      }
    }
  ], {
    beforeLoad: app => { console.log('beforeLoad', app.name); store.commit('setMicroAppLoading', true) },
    afterMount: app => { console.log('afterMount', app.name); store.commit('setMicroAppLoading', false) }
  })
  start({
    // prefetch: 'all'
  })
  store.commit('setBaseAppLoading', false)
}, 3000)
