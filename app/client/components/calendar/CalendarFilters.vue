<script>
  import Cookies from 'js-cookie';

  export default {
    data() {
      return {
        categories: [],
        maleTeams: [],
        femaleTeams: [],
      };
    },

    methods: {
      async fetchData() {
        const categories = await this.$http.get('/event/category');
        const maleTeams = await this.$http.get('/event/team/male');
        const femaleTeams = await this.$http.get('/event/team/female');

        this.categories = categories.data.map(item => {
          item.checked = true;
          return item;
        });

        this.maleTeams = maleTeams.data.map(item => {
          item.checked = true;
          return item;
        });

        this.femaleTeams = femaleTeams.data.map(item => {
          item.checked = true;
          return item;
        });
      },
    },

    computed: {
      teams() {
        return this.maleTeams.concat(this.femaleTeams);
      },
    },

    mounted() {
      this.fetchData();
    },
  }
</script>

<template>
  <div class="filters">
    <h2>FILTERE</h2>
    <details open>
      <summary>SPORT</summary>
      <ul>
        <li v-for="category in categories">
          <label>
            <input type="checkbox" :checked="category.checked">
            <p>{{ category.name }}</p>
          </label>
        </li>
      </ul>
    </details>
    <details>
      <summary>LAG - GUTTER</summary>
      <ul>
        <li v-for="maleTeam in maleTeams">
          <label>
            <input type="checkbox" :checked="maleTeam.checked">
            <p>{{ maleTeam.gender }}{{ maleTeam.year }} {{ maleTeam.category }}</p>
          </label>
        </li>
      </ul>
    </details>
    <details open>
      <summary>LAG - JENTER</summary>
      <ul>
        <li v-for="femaleTeam in femaleTeams">
          <label>
            <input type="checkbox" :checked="femaleTeam.checked">
            <p>{{ femaleTeam.gender }}{{ femaleTeam.year }} {{ femaleTeam.category }}</p>
          </label>
        </li>
      </ul>
    </details>
  </div>
</template>


<style lang="sass">
  .filters {
    overflow: auto;
    padding: 0 1rem;

    & h2 {
      font-size: 1.5rem;
      line-height: calc(4 / 1.5);
      margin: 0;
    }

    & details {

      &:nth-of-type(n+2) {
        margin-top: 1rem;
      }

      & summary {
        display: block;
        padding: .5rem 0;
        cursor: default;

        &:hover {
          background: #333;
        }
      }

      & ul {
        margin: 0;
        overflow-y: auto;
        overflow-x: hidden;
        border: 2px solid #333;
        padding: .5rem;
        list-style: none;

        & label {
          display: flex;
          align-items: center;

          &:hover {
            background: #333;
          }

          & p {
            margin: .5rem;
          }

          & input:not(:checked) + p {
            color: var(--theme-red);
            text-decoration: line-through;
          }
        }
      }
    }
  }
</style>