<template>
<!-- applying dark mode here -->
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

// w/o dark mode
.main-app {
  padding-top: 2rem;
  color: $primary;
  background: $for-background;
}

//with dark mode
.dark {
  color: $primary-dark;
  background: $for-background-dark;
}
</style>

