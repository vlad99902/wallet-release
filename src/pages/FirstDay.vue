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

    <div class="line" @click="setFirstDay(7)">
      Sunday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 7">
    </div>

    <div class="line" @click="setFirstDay(1)">
      Monday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 1">
    </div>
 
    <div class="line" @click="setFirstDay(2)">
      Tuesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 2">
    </div>
 
    <div class="line" @click="setFirstDay(3)">
      Wednesday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 3">
    </div>
 
    <div class="line" @click="setFirstDay(4)">
      Thursday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 4">
    </div>
 
    <div class="line" @click="setFirstDay(5)">
      Friday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 5">
    </div>
 
    <div class="line" @click="setFirstDay(6)">
      Saturday
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="firstDay === 6">
    </div>


  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      //firstDay: 1    
    }
  },
  computed: {
    ...mapGetters('expenses', ['firstDay'])
  },
  methods: {
    ...mapActions('expenses', ['setFirstDay'])
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