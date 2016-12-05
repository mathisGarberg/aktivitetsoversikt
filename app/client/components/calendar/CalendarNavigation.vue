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
          past: (new Date()) > date && formattedDate !== formattedNowDate,
        });
      }

      const dayGridEl = this.$refs.daysGrid;

      dayGridEl.style.overflowY = 'scroll';
      const nativeScrollbarWidth = dayGridEl.offsetWidth - dayGridEl.scrollWidth;
      dayGridEl.style.marginRight = `${nativeScrollbarWidth}px`;
      dayGridEl.style.overflowY = null;
    },
  };
</script>

<template>
  <div class="calendar-navigation">
    <div class="week-details">
      <button>
        <i class="material-icons">chevron_left</i>
      </button>
      <div class="text">
        <span>October, 2016</span>
        <h2>Uke 41</h2>
      </div>
      <button>
        <i class="material-icons">chevron_right</i>
      </button>
    </div>
    <div ref="daysGrid" class="grid">
      <div v-for="day in days" :class="{ 'grid-column': true, 'today': day.today, 'past': day.past }">
        <div class="day">{{ day.name }}</div>
        <div class="date">{{ day.date }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .calendar-navigation {
    & .week-details {
      display: flex;
      margin-bottom: 1rem;
      
      & button {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        color: inherit;
        padding: 0;
        background: none;
        border: none;
        
        & .material-icons {
          font-size: 4rem;
        }
      }
      
      & .text {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        & h2 {
          font-size: 4rem;
          margin: 0;
        }
      }
    }
    
    & .grid {
      margin-left: 4rem;
      display: flex;

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