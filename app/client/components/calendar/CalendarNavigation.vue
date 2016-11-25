<script>
  export default {

  };
</script>

<template>
  <div class="calendar-navigation">
    <div class="grid">
      <div class="grid-column past">
        <div class="day">Mandag</div>
        <div class="date">21.11</div>
      </div>
      <div class="grid-column past">
        <div class="day">Tirsdag</div>
        <div class="date">22.11</div>
      </div>
      <div class="grid-column today">
        <div class="day">Onsdag</div>
        <div class="date">23.11</div>
      </div>
      <div class="grid-column">
        <div class="day">Torsdag</div>
        <div class="date">24.11</div>
      </div>
      <div class="grid-column">
        <div class="day">Fredag</div>
        <div class="date">25.11</div>
      </div>
      <div class="grid-column">
        <div class="day">Lørdag</div>
        <div class="date">26.11</div>
      </div>
      <div class="grid-column">
        <div class="day">Søndag</div>
        <div class="date">27.11</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .calendar-navigation {
    & .grid {
      padding: 0 .5rem;
      margin-left: 4rem;
      display: flex;
      overflow-y: scroll;

      & .grid-column {
        flex: 1 1 0;
        text-align: center;
        margin: 0 .25rem;
        padding: .25rem;
        background: var(--module-background);
        border-radius: .25rem;
        
        &.past { color: rgba(255, 255, 255, .5) }
        &.today { color: var(--theme-red) }
        
        & .day {
          text-transform: uppercase;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: .5rem;
        }
        
        & .date {
          margin: .5rem 0;
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
  }
</style>