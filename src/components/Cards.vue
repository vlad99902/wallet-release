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
            ${{ availableBudget }}
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
            Spent: ${{ spentBudget }}
            <q-space></q-space>
            Daily limit: ${{ dailyLimit }}
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
            ${{ spentThisWeek }}
          </span>

          <div class="week-analitycs row">
            <div v-if="spentLastWeek === null">
              <!-- No expenses were tracked during the last week -->
              Here will be comparison with your last week spendings once you have them!
            </div>
            <div v-else-if="spentLastWeek !== 0">
              You’re spending 

              <b v-if="spentLastWeek > 0" class="less-spent">
                ${{ spentLastWeek }} less 
              </b>

              <b v-if="spentLastWeek < 0" class="more-spent">
                ${{ spentLastWeek | removeMinus }} more 
              </b>

              than on previous week &nbsp <small> (within the same amount of days) </small>

            </div>

            <div v-else>
              You’re spending the same amount of money as on the previous week
            </div>

          </div>

        </div>
      </div>

      <!-- third card -->
      <div class="card-3" v-if="!settings.budget" @click="$router.replace('/settings/budget')">
        <img src="../../statics/card3-dark.png" v-if="settings.showDarkMode">
        <img src="../../statics/card3.png" v-else>
      </div>

      <div v-else class="create-gap-2"></div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { date } from 'quasar'

export default {
  //props: ['progress'],
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    ...mapGetters('expenses', ['expenses', 'spentThisWeek', 'spentLastWeek', 'spentBudget', 'availableBudget', 'dailyLimit', 'progress']),
    
  },
  methods: {
    ...mapActions('expenses', ['calcSpentThisWeek', 'calcSpentBudget'])
  },
  filters: {
    removeMinus(value) {
      return value.toString().slice(1)
    }
  },
  mounted() {
    this.calcSpentThisWeek()
    this.calcSpentBudget()
    //need to make offset and analytics and move it into the store
  }
}
</script>

<style lang="scss">

.create-gap {
  margin-left: 1rem;
}
.create-gap-2 {
  padding-right: 2rem;
}

.less-spent {
  color: $less-spent;
}

.more-spent {
  color: $more-spent;
}


</style>