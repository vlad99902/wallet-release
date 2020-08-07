<template>
  <div class="cards">
    <div class="card-1" v-if="settings.budget">
      <!-- checking for dark mode -->
      <img src="../../statics/card1-dark.png" v-if="settings.showDarkMode" />
      <img src="../../statics/card1.png" v-else />
      <div class="card-content">
        <span>
          Available
          <br />
        </span>

        <span
          class="avaliable-money"
          :class="{ 'more-spent' : availableBudget < 0 }"
        >${{ animatedNumber }}</span>

        <!-- progress bar -->
        <span class="bar">
          <q-linear-progress size="7px" class="bar" color="secondary" :value="progress" />
        </span>

        <!-- budget analytics -->
        <div class="spent-limit row">
          Spent: ${{ spentBudget }}
          <q-space></q-space>Daily limit:
          <span v-if="availableBudget > 0">${{ dailyLimit }}</span>
          <span v-else>&nbsp $0</span>
        </div>
      </div>
    </div>

    <div v-else class="create-gap"></div>

    <div class="card-2">
      <!-- checking for dark mode -->
      <img src="../../statics/card2-dark.png" v-if="settings.showDarkMode" />
      <img src="../../statics/card2.png" v-else />
      <div class="card-content">
        <span>
          Spent this week
          <br />
        </span>

        <span class="avaliable-money">${{ spentThisWeek }}</span>

        <div class="week-analitycs row">
          <div v-if="spentLastWeek === null">
            <!-- No expenses were tracked during the last week -->
            Here will be comparison with your last week expenses once you have them!
          </div>
          <div v-else-if="spentLastWeek !== 0">
            You’re spending
            <b v-if="spentLastWeek > 0" class="less-spent">${{ spentLastWeek }} less</b>

            <b v-if="spentLastWeek < 0" class="more-spent">${{ spentLastWeek | removeMinus }} more</b>
            than on previous week &nbsp
            <small>(within the same amount of days)</small>
          </div>

          <div v-else>You’re spending the same amount of money as on the previous week</div>
        </div>
      </div>
    </div>

    <!-- third card -->
    <div class="card-3" v-if="!settings.budget" @click="$router.replace('/settings/budget')">
      <img src="../../statics/card3-dark.png" v-if="settings.showDarkMode" />
      <img src="../../statics/card3.png" v-else />
    </div>

    <div v-else class="create-gap-2"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { date } from "quasar";
import { gsap } from "gsap";

export default {
  data() {
    return {
      tweenedNumber: 0,
    };
  },

  computed: {
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("expenses", [
      "expenses",
      "spentThisWeek",
      "spentLastWeek",
      "spentBudget",
      "availableBudget",
      "dailyLimit",
      "progress",
    ]),
    //for animation

    animatedNumber: function () {
      //return this.tweenedNumber.toFixed(0);
    },
  },

  watch: {
    availableBudget: function (newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },

  methods: {
    ...mapActions("expenses", ["calcSpentThisWeek", "calcSpentBudget"]),
  },
  filters: {
    removeMinus(value) {
      return value.toString().slice(1);
    },
  },
  mounted() {
    this.calcSpentThisWeek();
    this.calcSpentBudget();
    this.tweenedNumber = this.availableBudget;
  },
};
</script>

<style lang="scss">
//card's container
.cards {
  overflow-x: scroll;
  display: flex;
  padding-top: 1.4rem;
  box-sizing: border-box;
}

//disable display of scroll for cards
.cards::-webkit-scrollbar {
  display: none;
}

.card-1 {
  position: relative;
  margin-left: 2rem;
}
.card-2 {
  position: relative;
  margin-left: 1rem;
}
.card-3 {
  position: relative;
}

.card-1 img {
  width: 80vw;
  max-width: 300px;
}

.card-2 img {
  width: 80vw;
  max-width: 300px;
  //margin-right: 2rem;
}

.card-3 img {
  width: 80vw;
  max-width: 300px;
  margin-right: 2rem;
  margin-left: 1rem;
}

//container inside of cards
.card-content {
  line-height: 10vw;
  color: $for-white;
  font-size: 8vw;
  font-weight: 700;
  padding-left: 8vw;
  position: absolute;
  top: 0%;
  padding-top: 7vw;
  //margin-right: 55px;
}

.avaliable-money {
  font-weight: 300;
}

//styling progress bar
.q-linear-progress {
  border-radius: 9px;
}

.bar {
  margin-top: 3vw;
  width: 63vw;
  max-width: 233px;
}

.spent-limit {
  font-weight: 700;
  font-size: 3.2vw;
}

.week-analitycs {
  display: inline-block;

  font-weight: 700;
  font-size: 3.2vw;
  line-height: 4vw;
  margin-top: 2vw;

  width: 63vw;
  max-width: 233px;
}

//fixing how cards look for displays more than 372px width
@media screen and (min-width: 372px) {
  .card-content {
    font-size: 33px;
    line-height: 37px;
    padding-top: 26px;
    padding-left: 30px;
    margin-right: 60px;
  }

  .week-analitycs {
    font-size: 12px;
    line-height: 15px;
    margin-top: 9px;
  }

  .spent-limit {
    font-size: 12px;
  }

  .bar {
    margin-top: 15px;
  }
}

.recent {
  font-size: 2rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-top: -1rem;
}

.month {
  font-weight: 700;
  color: $secondary;
  font-size: 0.75rem;
}

.date-container {
  display: flex;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: 0.4rem;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 600px;
}

.date-2-month {
  font-size: 0.55rem;
  color: $secondary;
}

.total {
  font-size: 0.75rem;
  font-weight: 700;
  padding-right: 1rem;
}

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