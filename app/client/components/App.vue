<script>
  import CalendarFilters from './calendar/CalendarFilters.vue';
  import CalendarSubscribe from './calendar/CalendarSubscribe.vue';
  import DialogOverlay from './misc/DialogOverlay.vue';
  import Login from './auth/Login.vue';
  import Register from './auth/Register.vue';
  import Info from './info/Info.vue';

  export default {
    components: {
      CalendarFilters,
      CalendarSubscribe,
      DialogOverlay,
      Login,
      Register,
      Info,
    },

    data() {
      return {
        user: window.global.user,

        showLoginDialog: false,
        showRegisterDialog: false,
        showInfoDialog: false,
      };
    },

    methods: {
      async logout() {
        this.user = null;
        await this.$http.get('/auth/logout');
      },
    },

    mounted() {
      this.eventHub.$on('user', (user) => {
        this.user = user;
      });
    },
  };
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="navbar-brand">Heddal IL</h1>
      <div class="navbar-right">
        <template v-if="user">
          <div>{{ user.first_name }} &lt;{{ user.email }}&gt;</div>
          <button @click="logout">Logg ut</button>
        </template>
        <template v-else>
          <button @click="showLoginDialog = true">LOGG INN</button>
          <button @click="showRegisterDialog = true">REGISTRER DEG</button>
        </template>
      </div>
    </nav>
    <div class="content">
      <nav class="sidenav">
        <ul class="main-nav">
          <router-link tag="li" to="/filters">
            <a class="material-icons">filter_list</a>
          </router-link>
          <router-link tag="li" to="/subscribe">
            <a class="material-icons">rss_feed</a>
          </router-link>
          <router-link tag="li" to="/admin" v-if="user && user.role_id == 5">
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
      <router-view :user="user"></router-view>
    </div>

    <dialog-overlay v-if="showLoginDialog" @close="showLoginDialog = false">
      <h3 slot="title">Innlogging</h3>
      <div slot= "content">
        <login @close="showLoginDialog = false"></login>
      </div>
    </dialog-overlay>

    <dialog-overlay v-if="showRegisterDialog" @close="showRegisterDialog = false">
      <h3 slot="title">Ny bruker</h3>
      <div slot= "content">
        <register @close="showRegisterDialog = false"></register>
      </div>
    </dialog-overlay>

    <dialog-overlay v-if="showInfoDialog" @close="showInfoDialog = false">
      <h3 slot="title">Informasjon</h3>
      <div slot= "content"><Info></Info></div>
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
        font-size: 1.25rem;
        align-items: baseline;

        & button {
          margin-left: .5rem;
          border: none;
          background: rgba(0, 0, 0, 0.2);
          padding: .5rem;
          color: inherit;
          font-size: 1rem;

          &:hover {
          background: rgba(0, 0, 0, 0.3);
          }
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
