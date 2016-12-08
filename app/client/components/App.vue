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
      };
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
          <router-link tag="li" to="/filter_list">
            <a class="material-icons">filter_list</a>
          </router-link>
          <router-link tag="li" to="/subscribe">
            <a class="material-icons">rss_feed</a>
          </router-link>
          <router-link tag="li" to="/today">
            <a class="material-icons">today</a>
          </router-link>
          <router-link tag="li" to="/contacts">
            <a class="material-icons">contacts</a>
          </router-link>
          <router-link tag="li" to="/people">
            <a class="material-icons">people</a>
          </router-link>
          <li>
            <i @click="showInfoDialog = true" class="material-icons">info</i>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
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
        width: 4rem;
        flex: none;
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

    & main {
      display: flex;
    }

    & main > aside {
      background:  #1f1f1f;
      width: 16rem;
      flex: none;
    }
  }
</style>
