<template>
  <div class="cards">
      <div class="card-1">
        <img src="../../statics/card1-dark.png" v-if="settings.showDarkMode">
        <img src="../../statics/card1.png" v-else> 
        <div class="card-content">

          <span>
            Available   <br>
          </span>

          <span class="avaliable-money">
            $564.4
          </span>

          <!-- progress bar -->
          <span class="bar">
            <q-linear-progress
              size="7px"
              class="bar"
              color="secondary"
              :value="progress" />
          </span>

          <!-- budget analitycs -->
          <div class="spent-limit row">
            Spent: $12.43
            <q-space></q-space>
            Daily limit: $12.43
          </div>

        </div>
      </div>

      <!-- second card -->
      <div class="card-2">
        <img src="../../statics/card2-dark.png" v-if="settings.showDarkMode">
        <img src="../../statics/card2.png" v-else>
        <div class="card-content">
          <span>
            Spent this week <br>
          </span>
          <span class="avaliable-money">
            $564.4
          </span>
          <p class="week-analitycs">
            You’re spending 7% less than on previous week
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['progress'],
  data() {
     return {
        showDarkMode: true
     }
  },
  computed: {
    ...mapGetters('settings', ['settings'])
  }
}
</script>

<style>

</style>