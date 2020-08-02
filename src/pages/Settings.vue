<template >
<q-page >
  <div class="heading">
    Settings
  </div>

  <div class="for-ripple">
    <div class="line">
      Account
      <q-space></q-space>
      <img src="../assets/next.svg" width="15px" alt="">
    </div>
  </div>

  <div class="line" @click="$router.replace('/settings/dark-mode')">
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

  <div class="line" @click="$router.replace('/settings/language-and-currency')">
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
    <button
      class="bordered-btn">
      LOG OUT
    </button>
  </div>

</q-page>
</template>

<script>
export default {
 
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

// .bordered-btn:active {
//   transform: matrix(0.95, 0, 0, 0.95, 0, 0);
// }

</style>