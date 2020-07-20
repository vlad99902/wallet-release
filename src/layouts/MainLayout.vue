<template>
  <q-layout view="lHh Lpr lFf">
    

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer>
    <q-tabs
        v-model="tab"
        class="text-black bottom-nav-bar"
        active-color="white"
      >
        <q-route-tab name="home" icon="home" label=" " to="/" />
        <q-tab name="recent" icon="alarm" label=" " />
        <q-tab name="add" icon="add" label=" " @click="setShowAddExpense()" />
        <q-tab name="analitycs" icon="movie" label=" " />
        <q-route-tab name="settings" icon="settings" label=" " to="/settings" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

    

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapActions } from "vuex";

export default {
  name: 'MainLayout',
  data() {
     return {
        showAddExpense: false
     }
  },

  components: {
    EssentialLink
  },
  methods: {
    ...mapActions('settings', ['setShowAddExpense'])
  },

  data () {
    return {
      tab: 'mail',
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .bottom-nav-bar {
    background: $for-white;
    transition: background .5s ease-in-out;
  }

  .dark .bottom-nav-bar {
    background: $for-white-dark-bar;
  }

  .q-tab__icon {
    color: $secondary;
  }
</style>