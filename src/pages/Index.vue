<template>
  <q-page>
    <div class="heading">Overview</div>
    <div class="date">Sunday, 28 September</div>

    <div class="cards">
      <div class="card-1">
        <img src="../../statics/card1.png" alt=""> 
        <div class="card-content">

          <span>
            Avaliable   <br>
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
        <img src="../../statics/card2.png" alt="">
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

    <!-- vlad -->

    <div class="recent">
      Recent
    </div>

    <div class="date-container">
      <div class="month">
      SEPT, 29
      </div>
      <div class="total">
        TOTAL: $12.43
      </div>
    </div>

<!-- all of purchases -->
    <div class="purchase-container">

<!-- purchase 1 -->

      <div class="purchase">
        <div class="purchase-tag">
          <img src="../../statics/tag1.png" alt="">
        </div>

        <div class="purchase-name">
          <span>Buy milk</span>
        </div>

        <div class = "purchase-sum"> 
          <span>$500</span>
        </div>

        <div class="purchase-more">
          <span>More</span>
        </div>
      </div>

<!-- purchase 2 -->

      <div class="purchase">

        <div class="purchase-tag">
          <img src="../../statics/tag1.png" alt="">
        </div>

        <div class="purchase-name">
          <span>Buy milk when you drink a lot of beer and check the awesome work of flexboxes</span>
        </div>

        <div class = "purchase-sum"> 
          <span>$500</span>
        </div>

        <div class="purchase-more">
          <span>More</span>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
     return {
        progress: 0.4 //progress of progress bar
     }
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
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  grid-gap: .1rem;

  margin: 0.6rem 2rem;
  //padding: 0.65rem;
  padding: 1rem;
  border-radius: 0.7rem;
  background-color: $for-white;
  box-shadow: 0 0.2rem 1.2rem -0.2rem rgba(0,0,0,.1);
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

  color: $secondary;
  font-size: 0.6rem;
  font-weight: 700;
}

</style>