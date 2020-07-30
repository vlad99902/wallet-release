<template>
  <q-page>

    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn"  alt="" @click="$router.replace('/settings')">

      <div class="settings-header-title">
        Budget
      </div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo"  alt="">
    </div>

    <div class="settings-strong">
      Budget activated
      <q-space></q-space>
      <label class="form-switch">
        <input type="checkbox" v-model="budget">
        <i></i>
      </label>
    </div>

    <div v-if="budget">
      <div class="settings-strong">
        Amount
        <q-space></q-space>
        <span class="settings-strong-span">
          $2000
        </span>
      </div>

      <div class="settings-small">
        Amount of money you’re ready to spend within the selected period.
      </div>

      <div class="settings-strong">
        Period
        <q-space></q-space>
        <span class="settings-strong-span">
          7 days
        </span>
      </div>
    </div>


  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      budget: false
    }
  },
  computed: {
  },
  methods: {
  }

}
</script>

<style lang="scss">



</style>