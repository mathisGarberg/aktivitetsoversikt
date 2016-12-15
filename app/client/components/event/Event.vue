<script>
  import moment from 'moment';

  export default {
    data() {
      return {
        categories: [],
        categoryId: null,
        teams: [],
        teamId: null,
        minDate: moment().format('YYYY-MM-DD'),
        date: moment().add(1, 'day').format('YYYY-MM-DD'),
        startTime: '16:00',
        endTime: '20:00',
        description: '',
      };
    },

    watch: {
      categoryId(val, oldVal) {
        this.fetchTeams(val);
      },
    },

    methods: {
      async fetchCategories() {
        const categories = await this.$http.get('/event/category');

        this.categories = categories.data;
      },

      async fetchTeams(categoryId) {
        const teams = await this.$http.get(`/event/team/category/${categoryId}`);

        this.teams = teams.data;
      },

      async submit() {
        const team_id = this.teamId;
        const t1 = moment(`${this.date} ${this.startTime}`).toDate();
        const t2 = moment(`${this.date} ${this.endTime}`).toDate();
        const description = this.description;

        await this.$http.post('/event/add', {
          team_id,
          t1,
          t2,
          description,
        });

        this.eventHub.$emit('event added');
        this.$emit('close');
      },
    },

    mounted() {
      this.fetchCategories();
    },
  };
</script>

<template>
  <main>
    <form class="event-form" @submit.prevent="submit">
      <label>
        <h3>Velg en sport</h3>
        <select v-model="categoryId">
          <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
        </select>
      </label>
      <label v-if="teams.length > 0">
        <h3>Velg et lag</h3>
        <select v-model="teamId">
          <option v-for="team in teams" :value="team.id">{{ team.gender }}{{ team.year }}</option>
        </select>
      </label>
      <label>
        <input type="date" v-model="date" min="minDate">
      </label>
      <div class="set-time">
        <label>
          <input type="time" v-model="startTime">
        </label>
        <label>
          <input type="time" v-model="endTime">
        </label>
      </div>
      
      <label>
        <h3>Beskrivelse (max 100 ord):</h3>
        <textarea rows="5" maxlength="100" placeholder="I dag skal vi..." v-model="description"></textarea>
      </label>

      <input type="submit" v-if="teamId" class="create-event" value="OPPRETT" />
  </form>
  </main>
</template>

<style lang="sass">
  .event-form {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
  
    & > :nth-child(n+2) {
      margin-top: 1rem;
    }

    & .create-event {
      padding: 10px 20px 10px 20px;
      border-radius: 5px;
      background: #009688;
      color: #FFF;
      border: none;
      display: block;
      font-weight: bold;
    
      &:hover {
        cursor: pointer;
      }

      &:active {
        background: #00897B;
      }
    }
  
    & > label {
      display: block;
      width: 100%;

      & h3 {
        margin: 0;
        font-size: 1rem;
      }

      & input {
        width: 100%;
        font: inherit;
        box-sizing: border-box;
        border: 2px solid #eaeaea;
        padding: .5em;
        border-radius: .25rem;
      }

      & textarea {
        min-width: 100%;
        box-sizing: border-box;
        border: 2px solid #eaeaea;
        padding: .5em;
        border-radius: .25rem;
      }
    }
  
    & .set-time {
      display: flex;

        & > label {
          display: flex;

          & input {
            width: 100%;
            font: inherit;
            box-sizing: border-box;
            border: 2px solid #eaeaea;
            padding: .3em;
            border-radius: .25rem;
            margin-right: 1em;
          }
        }
    }
  }
</style>