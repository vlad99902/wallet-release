<template>
  <!-- <div class="purchase">
        <div class="purchase-tag">
          <img src="../../statics/tag1.png" alt="">
        </div>

        <div class="purchase-name">
          <span>{{expense.name}}</span>
        </div>

        <div class = "purchase-sum"> 
          <span>${{expense.cost}}</span>
        </div>

        <div class="purchase-more row">
          <span>More</span>
          <img src="../assets/more.svg">
        </div>
      </div> -->
  <div>
    <div class="date-container">

      <div class="month">
        {{ id }}
      </div>

      <div class="total">
        TOTAL: ${{ months.total }}
      </div>

    </div>

    <div
      class="purchase"
      v-for="(expense, key) in months.purchases"
      :key="key">

      <div class="purchase-tag">
        <img src="../../statics/tag1.png" alt="">
      </div>

      <div class="purchase-name">
        <span>{{expense.name}}</span>
      </div>

      <div class = "purchase-sum"> 
        <span>${{expense.cost}}</span>
      </div>

      <div class="purchase-more row">
        <span>More</span>
        <img src="../assets/more.svg">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['months', 'id']

}
</script>

<style>

</style>