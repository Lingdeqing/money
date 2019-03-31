import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './routes';
import store from './store';
import App from './App.vue'
// import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(MintUI);

Date.prototype.format = function(format) {
  const zeros = ["", "0", "00", "000", "0000"];
  const c = {
    "Y+": this.getFullYear(),
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      `${this.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  for (const k in c) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? c[k]
          : (zeros[RegExp.$1.length] + c[k]).substr(`${c[k]}`.length)
      );
    }
  }
  return format;
};

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
