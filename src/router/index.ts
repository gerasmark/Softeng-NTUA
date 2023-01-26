// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Postcomponent from '../components/Postcomponent.vue'

// @ts-ignore
// @ts-ignore
// @ts-ignore
const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: App
    },
    {
      path: '/add',
      name: 'add',
      component: Postcomponent
    },
  ]
})
export default router


// import Vue from  "vue";
// import Router from "vue-router";
// import Login from "../LoginPage.vue";
//
// Vue.use(Router);
//
// export default new Router({
//     routes:[
//         {path: '', component: Login},
//
//     ]
// });