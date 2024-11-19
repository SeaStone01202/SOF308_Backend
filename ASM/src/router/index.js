import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';
import detailBlog from '../views/detailBlog.vue';
import login from '../views/login.vue';
import register from '../views/register.vue';
import profile from '../views/profile.vue';
import managerBlog from '../views/managerBlog.vue';

const routes = [
  { path: '/index', 
    name: 'index', 
    component: index 
  },
  { path: '/detai-blog', 
    name: 'detaiBlog', 
    component: detailBlog 
  },
  {
    path: '/login', 
    name: 'login', 
    component: login 
  },
  {
    path: '/register', 
    name: 'register', 
    component: register 
  },
  {
    path: '/profile', 
    name: 'profile', 
    component: profile 
  },
  {
    path: '/manager-blog', 
    name: 'managerBlog', 
    component: managerBlog 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
