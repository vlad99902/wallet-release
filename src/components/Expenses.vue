<template>
  <div>
    <div class="date-container">

      <div class="month">
        {{ id | niceDate }}
      </div>

      <div class="total">
        TOTAL: ${{ months.total | niceTotal }}
      </div>

    </div>

    <div
      class="purchase"
      v-for="(expense, key) in orderedExpenses"
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

      <div 
        class="purchase-more row"
        @click.stop="showExpenseMore = true">
        More
        <img src="../assets/more.svg">
      </div>
      
      <!-- more on clicl dialog -->

      <q-dialog v-model="showExpenseMore">
        <expense-more
          @close="showExpenseMore = false"
          :expense = "expense"
          :id = "key"
          />
      </q-dialog>

    </div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data() {
    return {
      showExpenseMore: false
    }
  },
  props: ['months', 'id'],
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM, D')
    },
    niceTotal(value) {
      return Math.round(parseFloat(value)*100)/100
    }
  }, 
  computed: {
    orderedExpenses: function () {

      let expensesSorted = {},
        keysOrdered = Object.keys(this.months.purchases)

      keysOrdered.sort((a,b) => {
        let taskAProp = parseInt(this.months.purchases[a].count), 
      taskBProp = parseInt(this.months.purchases[b].count)

        if (taskAProp > taskBProp) return -1
        else if (taskAProp < taskBProp) return 1
        else return 0
      })

      keysOrdered.forEach ((key) => {
        expensesSorted[key] = this.months.purchases[key]
      })

      return expensesSorted
    }
  },
  components: {
    'expense-more': require('components/modals/ExpenseMore.vue').default
  }
}
</script>

<style>

</style>