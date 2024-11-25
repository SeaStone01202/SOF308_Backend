import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/bai1",
      name: "Bai1",
      component: () => import("../views/Bai1.vue"),
    },
    {
      path: "/bai2",
      name: "Bai2",
      component: () => import("../views/Bai2.vue"),
    },
    {
      path: "/bai3",
      name: "Bai3",
      component: () => import("../views/Bai3.vue"),
    },
  ],
});
export default router
