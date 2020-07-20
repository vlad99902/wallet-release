<template>
  <div id="q-app" class="main-app" :class="settings.showDarkMode ? 'dark' : ''">
    <router-view  />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  data() {
     return {

     }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
  }
}
</script>

<style lang="scss">

.main-app {
  padding-top: 2rem;
  color: $primary;
  background: $for-background;
}

.dark {
  color: $primary-dark;
  background: $for-background-dark;
}
</style>

