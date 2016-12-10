<script>
  export default {
    data() {
      return {
        email: '',
        phone: '',
        fullName: '',
        username: '',
        password: '',
        repeatedPassword: '',
      };
    },

    methods: {
      async register(e) {
        const res = await this.$http.post('/auth/register', {
          email: this.email,
          phone: this.phone,
          full_name: this.fullName,
          username: this.username,
          password: this.password,
          password_confirmed: this.repeatedPassword,
        });

        if (res.data.errors) {
          const errors = res.data.errors;

          
        }
      },
    },
  };
</script>

<template>
  <form class="auth-form">
    <label>
      <h3>Epost</h3>
      <input type="email" v-model="email" placeholder="navn@domene.no">
    </label>
    <label>
      <h3>Telefon- eller mobilnummer</h3>
      <input type="text" v-model="phone" placeholder="+47 123 45 678">
    </label>
    <label>
      <h3>Fullt navn</h3>
      <input type="text" v-model="fullName" placeholder="Ola Nordmann">
    </label>
    <label>
      <h3>Brukernavn</h3>
      <input type="text" v-model="username" placeholder="ola123">
    </label>
    <label>
      <h3>Passord</h3>
      <input type="password" v-model="password" placeholder="●●●●●●●●●●●●">
    </label>
    <label>
      <h3>Gjenta passord</h3>
      <input type="password" v-model="repeatedPassword" placeholder="●●●●●●●●●●●●">
    </label>
    <button @click.prevent="register">OPPRETT NY BRUKER</button>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
