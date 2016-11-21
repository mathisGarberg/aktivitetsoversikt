<script>
    export default {
    };
</script>

<template>
    <div id="app">
        <nav class="navbar">
            <div class="navbar-brand">Heddal IL</div>
            <div class="navbar-right">
                <div>Kjetil Røise (Trener)</div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style lang="sass">
  :root {
    --module-background: rgba(0, 0, 0, .8);
    --theme-red: #ff5554;
    --theme-blue: #03a9f4;
  }
  
    .navbar {
        color: white;
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
        background-color: rgb(255, 85, 84);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;

        .navbar-brand {
            font-size: 50px;
            text-transform: uppercase;
        }

        .navbar-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 20px;
        }
    }
</style>
