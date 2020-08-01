<template>
  <q-page>

    <heading />

    <cards />

    <!-- vlad -->
    <div class="recent">
      Recent
    </div>

<!-- all of purchases -->
    <div class="purchase-container" v-if="Object.keys(this.expenses).length">

      <div class="img-no-expenses" v-if="!todayExpenses">
        No expenses today! <br> Press “+” button to add new ones!
        <img src="../assets/no-expenses-today.svg">
      </div>

      <expenses
        v-for="(months, key) in expenses"
        :key="key"
        :months="months"
        :id="key" />
    </div>


<!-- image if no expenses at all -->
    <div class="no-expenses" v-else>
      <img src="../assets/no-expenses.svg" width="60%">
      
      <div class="no-expenses-title">
        Add your first expense by repssing "+" button below!
      </div>

    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'PageIndex',
  data() {
    return {
      progress: 0.4 //progress of progress bar
    }
  },
  computed: {
    ...mapGetters('expenses', ['expenses', 'todayExpenses']) //getter for all expenses from store-expenses
  },
  components: {
    'cards' : require('components/Cards.vue').default,
    'heading' : require('components/Heading.vue').default,
    'expenses' : require('components/Expenses.vue').default,
  },
  methods: {
    ...mapActions('expenses', ['checkTodayExpenses'])
  },
  mounted() {
    this.checkTodayExpenses()
  }
}
</script>

<style lang="scss">

//main heading of the page
.heading {
  //font-size: 3.375rem;
  font-size: 3rem;
  font-weight: 700;
  padding-left: 2rem;
}

//toda's date
.date {
  //font-size: 1.4rem;
  font-size: 1.2rem;
  padding-left: 2rem;
  font-weight: 300;
}

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

.card-3:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
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
  font-size: .75rem;
  font-weight: 700;
  padding-right: 1rem;;
}

//vlad
//one of element in recent 

.purchase-container {
  max-width: 600px;
  padding-bottom: 6rem;
}

.purchase {
  display: grid;
  grid-template-columns: 10% 60% 30%;
  
  grid-gap: .1rem;

  margin: 0.6rem 2rem;
  padding: 3vw;
  border-radius: 0.7rem;
  background-color: $for-white;
  box-shadow: 0 0.2rem 1.2rem -0.2rem rgba(0,0,0,.1);
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

  padding-top: .15rem;
}

//purcahse tag recent only img
.purchase-tag img {
  width: 1.2rem;
  height: 1.2rem;
}

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
    vertical-align:middle;
    //padding-left: .1rem;
    width: .58rem
  }
}

.img-no-expenses {
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: right;
  font-size: .75rem;

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

////////////////////////////
//tags (categories) style (in recent)
////////////////////////////

.tag-object-round {
  border-radius: 50%;

  width: 10px;
  height: 10px;
}

.tag-object-round-big {
  border-radius: 50%;

  width: 20px;
  height: 20px;

  padding: 5px;

  display: inline-block;
}

//////////////////////////////
//tag object style more and add
////////////////////////////

.tag-object {
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  border-radius: 100px;

  font-size: 1.7vh;

  //font-size: 0.8rem;
  font-weight: 400;

  display: inline-block;

  border: none;
  outline: none !important;
}

.tag-object-round-add {
  border-radius: 50%;
  background: #fff;

  width: 9px;
  height: 9px;

  display: inline-block;
  
  margin-right: 0.3rem;
}


</style>