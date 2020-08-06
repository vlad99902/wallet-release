<template>
  <div class="category-line">
    <div class="category-tag">
      <div class="tag-object-round-big" :style="{ background: category.categoryStyle.background }">
        <div class="tag-object-round" :style="{ background: category.categoryStyle.color }"></div>
      </div>
    </div>

    <div class="category-name">{{ category.name }}</div>

    <div class="category-tick">
      <img src="../assets/next.svg" alt />
    </div>

    <div class="category-bottom-line"></div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style>
</style>