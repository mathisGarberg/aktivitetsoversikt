<script>
  export default {
  };
</script>

<template>
  <form class="auth-form" action="">
    <label>
      <h3>E-post</h3>
      <input type="email" placeholder="navn@domene.no">
    </label>
    <label>
      <h3>Brukernavn</h3>
      <input type="text" placeholder="ola123">
    </label>
    <label>
      <h3>Fullt navn</h3>
      <input type="text" placeholder="Ola Nordmann">
    </label>
    <label>
      <h3>Passord</h3>
      <input type="password" placeholder="●●●●●●●●●●●●">
    </label>
    <label>
      <h3>Gjenta passord</h3>
      <input type="password" placeholder="●●●●●●●●●●●●">
    </label>
    <button>OPPRETT NY BRUKER</button>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
