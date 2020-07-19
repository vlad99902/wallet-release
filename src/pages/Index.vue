<template>
  <q-page>

    <heading />

    <cards :progress="progress" />

    <!-- vlad -->

    <div class="recent">
      Recent
    </div>

    

<!-- all of purchases -->
    <div class="purchase-container">
      <expenses
        v-for="(months, key) in expenses"
        :key="key"
        :months="months"
        :id="key" />
    </div>

  </q-page>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'PageIndex',
  data() {
     return {
        progress: 0.4 //progress of progress bar
     }
  },
  computed: {
    ...mapGetters('expenses', ['expenses']) //getter for all expenses from store-expenses
  },
  components: {
    'cards' : require('components/Cards.vue').default,
    'heading' : require('components/Heading.vue').default,
    'expenses' : require('components/Expenses.vue').default,
  }
}
</script>

<style lang="scss">

//main heading of the page
.heading {
  font-size: 3.375rem;
  font-weight: 700;
  padding-left: 2rem;
}

//toda's date
.date {
  font-size: 1.4rem;
  padding-left: 2rem;
  font-weight: 300;
}

//card's container
.cards {
  overflow-x: scroll;
  display: flex;
  padding-top: 1.4rem;
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

.card-1 img {
  width: 80vw;
  max-width: 300px;

}

.card-2 img {
  width: 80vw;
  max-width: 300px;
  margin-right: 2rem;
}

//container inside of cards
.card-content {
  line-height: 10vw;
  color: $for-white;
  font-size: 9vw;
  font-weight: 700;
  padding-left: 8vw;
  position: absolute;
  top: 0%;
  padding-top: 7vw;
  margin-right: 55px;
}

.avaliable-money {
  font-weight: 300;
}

//styling progress bar
.q-linear-progress {
  border-radius: 9px;
}

.q-linear-progress__model--determinate {
  border-radius: 18px;
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
  font-weight: 700;
  font-size: 3.2vw;
  line-height: 4vw;
  margin-top: 2vw;
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



</style>