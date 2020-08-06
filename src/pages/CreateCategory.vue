<template>
  <q-page>
    <form @submit.prevent="submitForm" novalidate>
      <div class="settings-header">
        <button
          class="back-btn control-button"
          type="button"
          @click="$router.replace('/settings/categories')"
        >Cancel</button>

        <div class="settings-header-title">Create category</div>

        <button
          class="back-btn-2 control-button"
          :class="$v.nameToSubmit.$invalid ? 'not-active' : ''"
          type="submit"
          :disabled="$v.nameToSubmit.$invalid"
        >Done</button>
      </div>

      <div class="settings-small">Enter your new category name.</div>

      <div class="input-budget-container">
        <input
          v-autofocus
          v-model="nameToSubmit"
          @blur="$v.nameToSubmit.$touch"
          placeholder="Category name"
          class="input-budget select-all"
          v-select-all
        />
      </div>

      <div class="settings-strong small-m-t">Choose color for your tag</div>

      <div class="color-container">
        <button
          type="button"
          class="tag-object tag-margin-right"
          style="background: #D8A69D; color: #FFFFFF"
        >
          <div class="tag-object-round-add" style="background: #FFFFFF"></div>Alcohol
        </button>
        <button
          type="button"
          class="tag-object tag-margin-right"
          style="background: #D8A69D; color: #FFFFFF"
        >
          <div class="tag-object-round-add" style="background: #FFFFFF"></div>Alcohol
        </button>
        <button
          type="button"
          class="tag-object tag-margin-right"
          style="background: #D8A69D; color: #FFFFFF"
        >
          <div class="tag-object-round-add" style="background: #FFFFFF"></div>Alcohol
        </button>
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
      nameToSubmit: "",
    };
  },

  validations: {
    nameToSubmit: { required },
  },

  computed: {},
  methods: {
    submitForm() {},
  },
  mounted() {},
};
</script>

<style lang="scss">
.not-active {
  color: #b8d2f1;
}

.dark .not-active {
  color: $secondary;
}

.small-m-t {
  margin-top: 0.75rem;
}

.color-container {
  margin: 0.75rem 2rem;
  background-color: $for-white;
  border-radius: 12px;
  height: 300px;
}
</style>
