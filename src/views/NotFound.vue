<script setup lang="ts">
   import Button from '../components/ui/Button.vue';
</script>

<template>
   <main>
      <div class="texts">
         <h1>Oops! This page does not seem to exist...</h1>
         <p>
            But do not panic, you can return to the home page using the button below.
         </p>
      </div>
      <Button variant="primary" to="/">Return to home page</Button>
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
      gap: 20px;

      > .texts {
         text-align: center;
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
   }
</style>