<script>
  export default {

  }
</script>


<template>
  <div class="filters">
    <h2>FILTERE</h2>
    <details open>
      <summary>SPORT</summary>
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
            <input type="checkbox">
            <p>Skihopp</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>Skiskyting</p>
          </label>
        </li>
      </ul>
    </details>
    <details>
      <summary>LAG - GUTTER</summary>
      <ul>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>G13 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>G13 Langrenn</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>G14 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>G14 Langrenn</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>G15 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>G15 Langrenn</p>
          </label>
        </li>
      </ul>
    </details>
    <details open>
      <summary>LAG - JENTER</summary>
      <ul>
        <li>
          <label>
            <input type="checkbox">
            <p>J13 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>J13 Langrenn</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>J14 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>J14 Langrenn</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" checked>
            <p>J15 Fotball</p>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox">
            <p>J15 Langrenn</p>
          </label>
        </li>
      </ul>
    </details>
  </div>
</template>


<style lang="sass">
  .filters {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    & h2 {
      flex: none;
      font-size: 1.5rem;
      line-height: calc(4 / 1.5);
      margin: 0;
    }

    & details {
      overflow: hidden;
      flex: 0 1 auto;
      display: flex;

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