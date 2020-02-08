import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//根据前端跨域方式做调整
axios.defaults.baseURL = '/api'; //接口代理的方式
//请求超时的时间
axios.defaults.timeout = 8000;
//接口的错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg)
    }
})

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')