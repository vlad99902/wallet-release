<template>
  <q-page>
    <div class="settings-header">
      <img src="../assets/back.svg" class="back-btn" alt @click="$router.replace('/settings')" />

      <div class="settings-header-title">Dark Mode</div>

      <!-- not visible image, made for proper layout -->
      <img src="../assets/back.svg" class="back-btn-pseudo" alt />
    </div>

    <div class="settings-strong">
      User System Mode
      <q-space></q-space>
      <label class="form-switch">
        <input type="checkbox" v-model="userSystemMode" />
        <i></i>
      </label>
    </div>

    <div
      class="settings-small"
    >This app’s appearance will change automatically when you enable or disable iOS dark mode.</div>

    <div v-if="!userSystemMode">
      <div class="settings-strong">
        Automatic mode
        <q-space></q-space>
        <label class="form-switch">
          <input type="checkbox" v-model="automaticMode" />
          <i></i>
        </label>
      </div>

      <div
        class="settings-small"
      >This app’s appearance will change automatically when you enable or disable iOS dark mode.</div>

      <div class="settings-strong">Modes</div>

      <div class="line" @click="setShowDarkMode(false)">
        Light
        <q-space></q-space>
        <img src="../assets/tick.svg" alt v-if="!showDarkMode" />
      </div>
      <div class="line" @click="setShowDarkMode(true)">
        Dark
        <q-space></q-space>
        <img src="../assets/tick.svg" alt v-if="showDarkMode" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      userSystemMode: false,
      automaticMode: false,
      //modeSelected: 'light'
    };
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
    showDarkMode: {
      get() {
        return this.settings.showDarkMode;
      },
      set(value) {
        this.setShowDarkMode(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", ["setShowDarkMode"]),
  },
};
</script>

<style lang="scss">
</style>