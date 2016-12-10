<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        rememberMe: true,
      };
    },

    methods: {
      login() {

      },
    },
  };
</script>

<template>
  <form class="auth-form" action="">
    <label>
      <h3>Brukernavn</h3>
      <input type="text" v-model="username" placeholder="ola123">
    </label>
    <label>
      <h3>Passord</h3>
      <input type="password" v-model="password" placeholder="●●●●●●●●●●●●">
    </label>
    <div class="extra">
      <label>
        <input type="checkbox" v-model="rememberMe">
        <span>Husk meg</span>
      </label>
      <a href="#">Glemt passord?</a>
    </div>
    <button @click="login">LOGG INN</button>
    <router-link class="new-user" to="/">
    <a class="new-user" href="#">Ny bruker</a>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
