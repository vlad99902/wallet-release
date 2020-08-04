<template>
  <div class="month-container">
    <div class="date-container">
      <div class="month" v-if="date === this.id">Today</div>

      <div class="month" v-else-if="yesterdayDate == this.id">Yesterday</div>

      <div class="month" v-else>{{ id | niceDate }}</div>

      <div class="total">TOTAL: ${{ months.total | niceTotal }}</div>
    </div>

    <transition-group name="one-expense-complete">
      <one-expense
        v-for="(expense, key) in orderedExpenses"
        :key="key"
        :id="key"
        :date="id"
        :expense="expense"
        class="one-expense-complete-item"
      ></one-expense>
    </transition-group>
  </div>
</template>

<script>
import { date } from "quasar";

export default {
  data() {
    return {
      date: date.formatDate(Date.now(), "YYYY-MM-DD"),
      yesterdayDate: date.formatDate(
        date.subtractFromDate(Date.now(), { hours: 24 }),
        "YYYY-MM-DD"
      ),
    };
  },
  props: ["months", "id"],
  filters: {
    niceDate(value) {
      return date.formatDate(value, "ddd, MMMM D");
    },
    niceTotal(value) {
      return Math.round(parseFloat(value) * 100) / 100;
    },
  },
  computed: {
    orderedExpenses: function () {
      let expensesSorted = {},
        keysOrdered = Object.keys(this.months.purchases);

      keysOrdered.sort((a, b) => {
        let taskAProp = parseInt(this.months.purchases[a].count),
          taskBProp = parseInt(this.months.purchases[b].count);

        if (taskAProp > taskBProp) return -1;
        else if (taskAProp < taskBProp) return 1;
        else return 0;
      });

      keysOrdered.forEach((key) => {
        expensesSorted[key] = this.months.purchases[key];
      });

      return expensesSorted;
    },
  },
  components: {
    "one-expense": require("components/OneExpense.vue").default,
  },
};
</script>

<style lang="scss">
.month-container {
  padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
}

//for animation
.one-expense-complete-item {
  transition: all 0.5s;
  opacity: 1;
  display: inline-block;
  //margin-right: 10px;
}
.one-expense-complete-enter, .one-expense-complete-leave-to 
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-60px);
}


.one-expense-complete-leave-active {
  position: absolute;
  // opacity: 0;
  // transform: translateX(-60px);
}

</style>