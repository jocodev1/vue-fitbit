<template>
  <div class="home">
    <transition name="fade" mode="out-in">
      <section class="user" v-if="show">
        <div class="uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <div class="uk-card-body">
              <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
                <div>
                  <img class="profile" :src="user.avatar150" alt="profile"/>
                  <p>
                    {{ user.fullName }}
                    <br>
                    <span style="opacity: 0.7; font-size: 0.8em">member since: {{ user.memberSince }}</span>
                  </p>
                </div>
                <div>
                  <p>Gender: {{ user.gender }}</p>
                  <p>Age: {{ user.age }}</p>
                  <p>Stride Length (running): {{ user.strideLengthRunning }}</p>
                  <p>Stride Length (walking): {{ user.strideLengthWalking }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="uk-divider-icon">
        <div class="badges">
          <div class="uk-child-width-expand@s uk-text-center" uk-grid>
            <div v-for="badge, index in user.topBadges">
              <img :src="badge.image125px" :alt="'badge-' + index"/>
              <h5>{{ badge.shortName }}</h5>
              <p>{{ badge.marketingDescription }}</p>
            </div>
          </div>
        </div>
      </section>
      <div v-else>
        <div class="uk-text-center">
          <div class="uk-padding">
            <p><i class="fa fa-refresh fa-spin fa-5x"></i></p>
            <h3 style="opacity: 0.7">Loading fitbit user...</h3>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        show: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.fitbit.user
      }
    },
    created () {
      this.show = Object.keys(this.user).length > 0
      if (!this.show) {
        var self = this
        this.$axios.all([
          self.$store.dispatch('fetchProfile', this.$fitbit)
        ])
      }
    },
    watch: {
      user (val) {
        var self = this
        if (Object.keys(val).length > 0) {
          setTimeout(function () {
            self.show = true
          }, 1000)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img.profile {
    border: 3px solid #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 5px #ccc
  }
</style>
