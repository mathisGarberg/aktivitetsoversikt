<script>
  export default {
  };
</script>

<template>
  <form class="login-form" action="">
    <label>
      <h3>E-post</h3>
      <input type="text">
    </label>
    <label>
      <h3>Passord</h3>
      <input type="text">
    </label>
    <div class="extra">
      <label>
        <input type="checkbox">
        <span>Husk meg</span>
      </label>
      <a href="#">Glemt passord?</a>
    </div>
    <button>LOGG INN</button>
    <a href="#">Ny bruker</a>
  </form>
</template>

<style lang="sass">
  .login-form {
    display: flex;
    flex-direction: column;
    max-width: 20rem;

    & > :nth-child(n+2) {
      margin-top: 1rem;
    }

    & > label {
      display: block;
      width: 100%;

      & h3 {
        margin: 0;
        font-size: 1rem;
      }

      & input {
        width: 100%;
        font: inherit;
        box-sizing: border-box;
        border: 2px solid #eaeaea;
        padding: .5em;
        border-radius: .25rem;
      }
    }

    & .extra {
      display: flex;
      justify-content: space-between;

      & label {
        display: flex;
        align-items: center;

        & span {
          margin-left: .5em;
        }
      }
    }

    & button {
      font: inherit;
      box-sizing: border-box;
      border: none;
      padding: .5em;
      border-radius: .25rem;
      color: white;
      background: var(--theme-blue);
    }

    & > button, & > a {
      align-self: flex-end;
    }
  }
</style>
