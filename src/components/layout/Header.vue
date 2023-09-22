<script setup lang="ts">
   import NavLink from '../ui/NavLink.vue';
   import { RouterLink } from 'vue-router';
</script>

<template>
   <header>
      <RouterLink class="home-link" to="/">TOOLIST</RouterLink>
      <nav>
         <NavLink to="/categories">
            Categories
         </NavLink>
         <NavLink to="/suggestion">
            Suggestion
         </NavLink>
         <NavLink to="/github">
            GitHub
         </NavLink>
      </nav>
   </header>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss'  as *;

   header {
      background-color: $transparent-white;

      backdrop-filter: blur(7px);

      $margin: 20px;

      position: fixed;
      width: calc(100% - $margin * 2);

      margin: $margin;
      padding: 15px 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1px solid $transparent-gray;
      border-radius: 100px;

      > .home-link {
         font-size: 18px;
         font-weight: bold;

         text-decoration: none;

         color: $white;
      }

      > nav {
         display: flex;
         gap: 10px;
      }
   }
</style>