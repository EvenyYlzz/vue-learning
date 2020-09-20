import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //el:'#app'  与下面的这个语法作用一致
  //把App组件（替换）渲染到id=“app”节点上
  render: h => h(App)
}).$mount('#app')
