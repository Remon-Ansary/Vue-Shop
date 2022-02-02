<template>
  <div>
    <h1>Fetch products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <div class="row">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class=""
        >
          <div>Name:{{ product.title }}</div>
          <div>Price:{{ product.price }}</div>
        </router-link>
        
      </div>
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
