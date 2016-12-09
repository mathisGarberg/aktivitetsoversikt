<script>

  export default {
    components: {
    },
  };
</script>

<template>
  <main>
    <div class="left-sidebar">
      <div class="team-search">
        <h3>Lagoversikt</h3>
        <p>Få oversikt over alle lagene</p>

        <form>
          <input type="text" placeholder="Search"/>
        </form>

        <div id="results">
          <ul>
            <li>Søkeresultat</li>
            <li class="selected">Gutter 18, G18 (Valgt)</li>
            <li>Søkeresultat</li>
            <li>Søkeresultat</li>
            <li>Søkeresultat</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="center-content">
      <div class="trainer-information">
        <div class="title">Trenere og informasjon</div>
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
            <td>mathis.garberg@gmail.com</td>
          </tr>
          <tr>
            <td>Telefon:</td>
            <td>98475632</td>
          </tr>
        </table>
        <div class="button">KONTAKT</div>
      </div>
      <div class="main-box">
        <div class="title">Hovedfasiliteter</div>
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
      <div class="player-information">
        <div class="title">Spiller informasjon</div>
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
    <div class="right-sidebar">
      <div class="title">Spillere</div>

      <form>
        <input type="text" name="" id="" placeholder="Søk etter navn"/>
      </form>
      <div id="results">
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
    </div>
  </main>
</template>

<style lang="sass">  
  .left-sidebar{
    float: left;
    width: 15%;
    background: #1F1F1F;
    height: 100%;
    padding: 10px;
  }

  .center-content{
    width: 63%;
    height: 100%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
  }

  .right-sidebar{
    float: left;
    height: 100%;
    background: #1F1F1F;
    width: 20%;
    padding: 10px;
    box-sizing: border-box;
  }

  .left-sidebar > .team-search{
    color: #fff;
  }

  .left-sidebar > .team-search > h3{
    color: #fff;
    margin: 0px;
  }

  .left-sidebar > .team-search p{
    margin-top: 0px;
  }

  .left-sidebar > .team-search input[type=text]{
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    height: 30px;
    border: 0px;
  }

  #results {
    background: #555555;
    padding: 10px;
    color: #fff;
  }

  #results ul {
    padding: 0px;
  }

  #results ul li{
    display: block;
    padding: 5px;
  }

  #results ul:first-child{
    display: block;
    padding: 0px;
  }

  #results ul .selected {
    color: red;
  }



  /*Trener infromasjon */

  .title{
    width: 100%;
    padding: 10px;
    background: #FA5952;
    box-sizing: border-box;
    color: #fff;
    margin-bottom: 10px;
  }

  .center-content .trainer-information {
     width: 49%;
     height: 400px;
     background: #1F1F1F;
     float: left;
   }

  .center-content .trainer-information table {
    color: #fff;
    padding: 10px;
  }

  .center-content .trainer-information table td {
    padding: 10px;
  }

  .center-content .trainer-information .button {
    height: 50px;
    width: 150px;
    line-height: 50px;
    text-align: center;
    background: #129384;
    margin-left: 20px;
    color: #fff;
    border-radius: 5px;
  }

  .center-content .main-box {
    width: 49%;
    height: 400px;
    background: #1F1F1F;
    float: right;
  }


  /*player information */

  .player-information{
    width: 100%;
    height: auto;
    background: #1F1F1F;
    float: left;
    margin-top: 15px;
  }

  .player-information table {
    padding: 10px;
    color: #fff;
  }

  .player-information table td {
    padding: 10px;
  }

  .player-information .profile-image{
    width: 100px;
    height: 100px;;
    margin-left: 20px;
    text-align: center;
  }

  .player-information .profile-image > img {
    max-width: 100%;
    max-height: 100%;
  }

  /*main-box */

  .main-box table{
    padding: 10px;
    color: #fff;
  }

  .main-box table td{
    padding: 10px;
  }

  /*Right sidebar */

  .right-sidebar ul{
    padding: 0px;
  }

  .right-sidebar ul li{
    display: inline;
    padding: 10px;
  }

  .right-sidebar input[type=text]{
    width: 100%;
    border-radius: 5px;
    height: 30px;
    padding: 10px;
    border: 0px;
  }
</style>
