import Vue from 'vue'
import axios from 'axios'
import vueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

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
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
            return Promise.reject(res)
        }
    } else {
        Message.warning(res.msg)
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    Message.error(res.data.msg);
    return Promise.reject(res);
})

Vue.prototype.axios = axios
Vue.use(vueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')