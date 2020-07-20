<template>
<!-- applying dark mode here -->
  <div id="q-app" class="main-app" :class="settings.showDarkMode ? 'dark' : ''"
  >
    <router-view :class="settings.showAddExpense ? 'blur-overlay' : ''"  />

    <q-dialog v-model="settings.showAddExpense">
      
      <q-card>
        <q-card-section>
            <div class="header">
          <div class="header-element">Add</div>
          <div class="header-element">Split</div>
            </div>
          <!-- <q-btn icon="close" flat round dense @click="setShowAddExpense()" /> -->
        </q-card-section>

        <q-card-section>
          <div class="input-field">
            <div class="input-field-text">Name</div>
          </div>

          <div class="input-field">
            <div class="input-field-text">Date</div>
          </div>

          <div class="input-field">
            <div class="input-field-text">Start writing or choose tag</div>
            <hr> 
            <div class="input-field-text">Tags pictures here</div>
          </div>

          <div class="input-field">
            <div class="input-field-text">$$$</div>
          </div>

          <div class="input-field">
            <div class="input-field-text">Description</div>
          </div>

          <div class="button-add">
            <div>Add</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  data() {
     return {

     }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
  },
  methods: {
    ...mapActions('settings', ['setShowAddExpense'])
  }
}
</script>

<style lang="scss">

// w/o dark mode
.main-app {
  padding-top: 2rem;
  color: $primary;
  background: $for-background;
  transition: background .5s ease-in-out;
}

//with dark mode
.dark {
  color: $primary-dark;
  background: $for-background-dark;
  transition: color .5s ease-in-out;
}

//styling add window
.q-card {
  background: $for-background-dark;
  opacity: .85;
  color: $for-white;
  border-radius: 20px !important;
  
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
  padding-top: 1rem;
}

//input field style
.input-field {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  
  width: 68vw;
  margin: 0rem 1rem 1rem 1rem;
  padding: 0.5625rem 1rem;

  font-weight: 500;
  color: $secondary;
}

//button-add-style
.button-add {
  background-color: $add-button;

  border-radius: 12px;
  width: 7.25rem;

  margin: 2rem 1rem 1rem 1rem;
  padding: 0.5625rem 1rem;

  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
}


.input-field-text {
  
}

</style>

