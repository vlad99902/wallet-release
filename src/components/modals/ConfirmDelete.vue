<template>
  <q-card>
    <div>
      <q-card-section>
        <div class="container">
          
          <div class="header-container">
            <div class="header-title">
              Do you want to delete: <strong>{{ expense.name }}</strong>?
            </div>
          </div>

          <div class="buttons-container">
            <!-- delete button -->
            <button 
              class="button-delete"
              @click.stop="promtToDeleteExpense()">
              delete
            </button>

          </div>
          
        </div>
        
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { date } from "quasar";

export default {
  props: ['expense','id','date'],
  data() {
    return {
      moreExpense: {
      },
      dataToDelete: {
        date: "",
        id: ""
      }
    }
  },
  methods: {
    ...mapActions('expenses', ['deleteExpense']),
    ...mapActions('settings', ['setShowBlur']),

    promtToDeleteExpense() {
      
      //save data about expense to delete in object to push it
      this.dataToDelete.date = this.date;
      this.dataToDelete.id = this.id;

      this.deleteExpense(this.dataToDelete)
    }
    
  },

  mounted (){
    this.moreExpense = Object.assign({}, this.expense)
    // this.setShowBlur()
  },
  destroyed() {
    // this.setShowBlur()
  }
}
</script>

<style lang="scss"> 
.header-title {
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: start;
  align-self: start;

  font-weight: 400;
}
</style>