<template>
  <q-card class="more-modal">
    <q-card-section>
      <form @submit.prevent="submitForm">
        <div class="container">
          <div class="tag-container tag-container-edit">
            <div class="tag-all-container tag-all-container-edit">
              <button
                class="tag-object-container tag-edit tag-margin-right"
                v-for="(category, key) in categories"
                v-on:click="setCategory(key)"
                :class="expenseToUpdate.category === key ? 'opacity-100' : ''"
                :key="key"
                type="button"
                :style="category.categoryStyle"
              >
                <div
                  class="tag-object-round-add"
                  :style="{ background: category.categoryStyle.color }"
                ></div>
                <div class="tag-object">
                  {{ category.name }}
                </div>
              </button>
            </div>
          </div>

          <!-- expense name -->
          <input
            class="input-field input-field-small"
            v-model="expenseToUpdate.name"
            @blur="$v.expenseToUpdate.name.$touch"
            :class="{ 'invalid': $v.expenseToUpdate.name.$error }"
            type="text"
            placeholder="Name"
          />

          <!-- expense cost -->
          <currency-input
            currency="USD"
            locale="en-US"
            class="input-field input-field-small"
            v-model="expenseToUpdate.cost"
            @blur="$v.expenseToUpdate.cost.$touch"
            :class="{ 'invalid': $v.expenseToUpdate.cost.$error }"
            placeholder="$$$"
          />

          <!-- expense date :value="[[expenseToUpdate.cost]]"-->
          <input
            class="input-field input-field-small"
            v-model="expenseToUpdate.date"
            @blur="$v.expenseToUpdate.date.$touch"
            :class="{ 'invalid': $v.expenseToUpdate.date.$error }"
            type="date"
            placeholder="date"
          />

          <!-- expense description -->
          <textarea
            class="input-field input-field-desc input-field-small-description"
            v-model="expenseToUpdate.description"
            @blur="$v.expenseToUpdate.description.$touch"
            :class="{ 'invalid': $v.expenseToUpdate.description.$error }"
            type="text"
            placeholder="Description"
            autogrow
          />

          <!-- buttons  -->
          <div class="buttons-container">
            <!-- delete cancel -->
            <button class="button-delete" type="button" @click="$emit('close')">
              cancel
            </button>

            <!-- edit button -->
            <button
              class="button-edit"
              type="submit"
              :disabled="
                $v.expenseToUpdate.name.$invalid ||
                  $v.expenseToUpdate.date.$invalid ||
                  $v.expenseToUpdate.description.$invalid ||
                  $v.expenseToUpdate.cost.$invalid
              "
            >
              confirm
            </button>
          </div>
        </div>
      </form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";
import { required, maxLength, minValue } from "vuelidate/lib/validators";

export default {
  props: ["expense", "id", "date"],
  data() {
    return {
      //data to update
      // expenseToUpdate: {},

      expenseToUpdate: {
        name: "",
        cost: 0,
        description: "",
        date: "",
        category: ""
      }
    };
  },
  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToUpdate: {
      name: { required, maxLength: maxLength(25) },
      cost: { required, minValue: minValue(0) },
      description: { maxLength: maxLength(99) },
      date: { required }
    }
  },
  methods: {
    ...mapActions("expenses", ["updateExpense"]),
    //submiting form for edit expense
    submitForm() {
      this.submitExpense();
      this.$emit("close");
    },

    //submit expense data
    submitExpense() {
      //delete part that was not updated
      for (let i in this.expenseToUpdate) {
        if (this.expenseToUpdate[i] == this.expense[i]) {
          delete this.expenseToUpdate[i];
        }
      }
      //check updated date or not
      if (this.expenseToUpdate.date == this.date) {
        delete this.expenseToUpdate.date;
      }

      this.updateExpense({
        id: this.id,
        date: this.date,
        updates: this.expenseToUpdate
      });
    },

    //set category
    setCategory(key) {
      this.expenseToUpdate.category = key;
    },

    //for vuelidate
    copyExpenseObject() {
      Object.assign(this.expenseToUpdate, this.expense);
      this.expenseToUpdate.date = this.date;
      this.expenseToUpdate.cost = parseFloat(this.expense.cost);
    }
  },
  computed: {
    ...mapGetters("categories", ["categories"])
  },
  mounted() {
    this.copyExpenseObject();
  }
};
</script>

<style lang="scss">
.tag-container-edit {
  margin-bottom: 1vh;
  width: 100%;
  height: auto;
}

.tag-all-container-edit {
  border: none;
  padding-top: 0;
  width: 100%;
}

.tag-edit {
  opacity: 0.5;
}

.opacity-100 {
  opacity: 1;
}
</style>
