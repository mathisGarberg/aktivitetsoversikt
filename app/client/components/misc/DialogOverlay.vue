<script>
  export default {
  }
</script>

<template>
  <div class="dialog-overlay">
    <div class="dialog-content">
      <div class="window-bar">
        <h3>
          <slot name="title"></slot>
        </h3>
        <button class="close" @click="$emit('close')">
          <i class="material-icons">close</i>
        </button>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @keyframes fade-in {
    from { opacity: 0 }
  }

  @keyframes animate-up {
    from { transform: translateY(4rem) }
  }

  .dialog-overlay {
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);
    animation: fade-in .5s;

    & .dialog-content {
      background: white;
      color: black;
      height: auto;
      width: 25rem;
      max-height: 90%;
      max-width: 90%;
      padding: 1rem;
      animation: animate-up .5s;
      display: flex;
      flex-direction: column;
      border-radius: .25rem;
      overflow: hidden;

      & .window-bar {
        flex: none;
        display: flex;
        height: 2rem;
        justify-content: space-between;

        & h3 {
          font-size: 1.2rem;
          font-weight: normal;
          align-self: center;
          margin: 0 .5rem;
        }

        & .close {
          border: none;
          background: none;
          width: 2rem;
          display: block;
          justify-content: center;
          align-items: center;
          
          &:hover {
            color: var(--theme-red);
          }

          & .material-icons {
            font-size: 1rem;
          }
        }
      }

      & .content {
        padding: 1.5rem;
        overflow-y: auto;
        display: flex;

        & > div {
          flex: auto;
        }
      }
    }
  }
</style>