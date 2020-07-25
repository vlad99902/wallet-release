<template>
  <q-card>
    <form @submit.prevent="submitForm" novalidate>
      <q-card-section>
        <div class="container">
          <div class="header-container">

            <div class="header-name">
              {{expense.name}}
            </div>

            <div class="header-tag">
              tag
            </div>

            <div class="header-cost">
              ${{expense.cost}}
            </div>

            <div class="header-date">
              {{date}}
            </div>

          </div>

          <div class="description">
            {{expense.description}}
          </div>

          <button>
            delete
          </button>

          <button>
            edit
          </button>
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

.container {
  padding-left: 1rem;
  padding-right: 1rem;

 // padding-bottom: 0.8rem;
}

.header-container {
  display: grid;
  grid-template-columns: 60% 20% 20%;
  justify-items: center;
  align-items: center;

  margin-bottom: 0.8rem;
}

.header-name {
  font-weight: 600;

  grid-row: 1 / 2;
  grid-column: 1 / 3;

  justify-self: start;
  align-self: start;

  margin-bottom: 0.2rem;
}

.header-tag {
  grid-column: 2 / 4;
  grid-row: 1 / 2;

  justify-self: end;
  align-self: start;
  
}

.header-cost {
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  justify-self: start;
  align-self: end;

  font-weight: 300;
  font-size: 1.1rem;
}

.header-date {
  grid-column: 2 / 4;
  grid-row: 2 / 3;

  justify-self: end;
  align-self: end;

  font-size: 0.9rem;
  font-weight: 400;
}

.description {
  margin-bottom: 1.2rem;
}


</style>