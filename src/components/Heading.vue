<template>
  <div>
    <div class="heading">Overview</div>
    <div class="date">{{ date }}</div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  data() {
    return {
      date: date.formatDate(Date.now(), 'dddd, MMMM D')
    }
  }
}
</script>

<style>

</style>