<template>
  <!-- applying dark mode here -->
  <div id="q-app" class="main-app" :class="settings.showDarkMode ? 'dark' : ''">
    <router-view :class="settings.showAddExpense ? 'blur-overlay' : ''" />

    <q-dialog v-model="settings.showAddExpense">
      <q-card>
        <form @submit.prevent="submitForm">
          <q-card-section>
            <div class="header">
              <div class="header-element">Add</div>
              <div class="header-element">Split</div>
            </div>

            <div class="input-fiels-container">
              <input
                v-model="expanseToSubmit.purchases.name"
                :rules="[val => !!val || 'Field is required']"
                ref="name"
                autofocus
                type="text"
                placeholder="Name"
                class="input-field"
              />

              <input
                
                type="text"
                placeholder="Date"
                
                class="input-field" />

              <input
                v-model="expanseToSubmit.purchases.category"
                type="text"
                placeholder="Start writing tag"
                class="input-field" />

              <input
                v-model="expanseToSubmit.purchases.cost"
                type="text"
                placeholder="$$$"
                class="input-field" />

              <input
                v-model="expanseToSubmit.purchases.description"
                type="text"
                placeholder="Description"
                class="input-field" />
            </div>

            
            <button
              class="button-add"
              type="submit" 
              >
              ADD
            </button>
            
          </q-card-section>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    //object to submit
    return {
      expanseToSubmit: {
        total: "200",
        purchases: {
          "": {
            name: "",
            description: "",
            cost: "",
            category: ""
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters("settings", ["settings"])
  },
  methods: {
    ...mapActions("settings", ["setShowAddExpense"]),

    //add new expense

    ...mapActions("expenses", ["addExpense"]),
    submitForm() {
      //add validate
      this.submitExpense();
    },
    submitExpense() {
      this.addExpense(this.expanseToSubmit);
    }
  }
};
</script>

<style lang="scss">
// w/o dark mode
.main-app {
  padding-top: 2rem;
  color: $primary;
  background: $for-background;
  transition: background 0.5s ease-in-out;
}

//with dark mode
.dark {
  color: $primary-dark;
  background: $for-background-dark;
  transition: color 0.5s ease-in-out;
}

//styling add window
.q-card {
  background: $for-background-dark;
  opacity: 0.85;
  color: $for-white;
  border-radius: 20px !important;

  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}

.q-dialog__backdrop {
}

.blur-overlay {
  filter: blur(5px);
}

//////////////////////
//inside dialog window
//header

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
  width: 76vw;

  padding: 0rem 1rem 0rem 1rem;
}

//input field style
.input-field {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border-width: 2px;
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

//focus text field CHANGE THIS FRADIENT
.input-field:focus {
  border-color: $for-white !important;
  border-radius: 12px;
  outline: none;
}

//buttons
.buttons {
  
}

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
}
</style>

