<template>
  <div class="login uk-text-center">
    <transition name="fade" mode="out-in">
      <div class="login-options">
        <button class="uk-button uk-button-primary uk-button-large" @click="login">Login with Fitbit</button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        fitbitClientId: '229S7D'
      }
    },
    methods: {
      login () {
        window.location.href = 'https://www.fitbit.com/oauth2/authorize?client_id=' + this.fitbitClientId + '&response_type=token&scope=activity%20profile&expires_in=2592000'
      }
    }
  }
</script>

<style scoped>
  .login-options {
    margin-top: 50px
  }
</style>
