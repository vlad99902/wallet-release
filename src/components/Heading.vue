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

<style lang="scss">

//today's date
.date {
  //font-size: 1.4rem;
  font-size: 1.2rem;
  padding-left: 2rem;
  font-weight: 300;
}

</style>