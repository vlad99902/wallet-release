<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">Categories</div>

      <button class="back-btn-2 control-button">Edit</button>
    </div>

    <div class="line">
      Create new category
      <q-space></q-space>
      <img src="../assets/next.svg" alt />
    </div>

    <div class="categories-container">
      <div class="category-line">
        <div class="category-tag">
          <div class="tag-object-round-big" :style="{ background: '#D2D1FF' }">
            <div class="tag-object-round" :style="{ background: '#5756D5' }"></div>
          </div>
        </div>

        <div class="category-name">Alcohol</div>

        <div class="category-tick">
          <img src="../assets/next.svg" alt />
        </div>

        <div class="category-bottom-line"></div>
      </div>

      <div class="category-line">
        <div class="category-tag">
          <div class="tag-object-round-big" :style="{ background: '#D2D1FF' }">
            <div class="tag-object-round" :style="{ background: '#5756D5' }"></div>
          </div>
        </div>

        <div class="category-name">Beer</div>

        <div class="category-tick">
          <img src="../assets/next.svg" alt />
        </div>

        <div class="category-bottom-line"></div>
      </div>

      <div class="category-line">
        <div class="category-tag">
          <div class="tag-object-round-big" :style="{ background: '#D2D1FF' }">
            <div class="tag-object-round" :style="{ background: '#5756D5' }"></div>
          </div>
        </div>

        <div class="category-name">Vodka</div>

        <div class="category-tick">
          <img src="../assets/next.svg" alt />
        </div>

        <div class="category-bottom-line"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.categories-container {
  margin: 0.75rem 2rem;
  //height: 300px;
  background-color: $for-white;
  border-radius: 12px;

  //grid-gap: 0.1rem;
}

.category-line {
  display: grid;
  grid-template-columns: 15% 55% 30%;
  //padding: 0.75rem 0;
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