/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Contact from "@/components/Contact.vue";
import Ketentuan from "@/components/Ketentuan.vue";
import Catalog from "@/components/Catalog.vue";
import Add_user from "@/components/Add_user.vue";
import Login from "@/components/Login.vue";
import Matematika from "@/components/Matematika.vue";
import Csb from "@/components/Csb.vue";
import store from "@/store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/matematika",
    name: "Matematika",
    component: Matematika,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/csb",
    name: "Csb",
    component: Csb,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/ketentuan",
    name: "Ketentuan",
    component: Ketentuan
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/add_user",
    name: "Add_user",
    component: Add_user,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
