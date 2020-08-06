<template>
  <q-page>
    <form @submit.prevent="submitForm" novalidate>
      <div class="settings-header">
        <button
          class="back-btn control-button"
          type="button"
          @click="$router.replace('/settings/budget')"
        >Cancel</button>

        <div class="settings-header-title">Budget amount</div>

        <button
          class="back-btn-2 control-button"
          :class="$v.budgetToSubmit.$invalid ? 'not-active' : ''"
          type="submit"
          :disabled="$v.budgetToSubmit.$invalid"
        >Done</button>
      </div>

      <div
        class="settings-small"
      >Enter amount of money you're planning to spend during selected period.</div>

      <div class="input-budget-container">
        <currency-input
          v-autofocus
          currency="USD"
          locale="en-US"
          v-model="budgetToSubmit"
          @blur="$v.budgetToSubmit.$touch"
          placeholder="Budget amount"
          class="input-budget select-all"
          v-select-all
        />
      </div>
    </form>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

//validatin fields
import { required } from "vuelidate/lib/validators";

//directives
import { autofocus } from "src/directives/directive-autofocus";
import { selectAll } from "src/directives/directive-select-all";

export default {
  directives: {
    autofocus,
    selectAll,
  },
  data() {
    return {
      doneActive: false,
      budgetToSubmit: 0,
    };
  },

  validations: {
    budgetToSubmit: { required },
  },

  computed: {
    ...mapGetters("expenses", ["overallBudget"]),
  },
  methods: {
    ...mapActions("expenses", ["setBudget"]),
    submitForm() {
      this.setBudget(this.budgetToSubmit);
      this.$router.replace("/settings/budget");
    },
  },
  mounted() {
    this.budgetToSubmit = this.overallBudget;
  },
};
</script>

<style lang="scss">
.not-active {
  color: #b8d2f1;
}

.dark .not-active {
  color: $secondary;
}
</style>
