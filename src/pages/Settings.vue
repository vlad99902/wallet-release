<template >
<q-page >
  <div class="heading">
    Settings
  </div>

  <!-- <div class="line">
    Dark Mode
    <q-space></q-space>
    <label class="form-switch">
      <input type="checkbox" v-model="showDarkMode">
      <i></i>
    </label>
    
  </div>

  <div class="line">
    Budget
    <q-space></q-space>
    <label class="form-switch">
      <input type="checkbox" v-model="budget">
      <i></i>
    </label>
  </div> -->

  <div class="for-ripple">
    <div class="line">
      Account
      <q-space></q-space>
      <img src="../assets/next.svg" width="15px" alt="">
    </div>
  </div>

  <div class="line">
    Dark mode
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line" @click="$router.replace('/settings/budget')">
    Budget
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line" @click="$router.replace('/settings/first-day')">
    First day of the week
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line">
    Categories
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line">
    Language and currency
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line">
    Restart instructions
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="line" @click="$router.replace('/settings/about')">
    About
    <q-space></q-space>
    <img src="../assets/next.svg" width="15px" alt="">
  </div>

  <div class="bordered-btn-container">
    <button class="bordered-btn">
      LOG OUT
    </button>
  </div>

</q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
     return {
       
     }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    showDarkMode: {
      get() {
        return this.settings.showDarkMode
      },
      set(value) {
        this.setShowDarkMode(value)
      }
    },
    budget: {
      get() {
        return this.settings.budget
      },
      set(value) {
        this.setBudget(value)
      }
    },
  },
  methods: {
    ...mapActions('settings', ['setShowDarkMode', 'setBudget']),

  },
  
}
</script>

<style lang="scss">

//log out button
.bordered-btn-container {
  display: flex;
  justify-content: center;
}
.bordered-btn {
  background-color: $add-button;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  color: $for-white;
  padding: .5rem 1.5rem;
  margin-top: 3rem;
  outline: none !important;
}




//just copied from somewhere styles for switches


</style>