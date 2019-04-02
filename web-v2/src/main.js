import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import './common';
import router from './routes';
import store from './store';
import App from './App.vue'
// import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(MintUI);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
