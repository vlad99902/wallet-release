<template>
  <q-card class="more-modal">
    <q-card-section>
      <form @submit.prevent="submitForm">
        <div class="container">
          <!-- change tag -->
          <div class="tag-change-container">
            <button
              v-for="(category, key) in this.categories"
              :key="key"
              type="button"
              class="tag-object tag-change-object tag-margin-right"
              :style="[
                key == expense.category ? 'opacity: 1' : '',
                category.categoryStyle
              ]"
            >
              <div
                class="tag-object-round-add"
                :style="{ background: category.categoryStyle.color }"
              ></div>
              {{ category.name }}
            </button>
          </div>

          <!-- expense name -->
          <input
            class="input-field input-field-small"
            @input="expenseToUpdate.name = $event.target.value"
            type="text"
            placeholder="Name"
            :value="[[expense.name]]"
          />

          <!-- expense cost -->
          <input
            class="input-field input-field-small"
            @input="expenseToUpdate.cost = $event.target.value"
            type="text"
            placeholder="0.0"
            :value="[[expense.cost]]"
          />

          <!-- expense date -->
          <input
            class="input-field input-field-small"
            @input="expenseToUpdate.date = $event.target.value"
            type="text"
            placeholder="date"
            :value="[[date]]"
          />

          <!-- expense description -->
          <textarea
            class="input-field input-field-desc"
            @input="expenseToUpdate.description = $event.target.value"
            type="text"
            placeholder="Description"
            :value="[[expense.description]]"
          />

          <!-- buttons  -->
          <div class="buttons-container">
            <!-- delete cancel -->
            <button
              class="button-delete"
              @click="$emit('close')">
              cancel
            </button>

            <!-- edit button -->
            <button class="button-edit" type="submit">
              confirm
            </button>

            <!-- <p>
                  {{ $v.expenseToUpdate.name }}
              </p>-->
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
      expenseToUpdate: {},

      expenseToVuelidate: {}
    };
  },
  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToVuelidate: {
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
      this.updateExpense({
        id: this.id,
        date: this.date,
        updates: this.expenseToUpdate
      });
    }
  },
  computed: {
    ...mapGetters("categories", ["categories"])
  }
};
</script>

<style lang="scss"></style>
