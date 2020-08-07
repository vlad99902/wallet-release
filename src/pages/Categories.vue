<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">Categories</div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo" alt />
    </div>

    <div class="line" @click="$router.replace('categories/create-category')">
      Create new category
      <q-space></q-space>
      <img src="../assets/next.svg" alt />
    </div>

    <div class="categories-container">
      <one-category
        v-for="(category, key) in categories"
        :key="key"
        :id="key"
        :category="category"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    "one-category": require("components/OneCategory.vue").default,
  },
  computed: {
    ...mapGetters("categories", ["categories"]),
  },
};
</script>

<style lang="scss">
.categories-container {
  margin: 0.75rem 2rem;
  background-color: $for-white;
  border-radius: 12px;
  margin-bottom: 6rem;
}

.dark .categories-container {
  background-color: $for-white-dark;
}

.category-line {
  display: grid;
  grid-template-columns: 15% 55% 30%;
}

.category-line:first-child {
  border-radius: 12px 12px 0 0;
}

.category-line:last-child {
  border-radius: 0 0 12px 12px;
}

.category-line:active {
  background-color: #e5e5ea;
}

.category-line:last-child {
  .category-bottom-line {
    border-bottom: 0px solid;
  }
}

.category-bottom-line {
  grid-row: 3/4;
  grid-column: 2/4;

  border-bottom: 1px solid #dbdbdb;

  padding: 0 0 0.75rem 0;
}

.dark .category-bottom-line {
  border-bottom: 1px solid $secondary-dark;
}

.category-tag {
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 1/2;

  padding-top: 1.15rem;
  padding-left: 0.75rem;
}

.category-name {
  justify-self: left;
  align-self: start;

  grid-row: 1/3;
  grid-column: 2/3;
  margin-right: 2rem;

  font-weight: 400;

  padding-top: 1rem;
}

//
.category-tick {
  grid-row: 1/3;
  grid-column: 3/4;

  justify-self: right;
  align-self: start;
  padding-right: 1rem;
  padding-top: 1.25rem;
}

.tag-object-round {
  border-radius: 50%;

  width: 10px;
  height: 10px;
}

.tag-object-round-big {
  border-radius: 50%;

  width: 20px;
  height: 20px;

  padding: 5px;

  display: inline-block;
}
</style>