import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: "/contador",
      name: "contador",

      component: () => import("../modules/contador/components/Contador.vue"),
    },
    {
      path: "/list-tasks",
      name: "ListaDeTareas",

      component: () => import("../modules/listTasks/components/ListTask.vue"),
    },
    {
      path: "/register",
      name: "Registrar",

      component: () => import("../modules/register/views/RegisterView.vue"),
    },
  ],
});

export default router;
