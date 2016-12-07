<script>
  import CalendarFilters from './calendar/CalendarFilters.vue';
  import CalendarSubscribe from './calendar/CalendarSubscribe.vue';
  import DialogOverlay from './misc/DialogOverlay.vue';
  import Login from './auth/Login.vue';

  export default {
    components: {
      CalendarFilters,
      CalendarSubscribe,
      DialogOverlay,
      Login,
    },

    data() {
      return {
        showLoginDialog: false,
        showInfoDialog: false,
        sidebar: 2,
      };
    },

    methods: {

    },

  };
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="navbar-brand">Heddal IL</h1>
      <div class="navbar-right">
        <button @click="showLoginDialog = true">LOGG INN</button>
      </div>
    </nav>
    <div class="content">
      <nav class="sidenav">
        <ul class="main-nav">
          <li>
            <router-link class="material-icons" to="/">filter_list</router-link>
          </li>
          <li>
            <router-link class="material-icons" to="/">rss_feed</router-link>
          </li>
          <li class="active">
            <router-link class="material-icons" to="/">today</router-link>
          </li>
          <li>
            <router-link class="material-icons" to="/">contacts</router-link>
          </li>
          <li>
            <router-link class="material-icons" to="/">people</router-link>
          </li>
          <li>
            <i @click="showInfoDialog = true" class="material-icons">info</i>
          </li>
        </ul>
        <calendar-filters v-if="sidebar === 1"></calendar-filters>
        <calendar-subscribe v-if="sidebar === 2"></calendar-subscribe>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
    <dialog-overlay v-if="showLoginDialog" @close="showLoginDialog = false">
      <h3 slot="title">Login</h3>
      <div slot= "content">
        <login></login>
      </div>
    </dialog-overlay>
    <dialog-overlay v-if="showInfoDialog" @close="showInfoDialog = false">
      <h3 slot="title">Informasjon</h3>
      <div slot= "content">Mathis kan skrive noe her elns.</div>
    </dialog-overlay>
  </div>
</template>

<style lang="sass">
  :root {
    --module-background: rgba(0, 0, 0, .8);
    --theme-red: #ff5554;
    --theme-blue: #03a9f4;
  }

  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;

    & .content {
      display: flex;
      flex: auto;

      & .sidenav {
        width: 20rem;
        flex: none;
        background: #1f1f1f;
        display: flex;

        & .main-nav {
          margin: 0;
          padding: 0;
          list-style: none;
          flex: none;
          width: 4rem;
          background: #333;
          display: flex;
          flex-direction: column;

          & li {
            flex: none;
            margin: 0;
            border: 0 solid #1f1f1f;
            border-width: 2px 0;

            &:first-child { border-top: none }
            &:nth-last-child(2) { border-bottom-width: 4px }
            &:last-child { 
              margin-top: auto;
              border: none;
            }

            &.active {
              color: var(--theme-red);
              background: #1f1f1f;
            }

            & .material-icons {
              display: block;
              width: 4rem;
              height: 4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              color: inherit;
              text-decoration: none;
            }
          }
        }

        & .filters {
          flex: auto;
        }
      }

      & main {
        flex: auto;
        overflow: hidden;
      }
    }

    & .navbar {
      flex: none;
      color: white;
      height: 4rem;
      padding: 0 4rem;
      box-sizing: border-box;
      background: var(--theme-red);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;

      .navbar-brand {
        margin: 0;
        font-size: 2.5rem;
        text-transform: uppercase;
      }

      .navbar-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        
        & button {
          border: none;
          background: rgba(0, 0, 0, 0.2);
          padding: .5rem;
          color: inherit;
          font-size: 1rem;
        }
      }
    }
  }
</style>
