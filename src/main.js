import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';


import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import network from './tools/network.js';
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueRouter);


Vue.use(iView);
Vue.use(network);
Vue.use(VueQuillEditor);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});