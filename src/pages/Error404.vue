<template>
<div>
  <div class="content">
    <img src="../assets/404.svg" width="60%">
  </div>
  <div class="title-404">
    Oops! Nothin here...
  </div>
</div>
</template>

<script >
export default {
  name: 'Error404'
}
</script>

<style lang="scss">

body {
  background-color: #EFF0F2;
}

.content {
  display: flex;
  justify-content: center;
  margin-top: 25vh;
}

.title-404 {
  margin-top: 2rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
}

</style>
