<template>
  <q-page>
    <heading />

    <cards />

    <!-- vlad -->
    <div class="recent">Recent</div>

    <!-- all of purchases -->
    <div class="purchase-container" v-if="Object.keys(this.expenses).length">
      <transition-group name="expense-complete" key="ing2">
        <div class="img-no-expenses expense-complete-item" v-if="!todayExpenses" key="img">
          No expenses today!
          <br />Press “+” button to add new ones!
          <img src="../assets/no-expenses-today.svg" />
        </div>

        <expenses
          v-for="(months, key) in expenses"
          :key="key"
          :months="months"
          :id="key"
          class="expense-complete-item"
        />
      </transition-group>
    </div>

    <!-- image if no expenses at all -->
    <div class="no-expenses" v-else>
      <img src="../assets/no-expenses.svg" width="60%" />

      <div class="no-expenses-title">Add your first expense by repssing "+" button below!</div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      progress: 0.4, //progress of progress bar
    };
  },
  computed: {
    ...mapGetters("expenses", ["expenses", "todayExpenses"]), //getter for all expenses from store-expenses
  },
  components: {
    cards: require("components/Cards.vue").default,
    heading: require("components/Heading.vue").default,
    expenses: require("components/Expenses.vue").default,
  },
  methods: {
    ...mapActions("expenses", ["checkTodayExpenses"]),
  },
  mounted() {
    this.checkTodayExpenses();
  },
};
</script>

<style lang="scss">
//vlad
//one of element in recent

.purchase-container {
  max-width: 600px;
  padding-bottom: 6rem;
}

.purchase {
  display: grid;
  position: relative;
  grid-template-columns: 10% 60% 30%;

  grid-gap: 0.1rem;

  margin: 0.6rem 2rem;
  padding: 3vw;
  border-radius: 12px;
  background-color: $for-white;
  box-shadow: 0 0.2rem 1.2rem -0.2rem rgba(0, 0, 0, 0.1);
}

.dark .purchase {
  background-color: $for-white-dark;
}

@media screen and (min-width: 600px) {
  .purchase {
    padding: 18px;
  }
}

//tag in recent purchase
.purchase-tag {
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 1/2;

  padding-top: 0.15rem;
}

//purcahse tag recent only img
// .purchase-tag img {
//   width: 1.2rem;
//   height: 1.2rem;
// }

//
.purchase-name {
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 2/3;
  margin-right: 2rem;

  font-weight: 400;
}

//
.purchase-sum {
  grid-row: 1/2;
  grid-column: 3/4;

  justify-self: right;
  align-self: start;
  padding-right: 1rem;

  font-weight: 300;
}

//
.purchase-more {
  grid-row: 2/3;
  grid-column: 3/4;

  justify-self: right;
  align-self: end;
  padding-right: 1rem;
  text-align: center;

  color: $secondary;
  font-size: 0.6rem;
  font-weight: 700;

  img {
    vertical-align: middle;
    //padding-left: .1rem;
    width: 0.58rem;
  }
}

.img-no-expenses {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: right;
  font-size: 0.75rem;

  img {
    margin-left: 1rem;
  }

  margin-bottom: 2rem;
  margin-top: 1rem;
}

.no-expenses {
  display: flex;

  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
  padding-bottom: 6rem;

  img {
    margin-bottom: 1rem;
  }
}

.no-expenses-title {
  width: 60%;
  text-align: center;
}


//for animation
.expense-complete-item {
  transition: all 0.5s;
  opacity: 1;
}
.expense-complete-enter {
  opacity: 0;
  transform: translateX(-60px);
}

.expense-complete-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}

.expense-complete-leave-active {
  position: absolute;
}
</style>