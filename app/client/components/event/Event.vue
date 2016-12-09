<script>
  export default {

  };
</script>

<template>
  <main>
    <form class="event-form" action="">
    <label>
      <input type="text" placeholder="Aktiviteten heter...">
    </label>
    <label>
      <input type="date">
    </label>
    <div class="set-time">
      <label>
        <input type="time">
      </label>
      <label>
        <input type="time">
      </label>
    </div>
    
    <label>
      <p>Beskrivelse (max 100 ord):</p>
      <textarea rows="5" cols="50" placeholder="I dag skal vi..."></textarea>
    </label>
    <button class="create-event">OPPRETT</button>
  </form>
  </main>
</template>

<style lang="sass">
  .event-form {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
  
    & > :nth-child(n+2) {
      margin-top: 1rem;
    }

    & .create-event {
      padding: 10px 20px 10px 20px;
      border-radius: 5px;
      background: #009688;
      color: #FFF;
      border: none;
      display: block;
      font-weight: bold;
    
      &:hover {
        cursor: pointer;
      }

      &:active {
        background: #00897B;
      }
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

      & textarea {
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #eaeaea;
        padding: .5em;
        border-radius: .25rem;
        resize: none;
      }

    }
  
    & .set-time {
      display: flex;

        & > label {
          display: flex;

          & input {
            width: 100%;
            font: inherit;
            box-sizing: border-box;
            border: 2px solid #eaeaea;
            padding: .3em;
            border-radius: .25rem;
            margin-right: 1em;
          }

        }
    }
  
  }
</style>