<script>
  import CalendarNavigation from './calendar/CalendarNavigation.vue';
  import CalendarContent from './calendar/CalendarContent.vue';
  
  export default {
    components: {
      CalendarNavigation,
      CalendarContent,
    }
  };
</script>

<template>
    <div class="calendar-view">
        <calendar-navigation></calendar-navigation>
        <calendar-content></calendar-content>
    </div>
</template>

<style lang="sass">
  .calendar-view {
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
