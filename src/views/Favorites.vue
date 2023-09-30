<script setup lang="ts">
   import CounterTitle from '../components/ui/CounterTitle.vue';
   import ToolCard from '../components/ui/ToolCard.vue';
   import categories from '../assets/data/categories.json';

   const sampleElement = categories[0].elements[0];
   const allTools: { categorySlug: string; element: typeof sampleElement }[] = [];

   for (const category of categories) {

      for (const element of category.elements) {

         allTools.push({
            categorySlug: category.slug,
            element,
         });

      }

   }
   
   const favoriteToolSlugsJSON = localStorage.getItem('favorite_tools') ?? '[]';
   const favoriteToolSlugs = JSON.parse(favoriteToolSlugsJSON);

   const favoriteTools = allTools.filter((tool) => favoriteToolSlugs.includes(tool.element.slug));

   document.title = 'Toolist | Favorites';
</script>

<template>
   <main>
      <header>
         <img :src="`../images/emojis/star.png`" alt="star">
         <CounterTitle :count="favoriteTools.length">
            Favorites
         </CounterTitle>
      </header>
      <div class="cards-container">
         <ToolCard
            v-for="tool of favoriteTools"
            :title="tool.element.title"
            :description="tool.element.description"
            :slug="tool.element.slug"
            :websiteUrl="tool.element.websiteUrl"
            :categorySlug="tool.categorySlug ?? ''"
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