<template>
  <q-page>

    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn"  alt="" @click="$router.replace('/settings/budget')">

      <div class="settings-header-title">
        Choose period
      </div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo"  alt="">
    </div>

    <div class="line" @click="setPeriod(7)">
      1 week
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="period === 7">
    </div>

    <div class="line" @click="setPeriod(1)">
      1 month
      <q-space></q-space>
      <img src="../assets/tick.svg" alt="" v-if="period === 1">
    </div>

    <div class="settings-small">
        Choose a period for your budget. Budget statistics will be reseted once the period ends and all will be started again.
    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      //period: 7
    }
  },
  computed: {
    ...mapGetters('expenses', ['period'])
  },
  methods: {
    ...mapActions('expenses', ['setPeriod'])
  }

}
</script>

<style lang="scss">



</style>