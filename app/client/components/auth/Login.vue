<script>
  export default {
    data() {
      return {
        username: {
          value: '',
          errors: [],
        },
        password: {
          value: '',
          errors: [],
        },
        remember_me: {
          value: false,
          errors: [],
        },
      };
    },

    methods: {
      async login(e) {
        const res = await this.$http.post('/auth/login', {
          username: this.username.value,
          password: this.password.value,
          remember_me: this.remember_me.value,
        });

        if (res.data.errors) {
          const errors = res.data.errors;

          for (let field of Object.keys(errors)) {
            this[field].errors = errors[field];
          }
        } else {
          this.eventHub.$emit('user', res.data.user);
          this.$emit('close');
        }
      },
    },
  };
</script>

<template>
  <form class="auth-form" action="">
    <label>
      <h3>Brukernavn</h3>
      <input type="text" v-model="username.value" placeholder="ola123">
      <ul class="errors">
        <li v-for="error in username.errors">{{ error }}</li>
      </ul>
    </label>
    <label>
      <h3>Passord</h3>
      <input type="password" v-model="password.value" placeholder="●●●●●●●●●●●●">
      <ul class="errors">
        <li v-for="error in password.errors">{{ error }}</li>
      </ul>
    </label>
    <div class="extra">
      <label>
        <input type="checkbox" v-model="remember_me.value">
        <span>Husk meg</span>
      </label>
      <a href="#">Glemt passord?</a>
    </div>
    <button @click.prevent="login">LOGG INN</button>
    <router-link class="new-user" to="/">
    <a class="new-user" href="#">Ny bruker</a>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
