<script>
  import _ from 'lodash';
  import moment from 'moment';
  import DialogOverlay from './../misc/DialogOverlay.vue';

  function pad(n) {
    return n > 9 ? n : `0${n}`;
  }

  export default {
    components: {
      DialogOverlay,
    },

    props: {
      events: Array,
      week: Number,
    },

    data() {
      return {
        showEventDialog: false,
        shownEvent: {},
        time: moment.duration(`${moment().hour()}:${moment().minute()}`).asHours(),
      };
    },

    filters: {
      pad(n) { return pad(n); },
      numToTime(n) {
        const h = Math.floor(n);
        const m = (n - h) * 60;
        return `${pad(h)}:${pad(m)}`;
      },
    },

    computed: {
      thisWeek() {
        return moment().week();
      },

      thisWeekDay() {
        return moment().day();
      },

      groups() {        
        // Create a copy of the events array
        const events = this.events.slice(0);

        events.sort((a, b) => {
          if (a.t1 > b.t1) return 1;
          if (a.t1 === b.t1 && a.t2 > b.t2) return 1;
          else return -1;
        });

        const eventGroups = [];

        events.forEach((event, index) => {
          const styles = [
            `margin-top: calc(var(--timeblock-height) * (${ event.t1 }))`,
            `height: calc(var(--timeblock-height) * ${ event.t2 - event.t1 })`,
          ];

          events.forEach((secondEvent, secondIndex) => {
            if (event !== secondEvent && event.day === secondEvent.day && event.eventGroup === undefined) {
              const range1 = _.inRange(event.t1, secondEvent.t1, secondEvent.t2);
              const range2 = _.inRange(event.t2, secondEvent.t1, secondEvent.t2);

              if (range1 || range2 || event.t1 === secondEvent.t1 || event.t2 === secondEvent.t2) {
                if (secondEvent.eventGroup !== undefined) {
                  event.eventGroup = secondEvent.eventGroup;
                  eventGroups[secondEvent.eventGroup].push(event);
                } else {
                  event.eventGroup = eventGroups.push([event]) - 1;
                }
              }
            }
          });

          if (event.eventGroup === undefined)
            event.eventGroup = eventGroups.push([event]) - 1;

          event.styles = styles.join(';');
        });

        return eventGroups;
      },
    },

    updated() {
      let earlestEvent = 24;
      this.$el.querySelectorAll('.event').forEach((el) => {
        if (el.dataset.start < earlestEvent) {
          earlestEvent = el.dataset.start;
          this.$el.scrollTop = el.offsetTop;
        }
      });
    },
  };
</script>

<template>
  <div class="calendar-content">
    <div class="timestamps">
      <time v-for="n in 24">
        {{ n - 1 | pad }}:00
      </time>
    </div>
    <div class="grid">
      <div class="grid-column"
           v-for="n in 7">
        <div v-for="group in groups"
             v-if="group[0].day === n"
             :class="{ 'event-group': true, 'large-block': group.length > 2 }">
          <div v-for="event in group"
               @click="showEventDialog = true; shownEvent = event"
               :style="event.styles"
               :data-start="event.t1"
               class="event">
            <time>{{ event.t1 | numToTime }}</time>
            <img :src="`/public/img/${event.category}.svg`" :alt="`${event.category}-icon`" class="event-icon">
            <p class="description">{{ event.description }}</p>
            <time>{{ event.t2 | numToTime }}</time>
          </div>
        </div>
        <div class="today-bar"
             v-if="thisWeek === week && n === thisWeekDay"
             :style="`top: calc(var(--timeblock-height) * (${ time }))`"></div>
      </div>
    </div>
    <div class="horizontal-lines">
      <hr v-for="n in 24" :style="`top: calc(var(--timeblock-height) * ${n})`">
    </div>
    <dialog-overlay v-if="showEventDialog" @close="showEventDialog = false">
      <h3 slot="title">Aktivitet</h3>
      <div slot="content" class="event-dialog">
        <div class="event-time-info">
          <div class="month-number">{{ shownEvent.dayOfMonth }}</div>
          <div>
            <time>{{ shownEvent.t1 | numToTime }}</time>
            <span>-</span> 
            <time>{{ shownEvent.t2 | numToTime }}</time>
          </div>
        </div>
        <div>{{ shownEvent.nameOfMonth }}, {{ shownEvent.year }}</div>
        <table>
          <tr>
            <th>Påmeldt:</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Sted:</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Aktivitet:</th>
            <td>{{ shownEvent.category }}</td>
          </tr>
          <tr>
            <th>Ansvarlig:</th>
            <td>0</td>
          </tr>
        </table>
        <div class="description">
          <h3>Beskrivelse</h3>
          <p>{{ shownEvent.description }}</p>
        </div>
        <p>Møt opp!</p>
        <button>Delta</button>
      </div>
    </dialog-overlay>
  </div>
</template>

<style lang="sass">
  .calendar-content {
    --timeblock-height: 5rem;
    position: relative;

    overflow-y: scroll;
    background: var(--module-background);
    display: flex;

    & .event-dialog {

      & > :nth-child(n+3) {
        margin-top: 1.5rem;
      }

      & .event-time-info {
        display: flex;
        align-items: center;
        font-weight: bold;

        & .month-number {
          margin: 0;
          font-size: 4rem;
          margin-right: 1rem;
        }

        & time {
          font-size: 1.5rem;
        }
      }

      & table {

        & th {
          text-align: left;
          font-weight: normal;
        }
      }

      & .description {

        & h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: normal;
        }

        & p {
          margin: 0;
        }
      }

      & button {
        flex: none;
        align-self: flex-start;
        padding: 10px;
        border-radius: 5px;
        background: #009688;
        color: #FFF;
        border: none;
        display: block;

        &:hover {
          cursor: pointer;
        }

        &:active {
          background: #00897B;
        }

      }
    }

    & .today-bar {
      position: absolute;
      z-index: 1;
      height: 4px;
      border-radius: 2px;
      background: var(--theme-red);
      width: 100%;

      &::before {
        content: '';
        position: absolute;
        left: -8px;
        top: -6px;
        background: var(--theme-red);
        border-radius: 50%;
        height: 16px;
        width: 16px;
      }
    }

    & .horizontal-lines hr {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0;
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, .1);
    }

    & .timestamps {
      height: calc(var(--timeblock-height) * 24);
      flex: none;
      width: 4rem;

      & time {
        box-sizing: border-box;
        display: block;
        padding: .25rem .5rem;
        height: var(--timeblock-height);
      }
    }

    & .grid {
      flex: auto;
      display: flex;
      height: calc(var(--timeblock-height) * 24);

      & .grid-column {
        flex: 1 1 0;
        position: relative;

        &:nth-child(odd) { background: rgba(0, 0, 0, .25) }

        & .event-group {
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 .25rem;
          display: flex;
          height: 100%;
          pointer-events: none;

          & .event {
            pointer-events: all;
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            border: 1px solid transparent;
            padding: .25rem;
            border-radius: calc(.25rem + 1px);
            background: var(--theme-blue);
            background-clip: padding-box;
            cursor: default;

            &:hover {
              filter: brightness(1.2);
            }

            &:not(:only-child) {
              & .description { display: none }
            }

            & .event-icon {
              height: 1rem;
              align-self: flex-start;
            }

            & .description {
              margin: .5rem 0;
              color: rgba(255, 255, 255, .75);
              flex: auto;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            & :last-child {
              margin-top: auto;
            }
          }

          &.large-block .event {
            & time {
              display: none;
            }
          }
        }
      }
    }
  }

</style>