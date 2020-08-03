<template>
  
  <q-card class="more-modal" :class="showConfirmDelete ? 'hide-on-delete' : ''">
    <div>
      <q-card-section >
        <div
          class="container"
          v-if="showEditFields == false">
          
            <!-- header -->
            <div class="header-container">

          <!-- expense name -->
              <div class="header-name">
                {{ expense.name }}
              </div>

          <!-- tag img -->
              <div class="header-tag">
                
                <div
                  class="tag-object"
                  :style="categories[expense.category].categoryStyle">
                  <div
                    class="tag-object-round-add"
                    :style="{background: categories[expense.category].categoryStyle.color}">
                  </div>
                  {{ categories[expense.category].name }}
                </div>
                
              </div>

          <!-- expense cost -->
              <div class="header-cost">
                ${{ expense.cost }}
              </div>

          <!-- expense date -->
              <div class="header-date">
                {{ date | fullDate }}
              </div>

            </div>

            <div class="description">
              {{ expense.description }}
            </div>


            <!-- buttons  -->
            <div class="buttons-container">

              <!-- delete button -->
              <button 
                v-if="deleteWithoutConfirm"
                class="button-delete"
                @click.stop="showConfirmDelete = true">
                delete
              </button>

              <button 
                v-if="deleteWithoutConfirm == false"
                class="button-delete"
                @click.stop="promtToDeleteExpense()">
                delete
              </button>

              <!-- edit button -->
              <button
                class="button-edit"
                @click="showEditFields = true">
                edit
              </button>
          </div>
            
            <q-dialog v-model="showConfirmDelete">
              <confirm-delete
                @close="showConfirmDelete = false"
                :expense = "expense"
                :id = "id"
                :date = "date"/>
            </q-dialog>
        </div>

        <!-- ///////////////////// -->
        <!-- ///////////////////// -->
        <!-- section for editing -->
        <!-- ///////////////////// -->
        <!-- ///////////////////// -->
        <form @submit.prevent="submitForm">

          <div
            class="container"
            v-if="showEditFields">
            
              <!-- tag img
              <div class="header-tag">
                
                <div
                  class="tag-object"
                  :style="categories[expense.category].categoryStyle">
                  <div
                    class="tag-object-round-add"
                    :style="{background: categories[expense.category].categoryStyle.color}">
                  </div>
                  {{ categories[expense.category].name }}
                </div>
                
              </div> -->

          <!-- expense name -->
              <input
                class="input-field input-field-small"
                @input="expenseToUpdate.name = $event.target.value"
                type="text"
                placeholder="Name"
                :value="[[ expense.name ]]"/>

          <!-- expense cost -->
              <input
                class="input-field input-field-small"
                @input="expenseToUpdate.cost = $event.target.value"
                type="text"
                placeholder="0.0"
                :value="[[ expense.cost ]]"/>

          <!-- expense date -->
              <input
                class="input-field input-field-small"
                @input="expenseToUpdate.date = $event.target.value"
                type="text"
                placeholder="date"
                :value="[[ date ]]"/>

          <!-- expense description -->
              <textarea
                class="input-field input-field-desc"
                @input="expenseToUpdate.description = $event.target.value"
                type="text"
                placeholder="Description"
                :value="[[ expense.description ]]"/>

              <!-- buttons  -->
              <div class="buttons-container">

                <!-- delete cancel -->
                <button 
                  class="button-delete"
                  @click="showEditFields = false">
                  cancel
                </button>

                <!-- edit button -->
                <button
                  class="button-edit"
                  type="submit"
                  >
                  confirm
                </button>

                <!-- <p>
                  {{ $v.expenseToUpdate.name }}
                </p> -->
            </div>
          </div>
        </form>
        
      </q-card-section>
    </div>
  </q-card>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";
import { required, maxLength, minValue } from 'vuelidate/lib/validators';

export default {
  props: ['expense','id','date'],
  data() {
    return {

      //data to update
      expenseToUpdate: {
      },

      //data to delete info
      dataToDelete: {
        date: "",
        id: ""
      },

      showConfirmDelete: false,
      
      //variable to delete without confirm dialog
      //will take it from settings
      deleteWithoutConfirm: true,

      //to show input edit input fields
      showEditFields: false
    }
  },
  //validations parameters
  //must be imported in umport section

  validations: {
    expenseToUpdate: {
      name: {required, maxLength: maxLength(25)},
      cost: {required, minValue: minValue(0)},
      description: {maxLength: maxLength(99)}
    },
    date: {required}

  },
  methods: {
    ...mapActions('expenses', ['deleteExpense', 'updateExpense']),
    ...mapActions('settings', ['setShowBlur']),

    promtToDeleteExpense() {
      //save data about expense to delete in object to push it
      this.dataToDelete.date = this.date;
      this.dataToDelete.id = this.id;

      this.deleteExpense(this.dataToDelete)
    },

    //submiting form for edit expense
    submitForm() {
      this.submitExpense();
      this.$emit('close');
    },

    //submit expense data
    submitExpense() {
      this.updateExpense({
        id: this.id,
        date: this.date,
        updates: this.expenseToUpdate
      })
    }
  },
  filters: {
    fullDate(value) {
      return date.formatDate(value, 'YYYY.MM.DD')
    }
  },
  computed: {
    ...mapGetters("categories", ["categories"])
  },
  components: {
    'confirm-delete': require('components/modals/ConfirmDelete.vue').default,
  },
  mounted (){
    this.setShowBlur()
  },
  destroyed() {
    this.setShowBlur()
  }
}
</script>

<style lang="scss">

///////////////////////////
//CONTAINERS AND OTHER
///////////////////////////

.container {
  padding-left: 1rem;
  padding-right: 1rem;

 // padding-bottom: 0.8rem;
}

.header-container {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;

  margin-bottom: 0.8rem;
}

.buttons-container {
  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-columns: 50% 50%;
}

///////////////////////////
//HEADER ELEMENTS WITH INPUT FIELDS
///////////////////////////

.input-field-small {
  margin-bottom: 1vh;
  padding-left: 0.6rem;
  height: 4vh;
  border-radius: 12px;
}

///////////////////////////
//HEADER ELEMENTS
///////////////////////////

.header-name {
  font-weight: 600;

  grid-column: 1 / 2;
  grid-row: 1 / 2;

  justify-self: start;
  align-self: center;
}

.header-tag {
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  justify-self: end;
  align-self: start;
}

.header-cost {
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  justify-self: start;
  align-self: end;

  font-weight: 300;
}

.header-date {
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  justify-self: end;
  align-self: end;

  font-size: 0.9rem;
  font-weight: 400;
}

.description {
  margin-bottom: 1.2rem;
}

///////////////////////////
//BUTTONS
///////////////////////////

.button-edit {
  grid-column: 2 / 3;
  justify-self: end;

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-size: .9rem;

  background-color: $add-button;
  color: $for-white;

  border-radius: 50px;
  width: 30vw;
  max-width: 30vw;

  padding: 1vh;

  border: none;
  outline: none !important;
}

.button-delete {
  grid-column: 1 / 2;
  justify-self: start;

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-size: .9rem;

  background: none;
  color: $for-white;

  border-radius: 50px;
  width: 30vw;
  max-width: 30vw;

  padding: 1vh;

  border: 1px solid $for-white;
  outline: none !important;
}


.hide-on-delete {
  visibility: hidden;
  opacity: 0;
  //transition: visibility .3s, opacity .3s linear;
}

.more-modal {
  transition: all .3s, opacity .3s linear;
}




</style>