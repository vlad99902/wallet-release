<template>
  <!-- applying dark mode here -->
  <div id="q-app" class="main-app" :class="settings.showDarkMode ? 'dark' : ''">
    <router-view :class="settings.showBlur ? 'blur-overlay' : ''" />

    <nav-bar
      :showAddExpense.sync="showAddExpense"
      :class="settings.showBlur ? 'blur-overlay' : ''"
    />

    <q-dialog v-model="showAddExpense">
      <add-expense @close="closeAddExpense" :class="settings.showDarkMode ? 'dark' : ''" />
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      showAddExpense: false,
    };
  },
  components: {
    "add-expense": require("components/AddExpense.vue").default,
    "nav-bar": require("components/NavBar.vue").default,
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
  methods: {
    closeAddExpense() {
      this.showAddExpense = false;
    },
  },
};
</script>

<style lang="scss">
// w/o dark mode
.main-app {
  padding-top: 2rem;
  color: $primary;
  background: $for-background;
  transition: 0.5s ease-in-out;
}

//with dark mode
.dark {
  color: $primary-dark;
  background: $for-background-dark;
  transition: 0.5s ease-in-out;
}

//styling add window
.q-card {
  background: $for-background-dark;
  opacity: 0.85;

  //opacity: 1;
  color: $for-white;
  border-radius: 20px !important;
  width: 100%;
  max-height: 80%;

  padding-top: 1.6vh;
  padding-bottom: 1.6vh;
}

.blur-overlay {
  filter: blur(5px);
  transition: 0.3s ease-in-out;
}

//////////////////////
//inside dialog window
//header
</style>

