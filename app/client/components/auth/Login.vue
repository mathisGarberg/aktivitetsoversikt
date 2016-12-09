<script>
  export default {
  };
</script>

<template>
  <form class="auth-form" action="">
    <label>
      <h3>Brukernavn</h3>
      <input type="text" placeholder="ola123">
    </label>
    <label>
      <h3>Passord</h3>
      <input type="password" placeholder="●●●●●●●●●●●●">
    </label>
    <div class="extra">
      <label>
        <input type="checkbox">
        <span>Husk meg</span>
      </label>
      <a href="#">Glemt passord?</a>
    </div>
    <button>LOGG INN</button>
    <router-link class="new-user" to="/">
    <a class="new-user" href="#">Ny bruker</a>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
