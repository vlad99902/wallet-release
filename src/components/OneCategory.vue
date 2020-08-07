<template>
  <div class="category-line" v-if="category.name !== 'NOT_USED'" @click="handleCategorySelect()">
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
import { mapActions } from "vuex";

export default {
  props: ["category", "id"],
  methods: {
    ...mapActions("settings", ["setEditedCategory"]),
    handleCategorySelect() {
      this.setEditedCategory(this.id)
      this.$router.replace('categories/edit-category')
    },
  },
};
</script>

<style>
</style>