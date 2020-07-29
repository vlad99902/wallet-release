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

    <div class="line" @click="daySelected = 7">
      Sunday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 7">
    </div>

    <div class="line" @click="daySelected = 1">
      Monday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 1">
    </div>
 
    <div class="line" @click="daySelected = 2">
      Tuesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 2">
    </div>
 
    <div class="line" @click="daySelected = 3">
      Wednesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 3">
    </div>
 
    <div class="line" @click="daySelected = 4">
      Thursday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 4">
    </div>
 
    <div class="line" @click="daySelected = 5">
      Friday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 5">
    </div>
 
    <div class="line" @click="daySelected = 6">
      Saturday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="daySelected === 6">
    </div>


  </q-page>
</template>

<script>
export default {
  data() {
    return {
      daySelected: 1    
    }
  }

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