import { createWebHistory, createRouter } from "vue-router"
import Products from "../components/Products.vue"
import ProductDetails from "../components/ProductDetails.vue"
import CreateProduct from "../components/CreateProduct.vue"
const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/create/",
    name: "CreateProduct",
    component: CreateProduct,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
