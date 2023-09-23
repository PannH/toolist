<script setup lang="ts">
   import { useRouter } from 'vue-router';

   const { emojiName, title, description, elementsCount, slug } = defineProps<{
      emojiName: string;
      title: string;
      description: string;
      elementsCount: number;
      slug: string;
   }>();

   const router = useRouter();

   function pushRouter(): void {

      router.push(`/category/${slug}`);

   }
</script>

<template>
   <div class="category-card" @click="pushRouter()">
      <header>
         <img loading="lazy" :src="`emojis/${emojiName}.png`" :alt="emojiName.replace(/-/g, ' ')">
         <h3>{{ title }}</h3>
      </header>
      <main>
         <p>{{ description }}</p>
         <small>{{ elementsCount }} elements</small>
      </main>
   </div>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .category-card {
      width: 450px;

      background-color: $dark-gray;

      border: 1px solid $transparent-gray;
      border-radius: 10px;

      padding: 15px;

      display: flex;
      flex-direction: column;

      transition: border-color .1s;

      &:hover {
         border-color: $purple;
         
         cursor: pointer;
      }

      > header {
         display: flex;
         align-items: center;
         gap: 10px;

         > img {
            width: 30px;
         }
         
         > h3 {
            font-weight: 600;
            color: $white;
         }
      }

      > main {
         display: flex;
         flex-direction: column;
         gap: 5px;

         font-size: 18px;
         color: $gray;
      }
   }
</style>