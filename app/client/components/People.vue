<script>
  export default {

  };
</script>

<template>
  <main class="people">
    <aside class="left-sidebar">
      <div class="team-search">
        <header>
          <h3>Lagoversikt</h3>
          <p>Få oversikt over alle lagene</p>
        </header>

        <form>
          <input type="text" placeholder="Søk etter lag"/>
        </form>

        <div class="results">
          <ul>
            <li>Søkeresultat</li>
            <li class="selected">Gutter 18, G18 (Valgt)</li>
            <li>Søkeresultat</li>
            <li>Søkeresultat</li>
            <li>Søkeresultat</li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="center-content">
      <div class="top-boxes">
        <div class="trainer-information">
          <div class="title">Trenere og informasjon</div>
          <div class="box-content">
            <table>
              <tr>
                <td>Rolle:</td>
                <td>Trener, G18</td>
              </tr>
              <tr>
                <td>Navn:</td>
                <td>Mathis</td>
              </tr>
              <tr>
                <td>Etternavn:</td>
                <td>Garberg</td>
              </tr>
              <tr>
                <td>E-post:</td>
                <td><a href="mailto:mathis.garberg@gmail.com">mathis.garberg@gmail.com</a></td>
              </tr>
              <tr>
                <td>Telefon:</td>
                <td><a href="tel:+4798475632">98 47 56 32</a></td>
              </tr>
            </table>
            <a href="mailto:mathis.garberg@gmail.com" class="button">KONTAKT</a>
          </div>
        </div>
        <div class="main-box">
          <div class="title">Hovedfasiliteter</div>
          <div class="box-content">
            <table>
              <tr>
                <td>Banenavn:</td>
                <td>Vidarvoll</td>
              </tr>
              <tr>
                <td>Ansvarlig:</td>
                <td>Petter Ansvarlig</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="player-information">
        <div class="title">Spiller informasjon</div>
        <div class="box-content">
          <div class="profile-image">
            <img src="/public/img/profile.png"/>
          </div>
          <table>
            <tr>
              <td>Fornavn:</td>
              <td>Petter</td>
            </tr>
            <tr>
              <td>Etternavn:</td>
              <td>Husrom</td>
            </tr>
            <tr>
              <td>Alder:</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Født:</td>
              <td>21.10.1998</td>
            </tr>
            <tr>
              <td>Rolle:</td>
              <td>Midtbane</td>
            </tr>
            <tr>
              <td>E-post:</td>
              <td>petter.husrom@gmail.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <aside class="right-sidebar">
      <div class="title">Spillere</div>

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
  </main>
</template>

<style lang="sass">
  .people {
    background: #333;
  }

  .left-sidebar {
    padding: 0 1rem;

    & .team-search {

      & header {
        height: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        & h3 {
          margin: 0;
        }

        & p {
          margin: 0;
        }

      }

      & input[type=text] {
        padding: .5rem;
        width: 100%;
        border: none;
        box-sizing: border-box;
        font: inherit;
      }
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

  .right-sidebar {
    padding: 1rem;

    & .results {
      background: none;

      & ul {
        padding: 0;
      }
    }

    & input[type=text] {
      padding: .5rem;
      width: 100%;
      border: none;
      box-sizing: border-box;
      font: inherit;
    }
  }

  .center-content {
    flex: auto;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    & .title {
      padding: .5rem;
      background: var(--theme-red);
      box-sizing: border-box;
    }

    & .box-content {
      padding: 1rem;
    }

    & .top-boxes {
      display: flex;

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
        color: inherit;
        text-decoration: none;
        display: inline-block;
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
