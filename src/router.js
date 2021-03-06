// import {createRouter,createWebHashHistory} from 'vue-router';
// import Page1 from "./components/Page.vue";
// import Page2 from "./components/Page.vue";
 
// const Home = { template: '<p>Home page</p>' }
// const Home = { template: '<p>Home page</p>' }
// const routes = [
//   { path: '/1', component: Page1 },
//   { path: '/2', component: Page2 },
//   { path: '/home', component: Home },
//   { path: '/', component: Home },
// ]
 
 
 

import {createRouter,
// createWebHashHistory,
createWebHistory,
} from 'vue-router';

import Page1 from "./pages/Page1.vue";
import Page2 from "./pages/Page1.vue";
import Page from "./components/Page.vue";
import Home from "./pages/Home.vue";
import Test from "./pages/Test.vue";
 
const routes = [
  { path: '/Page1', component: Page1 },
  { path: '/Page2', component: Page2 },
  { path: '/page', component: Page },
  { path: '/test', component: Test },
  // { path: '/', component: Home },
  { path: '/', component: Test },
  { path: '/Vue_Test/', component: Test },
]
 
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
})

console.log("router.js 通過");
export default router;
