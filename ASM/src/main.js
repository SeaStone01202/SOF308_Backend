import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router đã cấu hình

const app = createApp(App);

app.use(router); // Sử dụng Vue Router
app.mount('#app'); // Gắn ứng dụng vào thẻ HTML với id="app"
