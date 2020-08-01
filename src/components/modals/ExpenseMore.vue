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

        <div
          class="container"
          v-if="showEditFields">
          
            <!-- header -->
            <div class="header-container">

          <!-- expense name -->
              <input
                class="header-name-field"
                type="text"
                placeholder="Name"
                :value="[[ expense.name ]]"/>

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
              <input
                class="header-cost-field"
                type="text"
                placeholder="0.0"
                :value="[[ expense.cost ]]"/>


          <!-- expense date -->
              <input
                class="header-date-field"
                type="text"
                placeholder="date"
                :value="[[ date ]]"/>
            </div>

            <div class="description">
              {{ expense.description }}
            </div>


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
                class="button-edit">
                confirm
              </button>
          </div>
        </div>
        
      </q-card-section>
    </div>
  </q-card>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";

export default {
  props: ['expense','id','date'],
  data() {
    return {
      expenseToUpdate: {
        date: '',
        id: '',
        name: '',
        cost: '',
        categiry: '',
        description: ''
      },
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
  methods: {
    ...mapActions('expenses', ['deleteExpense']),
    ...mapActions('settings', ['setShowBlur']),

    promtToDeleteExpense() {
      
      //save data about expense to delete in object to push it
      this.dataToDelete.date = this.date;
      this.dataToDelete.id = this.id;

      this.deleteExpense(this.dataToDelete)
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

.header-name-field {
  font-weight: 600;
  color: $for-white;

  width: 100%;

  grid-column: 1 / 2;
  grid-row: 1 / 2;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  border: 1px $for-white solid;
  border-radius: 12px;

  padding: 0.2rem 0.6rem;

  justify-self: start;
  align-self: center;

  margin-bottom: 0.5rem;
}

.header-cost-field {
  font-weight: 300;
  color: $for-white;

  width: 100%;

  grid-column: 1 / 2;
  grid-row: 2 / 3;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  border: 1px $for-white solid;
  border-radius: 12px;

  padding: 0.2rem 0.6rem;

  justify-self: start;
  align-self: center;
}

.header-date-field {
  font-weight: 400;
  // font-size: 0.9rem;
  color: $for-white;

  //width: 100%;
  max-width: 32vw;

  grid-column: 2 / 3;
  grid-row: 2 / 3;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  border: 1px $for-white solid;
  border-radius: 12px;

  padding: 0.2rem 0.6rem;

  justify-self: end;
  align-self: center;
}

input:focus {
  border: 1px solid $for-white;
  border-radius: 12px;
  outline: none !important;
}

input::placeholder {
  color: $secondary;
  font-weight: 500;
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
  transition: visibility .3s, opacity .3s linear;
}




</style>