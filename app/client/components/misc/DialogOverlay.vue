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
      height: 32rem;
      width: 32rem;
      max-height: 90%;
      max-width: 90%;
      animation: animate-up .5s;
      display: flex;
      flex-direction: column;

      & .window-bar {
        flex: none;
        display: flex;
        height: 2rem;
        justify-content: space-between;
        
        & h3 {
          font-size: 1rem;
          font-weight: normal;
          align-self: center;
          margin: 0 .5rem;
        }

        & .close {
          border: none;
          background: #e6e6e6;
          width: 2rem;
          display: block;
          justify-content: center;
          align-items: center;
          
          & .material-icons {
            font-size: 1rem;
          }
        }
      }

      & .content {
        flex: auto;
      }
    }
  }
</style>