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
          const checked = Cookies.get(`categories.${item.id}`) === 'true';
          item.checked = checked;
          return item;
        });

        this.maleTeams = maleTeams.data.map(item => {
          const checked = Cookies.get(`maleTeams.${item.id}`) === 'true';
          item.checked = checked;
          return item;
        });

        this.femaleTeams = femaleTeams.data.map(item => {
          const checked = Cookies.get(`femaleTeams.${item.id}`) === 'true';
          item.checked = checked;
          return item;
        });
      },
    },

    watch: {
      categories: {
        handler(val, oldVal) {
          val.forEach(category => {
            Cookies.set(`categories.${category.id}`, category.checked);
          });
        },
        deep: true,
      },
      maleTeams: {
        handler(val, oldVal) {
          val.forEach(maleTeam => {
            Cookies.set(`maleTeams.${maleTeam.id}`, maleTeam.checked);
          });
        },
        deep: true,
      },
      femaleTeams: {
        handler(val, oldVal) {
          val.forEach(femaleTeam => {
            Cookies.set(`femaleTeams.${femaleTeam.id}`, femaleTeam.checked);
          });
        },
        deep: true,
      },
    },

    computed: {
      selectedCategoryIds() {
        return this.categories.filter(category => category.checked).map(category => category.id);
      },

      filteredMaleTeams() {
        return this.maleTeams.filter(maleTeam => !!~this.selectedCategoryIds.indexOf(maleTeam.category_id));
      },

      filteredFemaleTeams() {
        return this.femaleTeams.filter(femaleTeam => !!~this.selectedCategoryIds.indexOf(femaleTeam.category_id));
      },

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
    <details open>
      <summary>FILTERE</summary>
      <ul>
        <li>
          <details open>
            <summary>SPORT</summary>
            <ul>
              <li v-for="category in categories">
                <label>
                  <input type="checkbox" v-model="category.checked">
                  <p>{{ category.name }}</p>
                </label>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>LAG - GUTTER</summary>
            <ul>
              <li v-for="maleTeam in filteredMaleTeams">
                <label>
                  <input type="checkbox" v-model="maleTeam.checked">
                  <p>{{ maleTeam.gender }}{{ maleTeam.year }} {{ maleTeam.category }}</p>
                </label>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>LAG - JENTER</summary>
            <ul>
              <li v-for="femaleTeam in filteredFemaleTeams">
                <label>
                  <input type="checkbox" v-model="femaleTeam.checked">
                  <p>{{ femaleTeam.gender }}{{ femaleTeam.year }} {{ femaleTeam.category }}</p>
                </label>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </div>
</template>

<style lang="sass">
  .filters {
    overflow: auto;
    flex: auto;
    padding: 0 1rem;

    & h2 {
      font-size: 1.5rem;
      line-height: calc(4 / 1.5);
      margin: 0;
    }

    & h3 {
      font-size: 1rem;
      line-height: inherit;
      margin: 0;
      padding: .5rem 0;
      font-weight: normal;
    }
    
    & input[type="email"] {
      padding: .5rem;
      width: 100%;
      border: none;
      box-sizing: border-box;
      font: inherit;
    }

    & > :nth-child(n+2) {
      margin-top: 1rem;
    }

    & details {

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