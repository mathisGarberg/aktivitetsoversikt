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

        function checkify(item, index) {
          item.checked = index === 0;
          return item;
        }

        this.categories = categories.data.map(checkify);
        this.maleTeams = maleTeams.data.map(checkify);
        this.femaleTeams = femaleTeams.data.map(checkify);
      },
    },

    mounted() {
      this.fetchData();
    },

    watch: {
      '$route': 'fetchData',
    },
  }
</script>

<template>
  <div class="subscribe">
    <h2>ABONNER</h2>
    <label>
      <h3>Epost</h3>
      <input type="email" placeholder="navn@domene.no">
    </label>
    <details open>
      <summary>FILTERE</summary>
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          <details>
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
        </li>
      </ul>
    </details>
    <details open>
      <summary>TYPE AKTIVITET</summary>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Aktivitet opprettes</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Aktivitet endres</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Aktivitet slettes</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>Andre deltar på aktivitet</p>
          </label>
        </li>
      </ul>
    </details>
  </div>
</template>

<style lang="sass">
  .subscribe {
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