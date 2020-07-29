<template>
  <q-page>

    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn"  alt="" @click="$router.replace('/settings')">

      <div class="settings-header-title">
        First day of the week 
      </div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo"  alt="">
    </div>

    <div class="line">
      Sunday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>

    <div class="line">
      Monday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    <div class="line">
      Tuesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    <div class="line">
      Wednesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    <div class="line">
      Thursday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    <div class="line">
      Friday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    <div class="line">
      Saturday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="">
    </div>
 
    

  </q-page>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.settings-header {
  font-size: 1.1rem;
  font-weight: 700;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  padding: 0 2rem;
  
}

.back-btn-pseudo {
  margin-left: auto;
  visibility: hidden;
}
.back-btn {
  margin-right: auto;
}

</style>