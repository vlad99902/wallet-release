<template>
  <div class="cards">
      <div class="card-1" v-if="settings.budget">
        <!-- checking for dark mode -->
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

      <div v-else class="create-gap"></div>

      <div class="card-2">
        <!-- checking for dark mode -->
        <img src="../../statics/card2-dark.png" v-if="settings.showDarkMode">
        <img src="../../statics/card2.png" v-else> 
        <div class="card-content">

          <span>
            Spent this week   <br>
          </span>

          <span class="avaliable-money">
            $564.4
          </span>

          <div class="week-analitycs row">
            You’re spending 7% less than on previous  week
          </div>

        </div>
      </div>

      <!-- third card -->
      <div class="card-3" v-if="!settings.budget">
        <img src="../../statics/card3-dark.png" v-if="settings.showDarkMode">
        <img src="../../statics/card3.png" v-else>
      </div>

      <div v-else class="create-gap-2"></div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['progress'],
  data() {
     return {
       
     }
  },
  computed: {
    ...mapGetters('settings', ['settings'])
  }
}
</script>

<style>

.create-gap {
  margin-left: 1rem;
}
.create-gap-2 {
  padding-right: 2rem;
}

</style>