<script setup lang="ts">
   import CounterTitle from '../components/ui/CounterTitle.vue';
   import ToolCard from '../components/ui/ToolCard.vue';
   import { useRoute } from 'vue-router';
   import categories from '../assets/data/categories.json';

   const route = useRoute();
   const categorySlug = route.params.slug as string;

   const elements = categories.find((category) => category.slug === categorySlug)?.elements;
</script>

<template>
   <main>
      <header>
         <img src="../assets/images/emojis/hammer-and-wrench.png" alt="hammer and wrench">
         <CounterTitle :count="elements?.length ?? 0">
            Frameworks
         </CounterTitle>
      </header>
      <div class="cards-container">
         <ToolCard
            v-for="element of elements"
            :title="element.title"
            :description="element.description"
            :logoName="element.logoName"
         />
      </div>
   </main>
</template>

<style scoped lang="scss">
   @use '../styles/vars.scss' as *;

   main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding-block: 150px;

      > header {
         display: flex;
         align-items: center;
         gap: 10px;

         > img {
            width: 50px;
            height: 50px;
         }
      }

      > .cards-container {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 20px;
         flex-wrap: wrap;
         
         margin: 50px;
      }
   }
</style>