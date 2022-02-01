import { createWebHistory, createRouter } from "vue-router"
import Products from "../components/Products.vue"
import ProductDetails from "../components/ProductDetails.vue"

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/product",
    name: "ProductDetails",
    component: ProductDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
