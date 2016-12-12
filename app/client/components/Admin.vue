<script>
  export default {

  };
</script>

<template>
  <main class="people">
    <aside class="left-sidebar">
      <div class="tabs">
        <button class="active">Trener / lagleder</button>
        <button>Aktivitetsarena</button>
      </div>

      <form>
        <input type="text" name="" id="" placeholder="Søk etter navn"/>
      </form>
      <div class="results">
        <ul>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
          <li>Navn resultat</li>
        </ul>
      </div>
    </aside>
    <div class="center-content">
      <div class="top-boxes">
        <div class="trainer-information">
          <div class="title">Trenere og informasjon</div>
          <div class="box-content">
            <form action="">
              <table>
                <tr>
                  <td>Rolle</td>
                  <td><input type="text"></td>
                </tr>
                <tr>
                  <td>Navn</td>
                  <td><input type="text"></td>
                </tr>
                <tr>
                  <td>Etternavn</td>
                  <td><input type="text"></td>
                </tr>
                <tr>
                  <td>E-post</td>
                  <td><input type="email"></td>
                </tr>
                <tr>
                  <td>Tlf</td>
                  <td><input type="tel"></td>
                </tr>
                <tr>
                  <td>Passord</td>
                  <td><input type="password"></td>
                </tr>
                <tr>
                  <td>Bekreft passord</td>
                  <td><input type="password"></td>
                </tr>
              </table>
              <button class="button">Legg til</button>
            </form>
          </div>
        </div>
        <div class="main-box">
          <div class="title">Hovedfasiliteter</div>
          <div class="box-content">
            <form action="">
              <table>
                <tr>
                  <td>Banenavn</td>
                  <td><input type="text"></td>
                </tr>
                <tr>
                  <td>Ansvarlig</td>
                  <td><input type="text"></td>
                </tr>
              </table>
              <button class="button">Legg til</button>
            </form>
          </div>
        </div>
      </div>
      <div class="player-information">
        <div class="title">Endre rettigheter</div>
        <div class="box-content">
          <em>Endre rettigheter</em>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="sass">
  .people {
    background: #333;

    & .title {
      padding: .5rem;
      background: var(--theme-red);
      box-sizing: border-box;
    }
  }

  .results {
    background: #333;

    & ul {
      padding: .5rem;
      list-style: none;

      & li {
        padding: .5rem;
      }

      & .selected {
        color: var(--theme-red);
      }
    }
  }

  .left-sidebar {
    padding: 1rem;

    & .results {
      background: none;

      & ul {
        padding: 0;
      }
    }

    & .tabs {
      display: flex;

      & button {
        flex: 1 1 0;
        border: 0 solid #333;
        border-width: 0 0 4px;
        background: none;
        padding: .5rem;
        font: inherit;
        color: inherit;

        &.active {
          border-color: var(--theme-red);
        }
      }
    }

    & input {
      padding: .5rem;
      width: 100%;
      border: none;
      box-sizing: border-box;
      font: inherit;
    }

    & form {
      margin-top: 10px;
    }
  }

  .center-content {
    flex: auto;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    & input {
      padding: .5rem;
      width: 100%;
      border: none;
      box-sizing: border-box;
      font: inherit;
    }

    & .box-content {
      padding: 1rem;
    }

    & .top-boxes {
      display: flex;

      & form {
        display: flex;
        flex-direction: column;
        
        & table {
          width: calc(100% + 1rem);
          margin: 0 -.5rem
        }
      }

      & .trainer-information {
        flex: 1 1 0;
        background: #1F1F1F;
        overflow: auto;

        & table td {
          padding: .5rem;
        }

        & a {
          color: inherit;
        }
      }

      & .button {
        padding: 1rem;
        text-align: center;
        background: #129384;
        border-radius: .25rem;
        border: none;
        font: inherit;
        color: inherit;
        text-decoration: none;
        display: inline-block;
        align-self: flex-end;
      }
    }

    & .main-box {
      margin-left: 1rem;
      flex: 1 1 0;
      background: #1F1F1F;
      overflow: auto;

      & table td {
        padding: .5rem;
      }
    }
  }

  .player-information{
    background: #1F1F1F;
    margin-top: 1rem;
    overflow: auto;

    & table td {
      padding: .5rem;
    }

    & .profile-image {

      & img {
        width: 8rem;
        height: 8rem;
      }
    }
  }
</style>
