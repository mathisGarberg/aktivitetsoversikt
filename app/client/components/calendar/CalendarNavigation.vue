<script>
  import moment from 'moment';

  export default {
    data() {
      return {
        days: [],
      };
    },

    mounted() {
      const startOfWeek = moment().startOf('week').toDate();
      const endOfWeek = moment().endOf('week').toDate();

      const dayNames = [
        'Mandag',
        'Tirsdag',
        'Onsdag',
        'Torsdag',
        'Fredag',
        'Lørdag',
        'Søndag'
      ];

      for (let dayIndex of [0, 1, 2, 3, 4, 5, 6]) {
        const dayName = dayNames[dayIndex];
        const date = moment(startOfWeek).add(dayIndex, 'days').toDate();

        const formattedDate = moment(date).format('D.M');
        const formattedNowDate = moment().format('D.M');

        this.days.push({
          name: dayName,
          date: formattedDate,
          today: formattedDate === formattedNowDate,
          past: (new Date()) > date,
        });
      }
    },
  };
</script>

<template>
  <div class="calendar-navigation">
    <div class="grid">
      <div v-for="day in days" :class="{ 'grid-column': true, 'today': day.today, 'past': day.past }">
        <div class="day">{{ day.name }}</div>
        <div class="date">{{ day.date }}</div>
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