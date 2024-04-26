import { createRouter, createWebHistory } from "vue-router";
import JwtService from "../services/jwt.service";
import {ORDER} from "@/utils/constant.ts";

const router = createRouter({
  // @ts-ignore
  mode: "history",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta: { layout: "LayoutDefault",key:'type_exam' },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutAuth", key: "login", },
    },
    {
      path: "/category",
      name: "ListCategory",
      component: () => import("../views/category/List.vue"),
      meta: { layout: "LayoutDefault", key: "category" },
    },
    {
      path: "/attribute",
      name: "ListTypeExam",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault",key: "attribute", },
    },
    {
      path: "/tag",
      name: "ListExam",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "tag",},
    },
    {
      path: "/product",
      name: "ListDraft",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "product",},
    },
    {
      path: "/order",
      name: "listOrder",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "order",},
    },
    {
      path: "/warehouse",
      name: "listSchedule",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "warehouse",},
    },
    {
      path: "/store",
      name: "listCompany",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "store",},
    },
    {
      path: "/promotion",
      name: "listCompany1",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "promotion",},
    },
    {
      path: "/news",
      name: "listCompany2",
      component: () => import("../views/auth/Login.vue"),
      meta: { layout: "LayoutDefault" ,key: "news",},
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  if (!JwtService.getToken()) {
    if (to.name == "Login") {
      next("/");
    }
    next();
  }
  if (to.name == "Login") {
    next();
  }
  if (to.name != "Login" && to.fullPath && to.fullPath != "/") {
    next("/login?redirect=" + to.fullPath);
  }  

  // get detail current user in here
  
  next("/login");
});
export default router;
