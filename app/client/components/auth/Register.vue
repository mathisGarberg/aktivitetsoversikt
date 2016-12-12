<script>
  export default {
    data() {
      return {
        email: {
          value: '',
          errors: [],
        },
        phone: {
          value: '',
          errors: [],
        },
        first_name: {
          value: '',
          errors: [],
        },
        last_name: {
          value: '',
          errors: [],
        },
        username: {
          value: '',
          errors: [],
        },
        password: {
          value: '',
          errors: [],
        },
        password_confirmation: {
          value: '',
          errors: [],
        },
      };
    },

    methods: {
      async register(e) {
        const res = await this.$http.post('/auth/register', {
          email: this.email.value,
          phone: this.phone.value,
          first_name: this.first_name.value,
          last_name: this.last_name.value,
          username: this.username.value,
          password: this.password.value,
          password_confirmation: this.password_confirmation.value,
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
  <form class="auth-form">
    <label>
      <h3>Epost</h3>
      <input type="email" v-model="email.value" placeholder="navn@domene.no">
      <ul class="errors">
        <li v-for="error in email.errors">{{ error }}</li>
      </ul>
    </label>
    <label>
      <h3>Telefon- eller mobilnummer</h3>
      <input type="text" v-model="phone.value" placeholder="+47 123 45 678">
      <ul class="errors">
        <li v-for="error in phone.errors">{{ error }}</li>
      </ul>
    </label>
    <label>
      <h3>Fornavn</h3>
      <input type="text" v-model="first_name.value" placeholder="Ola">
      <ul class="errors">
        <li v-for="error in first_name.errors">{{ error }}</li>
      </ul>
    </label>
    <label>
      <h3>Etternavn</h3>
      <input type="text" v-model="last_name.value" placeholder="Nordmann">
      <ul class="errors">
        <li v-for="error in last_name.errors">{{ error }}</li>
      </ul>
    </label>
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
    <label>
      <h3>Gjenta passord</h3>
      <input type="password" v-model="password_confirmation.value" placeholder="●●●●●●●●●●●●">
      <ul class="errors">
        <li v-for="error in password_confirmation.errors">{{ error }}</li>
      </ul>
    </label>
    <button @click.prevent="register">OPPRETT NY BRUKER</button>
  </form>
</template>

<style lang="sass">
  @import './auth.scss';
</style>
