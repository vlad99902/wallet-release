<template>
<!-- applying dark mode here -->
  <div id="q-app" class="main-app" :class="settings.showDarkMode ? 'dark' : ''"
  >
    <router-view :class="settings.showAddExpense ? 'blur-overlay' : ''"  />

    <q-dialog v-model="settings.showAddExpense" >
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense @click="setShowAddExpense()" />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
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
</style>

