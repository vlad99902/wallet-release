<template>
  <div class="purchase" @click.stop="showExpenseMore = true">
    <div class="purchase-tag">
      <!-- expense category -->
      <div class="expense-tag-left"
        :style="{ background: categories[expense.category].categoryStyle.background }">
      </div>
      <!-- <div
        class="tag-object-round-big"
        :style="{ background: categories[expense.category].categoryStyle.background }"
      >
        <div
          class="tag-object-round"
          :style="{ background: categories[expense.category].categoryStyle.color }"
        ></div>
      </div> -->
    </div>

    <div class="purchase-name">{{ expense.name }}</div>

    <div class="purchase-sum">${{ expense.cost }}</div>

    <div class="purchase-more row">
      More
      <img src="../assets/more.svg" />
    </div>

    <q-dialog v-model="showExpenseMore">
      <expense-more @close="showExpenseMore = false" :expense="expense" :id="id" :date="date" />
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["expense", "id", "date"],
  data() {
    return {
      showExpenseMore: false,
    };
  },
  computed: {
    ...mapGetters("categories", ["categories"]),
  },
  components: {
    "expense-more": require("components/modals/ExpenseMore.vue").default,
  },
};
</script>

<style>
/* for new expense show in the left side of expense block */
.expense-tag-left {
  position: absolute;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  left: 0rem;
  top: 0;
  bottom: 0;
  
  width: 1.5rem;
}
</style>