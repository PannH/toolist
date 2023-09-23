<script setup lang="ts">
   import CounterTitle from '../components/ui/CounterTitle.vue';
   import ToolCard from '../components/ui/ToolCard.vue';
   import { useRoute, useRouter } from 'vue-router';
   import categories from '../assets/data/categories.json';

   const router = useRouter();
   const route = useRoute();
   const categorySlug = route.params.slug as string;

   const category = categories.find(category => category.slug === categorySlug);

   if (!category)
      router.push('/');
</script>

<template>
   <main>
      <header>
         <img :src="`../images/emojis/${category?.emojiName}.png`" :alt="category?.emojiName.replace(/-/g, ' ')">
         <CounterTitle :count="category?.elements.length ?? 0">
            {{ category?.title }}
         </CounterTitle>
      </header>
      <div class="cards-container">
         <ToolCard
            v-for="element of category?.elements"
            :title="element.title"
            :description="element.description"
            :logoName="element.logoName"
            :websiteUrl="element.websiteUrl"
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