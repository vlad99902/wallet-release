<template>
  <q-card>
    <form @submit.prevent="submitForm" novalidate>
      <q-card-section>
        <!-- for test -->
        <p>
          name: {{moreExpense.name}}
        </p>
        <p>
          expense: {{moreExpense}}
        </p>
        <p>
          
        </p>
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ['expense','id'],
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



</style>