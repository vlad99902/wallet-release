<template>
  <q-page>
    <div class="heading">Overview</div>
    <div class="date">Sunday, 28 September</div>

    <div class="cards">
      <div class="card-1">
        <img src="../../statics/card1.png" alt=""> 
        <div class="card-content">
          <span>
            Avaliable <br>
          </span>
          <span class="avaliable-money">
            $564.4
          </span>
        </div>
      </div>
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
      SEPTEMBER, 29
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
          <span>Buy milk when you drink a lot of beer</span>
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
  name: 'PageIndex'
}
</script>

<style lang="scss">

.heading {
  font-size: 3.375rem;
  font-weight: 700;
  padding-left: 2rem;
}

.date {
  font-size: 1.4rem;
  padding-left: 2rem;
  font-weight: 300;
}

.cards {
  overflow-x: scroll;
  display: flex;
  height: 16.5rem;
  padding-top: 1.4rem;
}

.cards::-webkit-scrollbar {
  display: none;
}

.card-1 img {
  width: 20rem;
  height: 15rem;
}

.card-1 {
  position: relative;
  margin-left: 2rem;
}
.card-2 {
  position: relative;
  margin-left: 1rem;
}

.card-2 img {
  width: 20rem;
  height: 15rem;
  margin-right: 2rem;
}

.card-content {
  line-height: 2.3rem;
  color: $for-white;
  font-size: 2rem;
  font-weight: 700;
  padding-left: 2rem;
  position: absolute;
  top: 0%;
  padding-top: 1.8rem;
  margin-right: 2rem;
}

.avaliable-money {
  font-weight: 300;
}

.week-analitycs {
  font-weight: 700;
  font-size: .875rem;
  line-height: 1.4rem;
  padding-top: 1rem;
}

.recent {
  font-size: 2rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-top: -1rem;
}

.month {
  font-weight: 700;
  padding-left: 1rem;
  color: $secondary;
  font-size: 0.875rem;
}

.date-container {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.4rem;
  align-items: flex-end;
  justify-content: space-between;
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
.purchase {
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-items: center;
  grid-gap: .1rem;

  margin: 0.6rem 2rem;
  padding: 0.65rem;
  border-radius: 0.7rem;
  background-color: $for-white;
  box-shadow: 0 0.2rem 1.2rem -0.2rem rgba(0,0,0,.1);
}

//tag in recent purchase
.purchase-tag{
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 1/2;
}

//
.purchase-name{
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 2/3;

  font-weight: 600;
}

//
.purchase-sum{
  grid-row: 1/2;
  grid-column: 3/4;

  justify-self: left;
  align-self: start;

  font-weight: 300;
}

//
.purchase-more{
  grid-row: 2/3;
  grid-column: 3/4;

  justify-self: left;
  align-self: start;

  color: $secondary;
  font-size: 0.6rem;
  font-weight: 600;
}

//purcahse tag recent only img
.purchase-tag img{
  width: 1.2rem;
  height: 1.2rem;
}
</style>