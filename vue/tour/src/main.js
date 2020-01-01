import Vue from 'vue';
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import App from './App.vue';
import homeV from './components/home/home.vue';
import findV from './components/find/find.vue';
import tourV from './components/tour/tour.vue';
import mineV from './components/mine/mine.vue';

Vue.use(VueRouter)
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
const routes = [
  { path: '/', component: homeV },
  { path: '/find', component: findV },
  { path: '/tour', component: tourV },
  { path: '/mine', component: mineV },
];
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
