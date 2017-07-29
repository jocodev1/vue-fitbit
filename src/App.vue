<template>
  <div id="app">
    <nav class="uk-navbar-container" uk-navbar uk-sticky>
      <div class="uk-navbar-left">
        <div class="uk-navbar-nav">
          <li>
            <router-link to="/">
              <!--<img src="./assets/logo.png" style="height: 75%; width: auto">-->
            </router-link>
          </li>
        </div>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li class="uk-visible@s">
            <router-link to="/">Home</router-link>
          </li>
          <li class="uk-visible@s">
            <router-link to="/login" href="#">Login</router-link>
          </li>
          <li class="uk-hidden@s">
            <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="#offcanvas-push"></a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="content-container" class="uk-container uk-container-center">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fitbitClientId: '229S7D'
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
