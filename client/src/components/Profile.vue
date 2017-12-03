<template>
  <div class="profile">
    <h1 class="profile-title">Profile</h1>
    <p>Your email: </p>
    <p>Your username: </p>
    <button value="Log out"></button>
  </div>
</template>

<script>
  import ProfileService from '@/services/ProfileService'
  export default {
    name: 'Profile',
    data () {
      return {
        userData: {
          email: '',
          username: '',
          password: ''
        }
      }
    },
    mounted () {
      this.getUserData()
    },
    methods: {
      async getUserData () {
        const response = await ProfileService.getUserData({
          id: this.$route.params.id
        })
        this.email = response.data.email
        this.username = response.data.username
        this.password = response.data.password
      }
    }
  }
</script>

<style>

  .profile {
    display: flex;
    justify-content: center;
    width: 33%;
    border:1px solid silver;
  }
</style>
