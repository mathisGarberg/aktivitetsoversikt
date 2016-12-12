<script>
  export default {

  };
</script>

<template>
  <main>
    <div class="info-content">
       <div class="app-usage">
         <p>Denne løsningen er utviklet av en gruppe studenter ved NTNU i Gjøvik.</p>
         <p>Formålet med denne applikasjonen er å:</p>
         <ul>
           <li>Skape en oversikt over alle aktivitetene som foregår innenfor Heddal IL til enhver tid</li>
           <li>Kunne tilpasse din egen kalender og abonnere på denne</li>
           <li>Sende og motta informasjon om kommende aktiviteter og andre arrangementer</li>
           <li>Kunne delta på ulike aktiviteter og samtidig gi treneren oversikt over hvem som kommer</li>
         </ul>
       </div>
    </div>
  </main>
</template>

<style lang="sass">
  
  .info-content {
    display: flex;
    max-width: 20rem;
    
    & .app-usage {
      width: 100%;
      
      & li {
        margin-top: .5rem;
      }
      
    }
    
  }
  
</style>