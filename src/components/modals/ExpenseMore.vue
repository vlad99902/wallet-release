<template>
  <q-card>
    <form @submit.prevent="submitForm" novalidate>
      <q-card-section>
        <div class="container">
          <div class="header">
            <p>
              {{expense.name}}
            </p>
          </div>
        </div>
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['expense','id','date'],
  data() {
    return {
      moreExpense: {
      }
    }
  },
  methods: {
    ...mapActions('expenses', ['addExpense']),
    submitForm() {
      this.submitExpense()
      this.$emit('close')
    },
    submitExpense() {
      this.addExpense(this.expenseToSubmit)
    }
    
  },
  mounted () {
    this.moreExpense = Object.assign({}, this.expense)
  }
}
</script>

<style lang="scss">

///////////////////////////
//CONTAINERS AND OTHER
///////////////////////////

.container{
  padding: 1rem;
}

</style>