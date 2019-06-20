import Vue from 'vue'
// import Vuex from 'vuex';
import App from './App'
import router from './router'

// Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // store,
  // computed: mapState({
  //   count: state => state.count,
  // })
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
