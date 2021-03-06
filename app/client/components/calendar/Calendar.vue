<script>
  import _ from 'lodash';
  import moment from 'moment';
  import Cookies from 'js-cookie';
  import CalendarContent from './CalendarContent.vue';

  export default {
    components: {
      CalendarContent,
    },

    data() {
      const teamIds = JSON.parse(Cookies.get('teamIds') || '[]');

      return {
        year: moment().year(),
        week: moment().week(),
        events: [],
        teamIds,
      };
    },

    methods: {
      async fetchData() {
        if (this.teamIds.length > 0) {
          const events = await this.$http.get('/event', {
            params: {
              year: this.year,
              week: this.week,
              teamIds: this.teamIds,
            },
          });

          this.events = events.data.map(event => {
            return {
              id: event.id,
              day: moment(event.t1).weekday() + 1,
              t1: moment(event.t1).hour() + moment(event.t1).minute() / 60,
              t2: moment(event.t2).hour() + moment(event.t2).minute() / 60,
              dayOfMonth: moment(event.t1).date(),
              nameOfMonth: moment(event.t1).format('MMMM'),
              year: moment(event.t1).year(),
              category: event.category,
              description: event.description,
            };
          });
        } else {
          this.events = [];
        }
      },

      pastWeek() {
        const past = this.week - 1;

        if (past === 0) {
          this.year--;
        }

        this.week = moment().week(past).week();

        this.fetchData();
      },

      nextWeek() {
        const next = this.week + 1;

        if (next === moment().weeksInYear() + 1) {
          this.year++;
        }

        this.week = moment().week(next).week();

        this.fetchData();
      },
    },

    computed: {
      momentDate() {
        return moment().day('Monday').year(this.year).week(this.week);
      },
      monthAndYear() {
        return _.capitalize(moment(this.momentDate).format('MMMM, YYYY'));
      },
      days() {
        const startOfWeek = moment(this.momentDate).startOf('week').toDate();

        const dayNames = [
          'Mandag',
          'Tirsdag',
          'Onsdag',
          'Torsdag',
          'Fredag',
          'Lørdag',
          'Søndag'
        ];

        const days = [];

        for (let dayIndex of [0, 1, 2, 3, 4, 5, 6]) {
          const dayName = dayNames[dayIndex];
          const date = moment(startOfWeek).add(dayIndex, 'days').toDate();

          const formattedDate = moment(date).format('D.M');
          const formattedNowDate = moment().format('D.M');

          days.push({
            name: dayName,
            date: formattedDate,
            today: formattedDate === formattedNowDate && moment().year() === this.year,
            past: moment().year() > this.year || (new Date()) > date && formattedDate !== formattedNowDate,
          });
        }

        return days;
      },
    },

    mounted() {
      this.fetchData();

      this.eventHub.$on('teamIds', (ids) => {
        this.teamIds = ids;
        this.fetchData();
      });

      this.eventHub.$on('event added', () => {
        this.fetchData();
      });

      const dayGridEl = this.$refs.daysGrid;

      dayGridEl.style.overflowY = 'scroll';
      const nativeScrollbarWidth = dayGridEl.offsetWidth - dayGridEl.scrollWidth;
      dayGridEl.style.marginRight = `${nativeScrollbarWidth}px`;
      dayGridEl.style.overflowY = null;
    },
  };
</script>

<template>
  <div class="calendar">
    <div class="calendar-navigation">
      <div class="week-details">
        <button>
          <i class="material-icons" @click="pastWeek">chevron_left</i>
        </button>
        <div class="text">
          <span>{{ monthAndYear }}</span>
          <h2>Uke {{ week }}</h2>
        </div>
        <button>
          <i class="material-icons" @click="nextWeek">chevron_right</i>
        </button>
      </div>
      <div ref="daysGrid" class="grid">
        <div v-for="day in days" :class="{ 'grid-column': true, 'today': day.today, 'past': day.past }">
          <div class="day">{{ day.name }}</div>
          <div class="date">{{ day.date }}</div>
        </div>
      </div>
    </div>
    <calendar-content :events="events"  :week="week"></calendar-content>
  </div>
</template>

<style lang="sass">
  .calendar {
    display: flex;
    flex-direction: column;
  }
  
  .calendar-navigation {
    flex: none;
    
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
          cursor: pointer;
        }
      }
      
      & .text {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-shadow: 2px 1px 5px rgba(100, 100, 100, 1);
        
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