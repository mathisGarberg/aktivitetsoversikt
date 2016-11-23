<script>
  import CalenderNavigation from './calender/Calender-navigation.vue';
  import CalenderContent from './calender/Calender-content.vue';
  
    export default {
      components: {
        CalenderNavigation,
        CalenderContent,
      }
    };
</script>

<template>
    <div class="calender-view">
        <Calender-navigation></Calender-navigation>
        <Calender-content></Calender-content>
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
    
    & .calender-navigation {
      margin-bottom: 1rem;
      flex: none;
    }
    
    & .calender-content {
      flex: auto;
    }
  }
</style>
