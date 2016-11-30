<script>
  import _ from 'lodash';

  function pad(n) {
    return n > 9 ? n : `0${n}`;
  }

  export default {
    data() {
      return {
        events: [
          { day: 1, t1: 16, t2: 19 },
          { day: 1, t1: 19, t2: 20 },
          { day: 1, t1: 18, t2: 20 },
          { day: 1, t1: 21.25, t2: 23 },
          { day: 3, t1: 17, t2: 18 },
          { day: 3, t1: 20, t2: 24 },
          { day: 3, t1: 21, t2: 23 },
          { day: 1, t1: 16, t2: 18 },
          { day: 4, t1: 16, t2: 19 },
          { day: 2, t1: 15, t2: 19 },
          { day: 5, t1: 20, t2: 21 },
          { day: 5, t1: 21, t2: 23 },
        ],
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

    mounted() {
      console.log('hi');
    }
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
        <div class="event-group"
             v-for="group in groups"
             v-if="group[0].day === n">
          <div class="event"
               v-for="event in group"
               :style="event.styles">
            <time>{{ event.t1 | numToTime }}</time>
            <p class="description">desc.</p>
            <time>{{ event.t2 | numToTime }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .calendar-content {
    --timeblock-height: 4rem;

    overflow-y: scroll;
    background: var(--module-background);
    display: flex;

    & .timestamps {
      padding: 1rem 0;
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
      padding: 1rem .5rem;
      flex: auto;
      display: flex;
      height: calc(var(--timeblock-height) * 24);

      & .grid-column {
        flex: 1 1 0;
        position: relative;
        
        &:nth-child(odd) { background: rgba(0, 0, 0, .25) }

        & .event-group {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0 .25rem;
          display: flex;
          height: 100%;

          & .event {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            border: 1px solid black;
            padding: .25rem;
            border-radius: .25rem;
            background: var(--theme-blue);

            &:not(:only-child) {
              & .description { display: none }
            }

            & .description {
              margin: 0;
            }

            & :last-child {
              margin-top: auto;
            }
          }
        }
      }
    }
  }

</style>