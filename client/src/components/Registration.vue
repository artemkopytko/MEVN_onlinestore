<template>
  <div class="register">
    <form action="">

      <div class="input-block">
        <label for="email">Email: </label>
        <input id="email" type="text" v-model="email">
      </div>

      <div class="input-block">
        <label for="username">Username: </label>
        <input id="username" type="text" v-model="username">
      </div>

      <div class="input-block">
        <label for="password">Password: </label>
        <input id="password" type="text" v-model="password">
      </div>

      <div class="input-block">
        <label for="passwordConf">Re-enter password: </label>
        <input id="passwordConf" type="text" v-model="passwordConf">
      </div>

      <div class="input-block">
      <button value="Submit" @click.prevent="addUser">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  import RegistrationService from '@/services/RegistrationService'
  export default {
    name: 'Registration',
    data () {
      return {
          email : '',
          username: '',
          password: '',
          passwordConf: ''
      }
    },
//    mounted () {
//      this.getProducts()
//    },
    methods: {
      async addUser () {
        await RegistrationService.createUser({
          email: this.email,
          username: this.username,
          password: this.password,
          passwordConf: this.passwordConf
        })
//        this.$router.push({ name: 'Profile' })
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    form {
      border-radius: 5px;
      padding: 50px 25px;
      border:1px solid $primary-text-dark;
      margin: 50px;
      display: flex;
      flex-direction: column;
      max-width: 95%;
      width: 500px;
    }
    button {
      margin-top: 10px;
      cursor: pointer;
      padding: 8px 24px;
      color: $primary-text-dark;
      transition: .3s all ease-out;
      border-radius: 3px;
      &:hover {
        border-color: $primary-text-dark;
        transition: .3s all ease-out;
      }
    }
  }
    .input-block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      input {
        margin: 5px;
        padding: 5px 15px;
        border-radius: 3px;
        border: 1px solid $primary-text-dark;
        outline: none;
        color: $primary-text-dark;
      }
      label {
        color: $primary-text-dark;

      }
    }

</style>
