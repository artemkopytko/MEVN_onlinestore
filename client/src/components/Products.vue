<template>
  <div class="products">
    <h1 class="products-title">Products</h1>
    <div class="products-list">
      <div class="product" v-for="product in products">
        <p>
          <span><b>{{ product.title }}</b></span><br/>
          <span>{{ product.description }}</span><br>
          <span>${{ product.price }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductsService from '@/services/ProductsService'
  export default {
    name: 'Products',
    data () {
      return {
        products: []
      }
    },
    mounted () {
      this.getProducts()
    },
    methods: {
      async getProducts () {
        const response = await ProductsService.fetchProducts()
        this.products = response.data.products
      }
    }
  }
</script>

<style scoped>
  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product {
    display: flex;
    justify-content: center;
    width: 33%;
    border:1px solid silver;
  }
</style>
