<script>
  import Calendar from './calendar/Calendar.vue';
  import CalendarFilters from './calendar/CalendarFilters.vue';
  import DialogOverlay from './misc/DialogOverlay.vue';
  import Event from './event/Event.vue';

  export default {
    components: {
      Calendar,
      CalendarFilters,
      DialogOverlay,
      Event
    },
    data() {
      return {
        showAddEventDialog: false
      };

    }
  };
</script>

<template>
  <main>
    <aside>
      <button class="new-event" @click="showAddEventDialog = true">OPPRETT AKTIVITET</button>
      <calendar-filters></calendar-filters>
    </aside>
    <div class="calendar-view">
      <calendar></calendar>
    </div>
    <dialog-overlay v-if="showAddEventDialog" @close="showAddEventDialog = false">
      <h3 slot="title">Opprett aktivitet</h3>
      <div slot= "content"><event></event></div>
    </dialog-overlay>
  </main>
</template>

<style lang="sass">
  .new-event {
    padding: 10px;
    border-radius: 5px;
    background: #009688;
    color: #FFF;
    border: none;
    display: block;
    margin: 10px auto;
    font-weight: bold;
    
    &:hover {
      cursor: pointer;
    }
    
    &:active {
      background: #00897B;
    }
    
  }
  
  .calendar-view {
    flex: auto;
    background-image: url('/public/img/fotball-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 2rem;
    box-sizing: border-box;
    max-height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    box-shadow: inset 0 0 16rem 1rem rgba(0, 0, 0, 0.8);

    & .calendar-navigation {
      margin-bottom: 1rem;
      flex: none;
      min-width: 55rem;
    }

    & .calendar-content {
      flex: auto;
      min-width: 55rem;
    }
  }
</style>
