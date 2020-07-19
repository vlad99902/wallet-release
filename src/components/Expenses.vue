<template>
  <div>
    <div class="date-container">

      <div class="month">
        {{ id | niceDate }}
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
        {{ expense.name }}
      </div>

      <div class = "purchase-sum"> 
        ${{ expense.cost }}
      </div>

      <div class="purchase-more row">
        More
        <img src="../assets/more.svg">
      </div>

    </div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  props: ['months', 'id'],
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM, D')
    }
  }
}
</script>

<style>

</style>