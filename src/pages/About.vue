<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">About</div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo" alt />
    </div>

    <div class="line">
      Version
      <q-space></q-space>0.0.0
    </div>

    <div class="line">
      Show Terms & Condition
      <q-space></q-space>
      <img src="../assets/next.svg" alt />
    </div>

    <div class="line">
      Show Privacy Policy
      <q-space></q-space>
      <img src="../assets/next.svg" alt />
    </div>
  </q-page>
</template>

<script>
export default {};
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