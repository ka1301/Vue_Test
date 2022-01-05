import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');

console.log("main.js 通過");

// createApp(App).use(router).mount('#app')
//↑これだと動かない
// createApp(App).mount('#app')