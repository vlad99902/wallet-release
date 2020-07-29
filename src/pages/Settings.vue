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

  <div class="line">
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
  
}




//just copied from somewhere styles for switches
.form-switch {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.form-switch i {
  position: relative;
  display: inline-block;
  margin-right: .5rem;
  width: 46px;
  height: 26px;
  background-color: #e6e6e6;
  border-radius: 23px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
}

.dark .form-switch i {
  background-color: $for-white-dark;
}

.form-switch i::before {
  content: "";
  position: absolute;
  left: 0;
  width: 42px;
  height: 22px;
  background-color: #fff;
  //background-color: #121212;
  border-radius: 11px;
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transition: all 0.25s linear;
}
.dark .form-switch i::before {
  background-color: $for-white-dark-bar;
}


.form-switch i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
  transform: translate3d(2px, 2px, 0);
  transition: all 0.2s ease-in-out;
}

.form-switch:active i::after {
  width: 28px;
  transform: translate3d(2px, 2px, 0);
}

.form-switch:active input:checked + i::after { transform: translate3d(16px, 2px, 0); }

.form-switch input { display: none; }

.form-switch input:checked + i { background-color: #4BD763; }

.form-switch input:checked + i::before { transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0); }

.form-switch input:checked + i::after { transform: translate3d(22px, 2px, 0); }

</style>