<script setup lang="ts">
   import CounterTitle from '../components/ui/CounterTitle.vue';
   import CategoryCard from '../components/ui/CategoryCard.vue';
   import categories from '../assets/data/categories.json';
</script>

<template>
   <main>
      <CounterTitle :count="categories.length">Categories</CounterTitle>
      <div class="cards-container">
         <CategoryCard
            v-for="category of categories"
            :title="category.title"
            :description="category.description"
            :slug="category.slug"
            :emoji-name="category.emojiName"
            :elements-count="category.elements.length"
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

      > .cards-container {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 20px;
         flex-wrap: wrap;
         
         margin: 50px;

         @media (max-width: 490px) {
            > .category-card {
               width: 95vw;
            }
         }
      }
   }
</style>