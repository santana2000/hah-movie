import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;
//可以用this.axios了，this代表这个vue组件

import './assets/iconfont/iconfont.css'
 
import Scroll from '@/components/Scroll'
Vue.component('Scroll',Scroll);


Vue.filter('getSrc',(url, arg) => {
    return url.replace(/w\.h/, arg)
});
Vue.filter('shortStar',(star, arg) => {
  return star.substring(0,6) + arg
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)  
  //components: { App }, template: '<App/>'
  //VUE推荐在绝大多数情况下使用template来创建我们的HTML。
  //然而在一些场景中，我们真的需要JavaScript的完全编程的能力，这就是render函数，它比template更接近编译器。
}).$mount('#app')
