<template>
  <div class="purchase">
        <div class="purchase-tag">
          <img src="../../statics/tag1.png" alt="">
        </div>

        <div class="purchase-name">
          <span>{{expense.name}}</span>
        </div>

        <div class = "purchase-sum"> 
          <span>${{expense.cost}}</span>
        </div>

        <div class="purchase-more row">
          <span>More</span>
          <img src="../assets/more.svg">
        </div>
      </div>
</template>

<script>
export default {
  props: ['expense', 'id']

}
</script>

<style>

</style>