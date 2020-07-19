<template>
  <div id="q-app" class="">
    <router-view />
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

  .night  {
  padding: 0;
  padding-top: 2rem;
  box-sizing: border-box-dark;
  margin: 0;
  height: 100vh;
  width: 100vw;

  font-family: 'Lato';
  font-weight: 300;
  font-size: 16px;

  color: $primary-dark;
  background: $for-background-dark;
}

</style>