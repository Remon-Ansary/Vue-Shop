<template>
  <div>
    <h1>Product details</h1>
   
      <li>{{ singleProduct.title }} {{ singleProduct.price }}</li>
    </div>
</template>
<script>
import axios from "axios"
export default {
  name: "ProductDetails",
  created() {
    this.fetchProducts()
  },
  data() {
    return {
      singleProduct: [],
      errorMessage: "",
    }
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products/"+ this.$route.params.id)
        .then((response) => {
          this.singleProduct = response.data
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
