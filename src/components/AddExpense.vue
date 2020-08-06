<template>
  <q-card>
    <form @submit.prevent="submitForm" novalidate>
      <q-card-section>
        <div class="header">
          <div class="header-element">Add</div>
          <div class="header-element">Split</div>
        </div>

        <div class="input-fiels-container">
          <!-- input name -->
          <input
            v-model="expenseToSubmit.name"
            @blur="$v.expenseToSubmit.name.$touch"
            :class="{'invalid' : $v.expenseToSubmit.name.$error}"
            ref="name"
            v-autofocus
            type="text"
            placeholder="Name"
            class="input-field"
          />

          <!-- input date -->
          <input
            v-model="date"
            @blur="$v.date.$touch"
            :class="{'invalid' : $v.date.$error}"
            type="date"
            placeholder="Date"
            class="input-field"
          />

          <!-- buttons to set today or yesterdat date -->
          <button
            class="button-set-date"
            type="button"
            v-on:click="setTodayDate()"
            :class="{'button-current-date-selected' : activeButton === 'today' && this.checkdate() }"
          >Today</button>

          <button
            class="button-set-date"
            type="button"
            v-on:click="setYesterdayDate()"
            :class="{'button-current-date-selected' : activeButton === 'yesterday' && this.checkdate() }"
          >Yesterday</button>

          <!-- input cost -->
          <currency-input
            currency="USD"
            locale="en-US"
            v-model="expenseToSubmit.cost"
            @blur="$v.expenseToSubmit.cost.$touch"
            :class="{'invalid' : $v.expenseToSubmit.cost.$error}"
            placeholder="$$$"
            class="input-field"
          />

          <!-- input category test -->
          <div class="tag-container">
            <!-- selected category -->
            <div class="tag-selected-container">
              <div
                class="tag-object"
                :style="categories[expenseToSubmit.category].categoryStyle"
                v-on:click="cancelSetCategory()"
              >
                <div
                  class="tag-object-round-add"
                  :style="{background: categories[expenseToSubmit.category].categoryStyle.color}"
                ></div>
                {{ categories[expenseToSubmit.category].name }}
              </div>
            </div>

            <!-- all categoryes show -->
            <div class="tag-all-container demo" id="list-complete-demo">
              <transition-group name="list-complete">
                <button
                  v-for="(category, key) in noSelectedCategory()"
                  v-on:click="setCategory(key)"
                  :key="key"
                  type="button"
                  class="tag-object tag-margin-right list-complete-item"
                  :style="category.categoryStyle"
                >
                  <div
                    class="tag-object-round-add"
                    :style="{background: category.categoryStyle.color}"
                  ></div>
                  {{ category.name }}
                </button>
              </transition-group>
            </div>
          </div>

          <!-- input description -->
          <textarea
            v-model="expenseToSubmit.description"
            @blur="$v.expenseToSubmit.description.$touch"
            :class="{'invalid' : $v.expenseToSubmit.description.$error}"
            type="text"
            placeholder="Description"
            class="input-field input-field-desc"
            rows="2"
            autogrow
          ></textarea>
        </div>

        <button
          class="button-add"
          type="submit"
          :disabled="$v.expenseToSubmit.name.$invalid 
          || $v.expenseToSubmit.cost.$invalid 
          || $v.expenseToSubmit.description.$invalid
          || $v.date.$invalid"
        >ADD</button>

        <!-- <pre> {{ expenseToSubmit }} </pre> -->
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";

//validatin fields
import { required, maxLength, minValue } from "vuelidate/lib/validators";

//directives
import { autofocus } from "src/directives/directive-autofocus";

export default {
  props: ["showAddExpense"],

  directives: {
    autofocus,
  },
  data() {
    return {
      expenseToSubmit: {
        name: "",
        description: "",
        cost: 0,
        category: "ID0",
        count: "",
      },
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      date: date.formatDate(Date.now(), "YYYY-MM-DD"),
      activeButton: "today",
      yesterdayDate: date.formatDate(
        date.subtractFromDate(Date.now(), { hours: 24 }),
        "YYYY-MM-DD"
      ),
      todayDate: date.formatDate(Date.now(), "YYYY-MM-DD"),
    };
  },

  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToSubmit: {
      name: { required, maxLength: maxLength(25) },
      cost: { required, minValue: minValue(0) },
      description: { maxLength: maxLength(99) },
    },
    date: { required },
  },
  methods: {
    ...mapActions("expenses", ["addExpense"]),
    ...mapActions("settings", ["setShowBlur"]),
    submitForm() {
      this.submitExpense();
      this.$emit("close");
    },
    submitExpense() {
      this.expenseToSubmit.date = this.date;
      this.addExpense(this.expenseToSubmit);
    },

    //setting yesterday date to date field
    setYesterdayDate: function () {
      this.date = this.yesterdayDate;
      this.activeButton = "yesterday";
    },

    setTodayDate() {
      this.date = this.todayDate;
      this.activeButton = "today";
    },

    checkdate() {
      if (this.date === this.todayDate || this.date === this.yesterdayDate)
        return true;
      else return false;
    },

    //setting expense category
    setCategory(id) {
      this.expenseToSubmit.category = id;
    },

    cancelSetCategory() {
      this.expenseToSubmit.category = "ID0";
    },

    //function for hide selected category by rewrite categories list
    noSelectedCategory() {
      let newCategories = {};
      for (let category in this.categories) {
        if (this.expenseToSubmit.category !== category) {
          newCategories[category] = this.categories[category];
        }
      }
      return newCategories;
    },

    //copied from documentation
  },
  mounted() {
    this.setShowBlur();
    this.noSelectedCategory();
  },
  destroyed() {
    this.setShowBlur();
  },

  //get data from categories store
  computed: {
    ...mapGetters("categories", ["categories"]),
  },
};
</script>

<style lang="scss">
////////////////
//TAGS
////////////////

.tag-container {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);

  width: 100%;

  height: 11vh;

  font-size: 1.95vh;

  //margin-bottom: 1rem;
  margin-bottom: 2vh;

  //padding: 0.6rem 0.875rem;
  padding: 0.6rem 0rem;

  font-weight: 500;
  color: $for-white;

  resize: none;
}

.tag-selected-container {
  padding-bottom: 0.5rem;
  margin-left: 0.875rem;
  color: $secondary-dark;

  height: 4vh;
}

.tag-all-container {
  overflow-x: scroll;
  white-space: nowrap;

  padding-left: 0.875rem;

  border-top: 1px solid $for-white;
  padding-top: 0.5rem;
}

.tag-all-container::-webkit-scrollbar {
  display: none;
}



///////////////////////////
//CONTAINERS AND OTHER
///////////////////////////

//add and split
.header {
  text-align: center;
  color: $for-white;
  font-weight: 600;
  //font-size: 1.2rem;
  font-size: 2.4vh;
}

//add split elements
.header-element {
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.input-fiels-container {
  margin-top: 3vh;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;

  padding: 0rem 1rem 0rem 1rem;
}

///////////////////////////
//TEXT FIELDS
///////////////////////////

//input field style
.input-field {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);

  width: 100%;

  height: 5.5vh;

  font-size: 1.95vh;

  //margin-bottom: 1rem;
  margin-bottom: 2vh;

  padding: 0.6rem 0.875rem;

  font-weight: 500;
  color: $for-white;

  resize: none;

  &::placeholder {
    color: $secondary;
    font-weight: 500;
  }
}

//second class for description field
.input-field-desc {
  margin-bottom: 1rem;
  height: auto;
}

//focus
.input-field:focus {
  border: 1px solid $for-white;
  border-radius: 12px;
  outline: none !important;
}
.input-field-desc:focus {
  border: 1px solid $for-white;
  border-radius: 12px;
  outline: none !important;
}



::-webkit-calendar-picker-indicator {
  background: url("../assets/calendar.svg") no-repeat;
  width: 15px;
  height: 15px;
  border-width: thin;
  margin-top: auto;
}

///////////////////////////
//BUTTONS
///////////////////////////

//buttons

//button-add-style
.button-add {
  background-color: $add-button;
  color: $for-white;

  border-radius: 50px;
  width: 7.25rem;

  margin: -0.8vh 1rem 0rem 1rem;
  padding: 1.2vh 0.875rem;

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  border: none;
  outline: none !important;
}

//button-set-date-style
.button-set-date {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  color: $for-white;

  padding: 0.3rem 0.875rem;

  margin-right: 1rem;
  margin-bottom: 1rem;

  font-size: 1.8vh;
  font-weight: 500;
  text-align: center;

  display: inline-block;

  border: none;
  outline: none !important;
}

//button-current-date-selected
.button-current-date-selected {
  background-color: $for-background;
  color: $dark;

  outline: none !important;
  border: none;
}

//for animation
.list-complete-item {
  transition: all 0.5s;
  opacity: 1;
  //display: inline-block;
  //margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>