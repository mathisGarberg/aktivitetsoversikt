<script>
  import Calendar from './calendar/Calendar.vue';
  import CalendarSubscribe from './calendar/CalendarSubscribe.vue';

  export default {
    components: {
      Calendar,
      CalendarSubscribe,
    }
  };
</script>

<template>
  <main>
    <aside>
      <calendar-subscribe></calendar-subscribe>
    </aside>
    <div class="calendar-view">
      <calendar></calendar>
    </div>
  </main>
</template>

<style lang="sass">  
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
