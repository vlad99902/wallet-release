<template>
  <q-page>

    <div class="settings-header">

      <span class="back-btn control-button" @click="$router.replace('/settings/budget')">Cancel</span>

      <div class="settings-header-title">
        Budget amount
      </div>

      <span
        class="back-btn-2 control-button"
        :class="!doneActive ? 'not-active' : ''"
        @click="$router.replace('/settings/budget')">Done</span>
    </div>

    
    

    <div class="settings-small">
      Enter amount of money you're planning to spend during selected period.
    </div>

    <div class="input-budget-container">
      <input
        type="number"
        class="input-budget"
        placeholder="Budget amount">
    </div>


  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      doneActive: false
    }
  },
  computed: {
  },
  methods: {
  }

}
</script>

<style lang="scss" >

.control-button {
  font-size: 1rem;
  font-weight: 400;
  color: #5D8BCC;
}

.dark .control-button {
  color: $for-white;
}

.not-active {
  color: #B8D2F1;
}

.dark .not-active {
  color: $secondary;
}

.input-budget-container {
  box-sizing: border-box;
  display: flex;
  //width: 100vw;
  padding: 0rem 2rem;
}

.input-budget {
  background: $for-white;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 4px;

  width: 100vw;
  height: 2.7rem;
  padding: 0.6rem 0.875rem;

  font-size: 1rem;
  font-weight: 500;
  color: $primary;

  &::placeholder {
    color: $secondary;
    font-weight: 500;
  }
}

.dark .input-budget {
  background: $for-white-dark;
  color: $primary-dark;
}

.input-budget:focus {
  outline: none !important;
}

</style>