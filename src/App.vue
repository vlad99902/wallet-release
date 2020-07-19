<template>
  <div id="q-app" class="main-app" :class="showNightMode ? 'dark' : ''">
    <router-view  />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
     return {
        showNightMode: true
     }
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

