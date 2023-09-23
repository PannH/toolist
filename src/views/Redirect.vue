<script setup lang="ts">
   import { useRoute } from 'vue-router';

   const route = useRoute();

   const to = route.query.to as string;

   window.location.href = to;

   document.title = `Toolist | Redirect (${to})`;
</script>

<template>
   <main>
      <h1>Hold on! You are being redirected...</h1>
      <p>
         If not, click here →
         <a :href="to">{{ to }}</a>
      </p>
   </main>
</template>

<style scoped lang="scss">
   @use '../styles/vars.scss'  as *;

   main {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h1 {
         color: $white;
      }

      > p {
         font-size: 18px;
         color: $gray;

         > a {
            font-family: 'Roboto Mono', monospace;
            color: $purple;

            text-decoration: none;

            transition: color .1s;

            &:hover {
               color: $purple-subtle;
            }
         }
      }
   }
</style>