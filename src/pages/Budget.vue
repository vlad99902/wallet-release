<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">Budget</div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo" alt />
    </div>

    <div class="settings-strong">
      Budget activated
      <q-space></q-space>
      <label class="form-switch">
        <input type="checkbox" v-model="budget" />
        <i></i>
      </label>
    </div>

    <div v-if="budget">
      <div class="line" @click="$router.replace('/settings/budget/budget-amount')">
        Amount
        <q-space></q-space>
        <span class="settings-strong-span small-m-r">${{ overallBudget }}</span>
        <img src="../assets/next.svg" alt />
      </div>

      <div class="settings-small">Amount of money you’re ready to spend within the selected period.</div>

      <div class="line" @click="$router.replace('/settings/budget/period')">
        Period
        <q-space></q-space>

        <span class="settings-strong-span small-m-r" v-if="period === 7">1 week</span>

        <span class="settings-strong-span small-m-r" v-if="period === 1">1 month</span>

        <img src="../assets/next.svg" alt />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("expenses", ["period", "overallBudget"]),

    budget: {
      get() {
        return this.settings.budget;
      },
      set(value) {
        this.setBudget(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", ["setBudget"]),
  },
};
</script>

<style lang="scss">
.small-m-r {
  margin-right: 0.5rem;
  // padding-right: 2rem;
}
</style>