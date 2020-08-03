<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">Language and currency</div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo" alt />
    </div>

    <!-- it should be forwarding to system settings -->
    <div class="line">
      Language
      <q-space></q-space>
      <span class="settings-strong-span small-m-r">English</span>
      <img src="../assets/next.svg" alt />
    </div>

    <div class="line" @click="$router.replace('/settings/budget/period')">
      Currency
      <q-space></q-space>

      <span class="settings-strong-span small-m-r">American Dollars</span>

      <img src="../assets/next.svg" alt />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("settings", ["setBudget"]),
  },
};
</script>

<style lang="scss">
.small-m-r {
  margin-right: 0.5rem;
}
</style>