<template>
  <header class="header">
    <div class="container">
      <section class="header-top">
        <ul class="header-social-nav">
          <li>
            <a  class="hover-main" href="#">FB</a>
          </li>
          <li>
            <a  class="hover-main" href="#">IG</a>
          </li>
          <li>
            <a  class="hover-main" href="#">VK</a>
          </li>
        </ul>
        <div class="header-cart">
          <router-link v-bind:to="{ name: 'Checkout' }">
            <span>Cart(0)</span>
          </router-link>
        </div>
      </section>

      <div class="header-title">
        <h1>artistSt0re</h1>
      </div>
      <section class="header-main">
        <div class="header-nav">

        </div>
        <div class="header-main-nav">
          <ul>
            <li>
              <h2 class="header-main-menu-title">artistSt0re</h2>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'Home' }" class="header-main-menu-link hover-main">Home</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'Products' }" class="header-main-menu-link hover-main">Products</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'Stories' }" class="header-main-menu-link hover-main">Stories</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'Inspiration' }" class="header-main-menu-link hover-main">Inspiration</router-link>
            </li>
            <li>
              <router-link v-bind:to="{ name: 'Contact' }" class="header-main-menu-link hover-main">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="header-search-group">
          <button class="header-main-button">Search</button>
          <button class="header-main-button ">Log in</button>
        </div>
      </section>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'Header',
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  @import '../styles/variables.scss';


  .header {
    display: flex;
    padding: 10px 20px;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    -webkit-box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.1);
    box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.1);
  }
  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header-social-nav {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    a {
      text-decoration: none;
      color: #555;
      padding: 0 5px;
    }
  }
  .header-cart {
    display: flex;
    a {
      text-decoration: none;
      color: cornflowerblue;
      cursor: pointer;
    }
  }

  .header-title {
    width: 100%;
    justify-content: center;
  }
  .header-main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .header-main-nav {
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;
    }
    li {
      display: flex;
    }
  }
  .header-main-menu-title {
    display: none;
  }
  .header-main-menu-link {
    text-decoration: none;
    padding: 4px 12px;
    color: $primary-text-dark;
  }
  .header-search-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .header-main-button {
    margin: 0 2px;
    padding: 6px 12px;
    outline:0;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    transition: 0.3s all ease;
    color: $primary-text-dark;
    cursor: pointer;
    &:hover {
      color: cornflowerblue;
      transition: .3s all ease;
    }
  }

</style>
