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
            autofocus
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
            class="input-field" />

      <!-- buttons to set today or yesterdat date -->
          <button
            class="button-set-date"
            type="button"
            v-on:click="setTodayDate()"
            :class="{'button-current-date-selected' : activeButton === 'today' && this.checkdate() }"
            >
            Today
          </button>

          <button
            class="button-set-date"
            type="button"
            v-on:click="setYesterdayDate()"
            :class="{'button-current-date-selected' : activeButton === 'yesterday' && this.checkdate() }"
            >
            Yesterday
          </button>

      <!-- input cost -->
          <currency-input
            currency="USD"
            locale="en-US"
            v-model="expenseToSubmit.cost"
            @blur="$v.expenseToSubmit.cost.$touch"
            :class="{'invalid' : $v.expenseToSubmit.cost.$error}"
            placeholder="$$$"
            class="input-field" />

      <!-- input category -->
          <input
            v-model="expenseToSubmit.category"
            type="text"
            placeholder="Start writing tag"
            class="input-field" />

      <!-- input description --> 
          <textarea
            v-model="expenseToSubmit.description"
            @blur="$v.expenseToSubmit.description.$touch"
            :class="{'invalid' : $v.expenseToSubmit.description.$error}"
            type="text"
            placeholder="Description"
            class="input-field-desc"
            rows="2"
            autogrow
            ></textarea>
        </div>

        <button
          class="button-add"
          type="submit" 
          :disabled = "$v.expenseToSubmit.name.$invalid 
          || $v.expenseToSubmit.cost.$invalid 
          || $v.expenseToSubmit.description.$invalid
          || $v.date.$invalid">
          ADD
        </button>

      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import { date } from 'quasar'
//validatin fields
import { required, maxLength, minValue } from 'vuelidate/lib/validators'

export default {
  props: ['showAddExpense'],
  data() {
    return {
      expenseToSubmit:  {
          name: "",
          description: "",
          cost: 0,
          category: "",
          count: ""
      },
      date: date.formatDate(Date.now(), 'YYYY-MM-DD'),
      activeButton: 'today',
      yesterdayDate: date.formatDate(date.subtractFromDate(Date.now(), { hours: 24 }), 'YYYY-MM-DD'),
      todayDate: date.formatDate(Date.now(), 'YYYY-MM-DD')
    }
  },

  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToSubmit: {
      name: {required, maxLength: maxLength(25)},
      cost: {required, minValue: minValue(0)},
      description: {maxLength: maxLength(99)}
    },
    date: {required}

  },
  methods: {
    ...mapActions('expenses', ['addExpense']),
    submitForm() {
      this.submitExpense()
      this.$emit('close')
    },
    submitExpense() {
      console.log('method fired, date: ', this.date);
      this.expenseToSubmit.date = this.date
      this.addExpense(this.expenseToSubmit)
    }, 

    //setting yesterday date to date field
    setYesterdayDate: function() {
      this.date = this.yesterdayDate
      this.activeButton = 'yesterday'
    },

    setTodayDate() {
      this.date = this.todayDate
      this.activeButton = 'today'
    },

    checkdate() {
      console.log('fired: ')
      if (this.date === this.todayDate || this.date === this.yesterdayDate)
        return true
      else 
        return false
    },

  }
}
</script>

<style lang="scss">

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
  //width: 76vw;
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

.input-field-desc {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);

  width: 100%;


  font-size: 1.95vh;
 // font-size: 2.2vh;

  margin-bottom: 1rem;
  padding: 0.6rem 0.875rem;

  font-weight: 500;
  color: $for-white;

  resize: none;

  &::placeholder {
    color: $secondary;
    font-weight: 500;
  }
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

.invalid {
  border:1px solid $field-invalid-border;
}

::-webkit-calendar-picker-indicator {
    background: url('../assets/calendar.svg') no-repeat;
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

  border-radius: 12px;
  width: 7.25rem;

  margin: -.8vh 1rem 0rem 1rem;
 // padding: 0.6rem 0.875rem;
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

  //height: 4.5vh;

  padding: 0.3rem 0.875rem;
 // padding: 0.4rem 0.875rem 1.4rem 0.875rem;

  margin-right: 1rem;
  margin-bottom: 1rem;

  //font-size: 0.86rem;
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

</style>