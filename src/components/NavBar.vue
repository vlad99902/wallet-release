<template>
  <div class="main-nav-bar">
      <!-- home button -->
      {{ title }}
      <div
        class="nav-button"
        :class="tab == '/' ? 'active-button-home' : ''"
        @click="handleHomeButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path class="path-2" d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="#A6A5AA"/></svg>
      </div>
      
      <!-- recent button -->
      <div
        class="nav-button"
        :class="tab == '/recent' ? 'active-button' : ''"
        @click="handleRecentButton">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.4301 16.4301 20 12 20C7.56988 20 4 16.4301 4 12C4 7.56988 7.56988 4 12 4ZM11 6V12.4141L15.293 16.707L16.707 15.293L13 11.5859V6H11Z" fill="#A6A5AA"/>
          </svg>

      </div>

      <!-- add button -->
      <div class="add-button" @click="handleAddButton">
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M14.3873 14.3874C9.0877 19.687 9.0877 28.2544 14.3873 33.554C19.6869 38.8536 28.2544 38.8536 33.5539 33.554C38.8535 28.2544 38.8535 19.687 33.5539 14.3874C28.2544 9.0878 19.6869 9.0878 14.3873 14.3874ZM32.2027 22.6195V25.322L25.3219 25.322V32.2028L22.6194 32.2028V25.322L15.7385 25.322V22.6195L22.6194 22.6195V15.7386L25.3219 15.7386V22.6195L32.2027 22.6195Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear" x1="14.3873" y1="14.3874" x2="33.5539" y2="33.554" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F5AFF7"/>
          <stop offset="1" stop-color="#FCD17F"/>
          </linearGradient>
          <clipPath id="clip0">
          <rect width="32.5269" height="32.5269" fill="white" transform="translate(0.970703 23.9707) rotate(-45)"/>
          </clipPath>
          </defs>
          </svg>
      </div>
      
      <!-- analitycs button -->
      <div 
        class="nav-button"
        :class="tab == '/analytics' ? 'active-button' : ''"
        @click="handleAnalyticsButton" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3V4H4C2.90694 4 2 4.90694 2 6V10V14V18C2 19.0931 2.90694 20 4 20H20C21.0931 20 22 19.0931 22 18V14V10V6C22 4.90694 21.0931 4 20 4H15V3H9ZM4 6H20V10V14H4V10V6ZM12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10ZM4 16H20V18H4V16Z" fill="#A6A5AA"/>
          </svg>
      </div>

      <!-- settings button -->
      <div
        class="nav-button"
        :class="tab == '/settings' ? 'active-button' : ''"
        @click="handleSettingsButton">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C7.59356 2 4 5.59356 4 10V11V11.9023C3.42629 12.4494 3 13.1531 3 14C3 15.242 3.85755 16.1629 4.94336 16.6133C6.24439 19.7231 8.85024 22 12 22C15.1498 22 17.7556 19.7231 19.0566 16.6133C20.1424 16.1629 21 15.242 21 14C21 13.1531 20.5737 12.4494 20 11.9023V11V10C20 5.59356 16.4064 2 12 2ZM12 4C14.6556 4 16.8906 5.70738 17.6855 8.08789C17.4642 8.03504 17.2365 8 17 8H7C6.7635 8 6.53581 8.03504 6.31445 8.08789C7.10938 5.70738 9.34441 4 12 4ZM7 10H17C17.565 10 18 10.435 18 11V12V12.8516L18.502 13.1387C18.8056 13.313 19 13.615 19 14C19 14.5151 18.6312 14.9127 18.1387 14.9805L17.5527 15.0625L17.3398 15.6133C16.309 18.2995 14.2584 20 12 20C9.74155 20 7.69096 18.2995 6.66016 15.6133L6.44727 15.0625L5.86133 14.9805C5.36883 14.9127 5 14.5151 5 14C5 13.615 5.19441 13.313 5.49805 13.1387L6 12.8516V12V11C6 10.435 6.43497 10 7 10Z" fill="#A6A5AA"/>
          </svg>
      </div>
    </div>
</template>

<script>
export default {
  props: ['showAddExpense'],
  data() {
    return {
      tab: ''
    }
  },
  methods: {
    handleHomeButton() {
      if (this.$router.currentRoute.path != '/') {
        this.$router.replace('/')
      }
      else {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
      }
    },
    handleSettingsButton() {
      if (this.$router.currentRoute.path != '/settings') {
        this.$router.replace('/settings')
      }
      else {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
      }
    },
    handleRecentButton() {
      if (this.$router.currentRoute.path != '/recent') {
        this.$router.replace('/recent')
      }
      else {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
      }
    },
    handleAnalyticsButton() {
      if (this.$router.currentRoute.path != '/analytics') {
        this.$router.replace('/analytics')
      }
      else {
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
      }
    },
    handleAddButton() {
      this.$emit('update:showAddExpense', true)
    }
  },
  computed: {
    title() {
      this.tab = this.$route.fullPath
    }
  }
  //add local storage for tab
}
</script>

<style lang="scss">

.main-nav-bar {
  display: flex;
  justify-content: space-around;
  background: $for-white;
  transition: .5s ease-in-out;
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.dark .main-nav-bar {
  background: $for-white-dark-bar;
}

svg {
  margin-top: 1.25rem;
}

.add-button svg {
  margin-top: .5rem;
}

.main-nav-bar div {
  cursor: pointer;
}

.active-button-home {
  .path-2 {
    fill: $primary
  }
}
.dark .active-button-home {
  .path-2 {
    fill: $primary-dark
  }
}
.active-button {
  path {
    fill: $primary
  }
}
.dark .active-button {
  path {
    fill: $primary-dark
  }
}


</style>