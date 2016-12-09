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
  @import './event.scss';
</style>