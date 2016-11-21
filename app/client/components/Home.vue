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
    <div>
        <h1>Home</h1>
        <Calender-navigation></Calender-navigation>
        <Calender-content></Calender-content>
    </div>
</template>

<style lang="sass">
    
</style>
