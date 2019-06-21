import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import createRouter from './router/router'
import store from './store/store'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

const router = createRouter();
// const store = createStore();

Vue.config.productionTip = false;
Axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})