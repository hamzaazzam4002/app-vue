import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "product-category",
    component: () => import("@/views/ProductCategories"),
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: () => import("@/views/productDetails"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/checkout",
    name: "check_out",
    component: () => import("@/views/CheckOut"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
