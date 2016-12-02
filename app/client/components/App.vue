<script>
  import CalendarFilters from './calendar/CalendarFilters.vue';
  
  export default {
    components: {
      CalendarFilters,
    }
  };
</script>

<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="navbar-brand">Heddal IL</h1>
      <div class="navbar-right">
        <div>Kjetil Røise (Trener)</div>
      </div>
    </nav>
    <div class="content">
      <nav class="sidenav">
        <ul class="main-nav">
          <li>
            <a class="material-icons" href="/">filter_list</a>
          </li>
          <li>
            <a class="material-icons" href="/">rss_feed</a>
          </li>
          <li class="active">
            <a class="material-icons" href="/">today</a>
          </li>
          <li>
            <a class="material-icons" href="/">contacts</a>
          </li>
          <li>
            <a class="material-icons" href="/">people</a>
          </li>
          <li>
            <a class="material-icons" href="/">info</a>
          </li>
        </ul>
        <calendar-filters></calendar-filters>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
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

            & a {
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
      }
    }
  }
</style>
