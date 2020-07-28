<template>
  <div class="purchase">

      <div class="purchase-tag">
        <!-- <img src="../../statics/tag1.png" alt=""> -->
        <!-- {{ expense.category }} -->
        <div
          class="tag-object-round-big"
          v-if="expense.category != ''"
          :style="{background: categories[expense.category].categoryStyle.background}">
          <div
            class="tag-object-round"
            v-if="expense.category != ''"
            :style="{background: categories[expense.category].categoryStyle.color}">
          </div>
        </div>
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
      
      <q-dialog v-model="showExpenseMore">
        <expense-more
          @close="showExpenseMore = false"
          :expense = "expense"
          :id = "id"
          :date = "date"/>
      </q-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['expense', 'id','date'],
  data() {
    return {
      showExpenseMore: false,
    }
  },
  computed: {
    ...mapGetters('categories', ['categories'])
  },
  components: {
    'expense-more': require('components/modals/ExpenseMore.vue').default,
  }
}
</script>

<style>

</style>