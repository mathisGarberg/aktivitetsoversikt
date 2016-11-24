<script>
  import CalenderNavigation from './calender/CalenderNavigation.vue';
  import CalenderContent from './calender/CalenderContent.vue';
  
    export default {
      components: {
        CalenderNavigation,
        CalenderContent,
      }
    };
</script>

<template>
    <div class="calender-view">
        <calender-navigation></calender-navigation>
        <calender-content></calender-content>
    </div>
</template>

<style lang="sass">
  .calender-view {
    background-image: url('/public/img/fotball-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 4rem;
    box-sizing: border-box;
    max-height: 100%;
    
    & .calender-navigation {
      margin-bottom: 1rem;
      flex: none;
    }
    
    & .calender-content {
      flex: auto;
    }
  }
</style>
