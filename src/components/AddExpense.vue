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
            v-model="expenseToSubmit.date"
            @blur="$v.expenseToSubmit.date.$touch"
            :class="{'invalid' : $v.expenseToSubmit.date.$error}"
            type="date"
            placeholder="Date"
            class="input-field" />


      <!-- buttons to set today or yesterdat date -->
          <button
            class="button-set-date"
            type="button"
            v-on:click="expenseToSubmit.date = new Date().toISOString().substr(0, 10)"
            :class="{'button-current-date-selected' : expenseToSubmit.date == new Date().toISOString().substr(0, 10)}"
            >
            Today
          </button>

          <button
            class="button-set-date"
            type="button"
            v-on:click="setYesterdayDate()"
            :class="{'button-current-date-selected' : currentDateIsYesterday() == true}"
            >
            Yesterday
          </button>


      <!-- input category -->
          <input
            v-model="expenseToSubmit.category"
            type="text"
            placeholder="Start writing tag"
            class="input-field" />

          
      <!-- input cost -->
          <input
            v-model.number="expenseToSubmit.cost"
            @blur="$v.expenseToSubmit.cost.$touch"
            :class="{'invalid' : $v.expenseToSubmit.cost.$error}"
            type="number"
            step="0.1"
            placeholder="$$$"
            class="input-field" />


      <!-- input description -->
          <input
            v-model="expenseToSubmit.description"
            @blur="$v.expenseToSubmit.description.$touch"
            :class="{'invalid' : $v.expenseToSubmit.description.$error}"
            type="text"
            placeholder="Description"
            class="input-field" />
        </div>

        
        <button
          class="button-add"
          type="submit" 
          :disabled = "$v.expenseToSubmit.name.$invalid 
          || $v.expenseToSubmit.cost.$invalid 
          || $v.expenseToSubmit.description.$invalid
          || $v.expenseToSubmit.date.$invalid"
          >
          ADD
        </button>

      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import { date } from 'quasar'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  props: ['showAddExpense'],
  data() {
    return {
      expenseToSubmit:  {
          name: "",
          description: "",
          cost: "",
          category: "",
          date: new Date().toISOString().substr(0, 10),
          count: ""
      }
    }
  },

  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToSubmit: {
      name: {required, maxLength: maxLength(25)},
      cost: {required},
      date: {required},
      description: {maxLength: maxLength(49)}
    }

  },
  methods: {
    ...mapActions('expenses', ['addExpense']),
    submitForm() {
      this.submitExpense()
      this.$emit('close')
    },
    submitExpense() {
      this.addExpense(this.expenseToSubmit)
    }, 

    //setting yesterday date to date field
    setYesterdayDate: function() {
      let date = new Date();
      date.setDate(date.getDate() - 1)
      this.expenseToSubmit.date = date.toISOString().substr(0, 10)
    },

    //check is cerrent date yesterday date?
    currentDateIsYesterday: function() {
      let date = new Date();
      date.setDate(date.getDate() - 1)
      if (this.expenseToSubmit.date == date.toISOString().substr(0, 10)){
        return true;
      }
    }
  },
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
  font-size: 1.2rem;
}

//add split elements
.header-element {
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.input-fiels-container {
  margin-top: 2.6rem;
  margin-bottom: 1.6rem;
  //width: 76vw;
  width: 100%;
  box-sizing: border-box;


  padding: 0rem 1rem 0rem 1rem;
}


.dark .q-card {
  opacity: 1;
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
  

  margin-bottom: 1rem;
  padding: 0.6rem 0.875rem;

  font-weight: 500;
  color: $for-white;

  &::placeholder {
    color: $secondary;
    font-weight: 500;
  }
}

//focus
.input-field:focus {
  //border-color: $for-white !important;
  border: 1px solid $for-white;
  border-radius: 12px;
  outline: none !important;
}

.invalid {
  //border-color: $field-invalid-border !important;
  border:1px solid $field-invalid-border;
  
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

  margin: 0rem 1rem 0rem 1rem;
  padding: 0.6rem 0.875rem;

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

  font-size: 0.86rem;
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