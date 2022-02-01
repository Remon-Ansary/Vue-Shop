<template>
  <div>
    <h1>Fetch products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <li>{{ product.title }} {{ product.price }}</li>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Products",
  created() {
    this.fetchProducts()
  },
  data() {
    return {
      products: [],
      errorMessage: "",
    }
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.errorMessage = error.message
        })
    },
  },
}
</script>

<style scoped></style>
