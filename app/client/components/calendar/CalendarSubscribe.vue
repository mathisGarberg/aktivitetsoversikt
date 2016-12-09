<script>
  import Cookies from 'js-cookie';

  export default {
    data() {
      return {
      };
    },

    methods: {
      async fetchData() {

      },
    },

    mounted() {
      this.fetchData();
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
      <summary>Jeg vil oppdateres på:</summary>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Langrenn</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Skihopp</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>Skiskyting</p>
          </label>
        </li>
      </ul>
    </details>
    <details open>
      <summary>Oppdater meg når:</summary>
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
    <button class="sub-btn">Abonner</button>
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
    
    & .sub-btn {
      padding: 10px;
      border: none;
      color: #FFF;
      background: #009688;
      border-radius: 5px;
      
      &:hover {
        cursor: pointer;
      }
      
      &:active {
        background: #00897B;
      }
      
    }
    
  }
</style>