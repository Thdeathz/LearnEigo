import {
  CIRCLE,
  ORDER,
  MANAGE_STORE,
  DASHBOARD,
  MANAGE_PRODUCT,
  WAREHOUSE, MANAGE_PROMOTION, MANAGE_NEWS
} from "./constant";
export const MENU = [
  {
    title: "menu.dashboard",
    path: "/category",
    key: "category",
    icon: DASHBOARD,
    active :  false,
  },
  {
    title: "menu.product_management.title",
    path: "/",
    icon: MANAGE_PRODUCT,
    key: "manage_product",
    active :  false,
    showChild :  false,
    child: [
      {
        title: "menu.product_management.child.categories",
        path: "/category",
        key: "category",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.product_management.child.attributes",
        path: "/attribute",
        key: "attribute",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.product_management.child.tags",
        path: "/tag",
        key: "tag",
        active :  false,
        icon: CIRCLE,
      },
      {
        title: "menu.product_management.child.products",
        path: "/product",
        key: "product",
        active :  false,
        icon: CIRCLE,
      },
    ],
  },
  {
    title: "menu.order",
    path: "/order",
    key: "order",
    icon: ORDER,
    active :  false,
  },
  {
    title: "menu.warehouse",
    path: "/warehouse",
    key: "warehouse",
    icon: WAREHOUSE,
    active :  false,
  },
  {
    title: "menu.store",
    path: "/store",
    key: "store",
    icon: MANAGE_STORE,
    active :  false,
  },
  {
    title: "menu.promotion",
    path: "/promotion",
    key: "promotion",
    icon: MANAGE_PROMOTION,
    active :  false,
  },
  {
    title: "menu.news",
    path: "/news",
    key: "news",
    icon: MANAGE_NEWS,
    active :  false,
  },


];
