<template>
  <q-page>
    <form @submit.prevent="submitForm" novalidate>
      <div class="settings-header">
        <button
          class="back-btn control-button"
          type="button"
          @click="$router.replace('/settings/categories')"
        >Cancel</button>

        <div class="settings-header-title">Edit category</div>

        <button
          class="back-btn-2 control-button"
          :class="
            $v.nameToSubmit.$invalid || $v.colorToSubmit.$invalid
              ? 'not-active'
              : ''
          "
          type="submit"
          :disabled="$v.nameToSubmit.$invalid || $v.colorToSubmit.$invalid"
        >Save</button>
      </div>

      <div class="settings-small">Enter your new category name.</div>

      <div class="input-budget-container">
        <input
          v-autofocus
          v-model="nameToSubmit"
          @blur="$v.nameToSubmit.$touch"
          placeholder="Category name"
          class="input-budget select-all"
          :class="{ invalid: $v.nameToSubmit.$error }"
          v-select-all
        />
      </div>

      <div class="settings-strong small-m-t">Choose color for your tag</div>

      <div class="color-container">
        <button
          class="tag-object-container tag-margin-right"
          v-for="(color, key) in colors"
          :key="key"
          @click="handleColor(key)"
          :class="colorToSubmit === key ? 'chosen-color' : ''"
          type="button"
          :style="color.categoryStyle"
        >
          <div class="tag-object-round-add" :style="{ background: color.categoryStyle.color }"></div>
          <div class="tag-object">{{ color.colorName }}</div>
        </button>
      </div>

      <transition name="slide-fade">
        <div
          class="animation-container"
          v-if="
          colorToSubmit !== '' && nameToSubmit !== '' && !$v.nameToSubmit.$error
        "
        >
          <div class="settings-strong small-m-t">Your category will look like this:</div>
          <div class="constructed-tag-comtainer">
            <div class="tag-object-container" :style="colors[colorToSubmit].categoryStyle">
              <div
                class="tag-object-round-add"
                :style="{ background: colors[colorToSubmit].categoryStyle.color }"
              ></div>
              <div class="tag-object">{{ nameToSubmit }}</div>
            </div>
          </div>
        </div>
      </transition>
    </form>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

//validatin fields
import { required, maxLength } from "vuelidate/lib/validators";

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
      colorToSubmit: "",
    };
  },

  validations: {
    nameToSubmit: { required, maxLength: maxLength(25) },
    colorToSubmit: { required },
  },

  computed: {
    ...mapGetters("categories", ["colors", "categories"]),
    ...mapGetters("settings", ["editedCategory"]),
  },
  methods: {
    ...mapActions("categories", ["createCategory"]),
    submitForm() {
      let payload = {
        category: {
          name: this.nameToSubmit,
          colorID: this.colorToSubmit,
          categoryStyle: {},
        },
        id: 0,
      };
      this.createCategory(payload);
      this.$router.replace("/settings/categories");
    },
    handleColor(key) {
      if (key === this.colorToSubmit) this.colorToSubmit = "";
      else this.colorToSubmit = key;
    },
  },
  mounted() {
    console.log("this.editedCategory: ", this.editedCategory);
    this.nameToSubmit = this.categories[this.editedCategory].name
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

.small-m-t {
  margin-top: 0.75rem;
}

.color-container {
  margin: 0.75rem 2rem;
  background-color: $for-white;
  border-radius: 12px;
  padding: 0 1rem 1rem 1rem;

  button {
    margin-top: 1rem;
    opacity: 0.25;
  }
}

.chosen-color {
  opacity: 1 !important;
}

.constructed-tag-comtainer {
  margin-left: 2rem;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}
</style>
