<script setup lang="ts">
   import { ref } from 'vue';
   import WebsitePreviewModal from './WebsitePreviewModal.vue';
   import IconButton from './IconButton.vue';
   import StarIcon from '../icons/Star.vue';

   const { slug, title, description, websiteUrl, categorySlug } = defineProps<{
      slug: string;
      title: string;
      description: string;
      websiteUrl: string;
      categorySlug: string;
   }>();


   const favoriteToolsJSON = localStorage.getItem('favorite_tools') ?? '[]';
   console.log(favoriteToolsJSON);
   console.log(JSON.parse(favoriteToolsJSON).includes(slug));
   const isFavorite = ref<boolean>(JSON.parse(favoriteToolsJSON).includes(slug));

   const isModalOpen = ref<boolean>(false);

   function openModal(): void {
      isModalOpen.value = true;
   }

   function closeModal(): void {
      isModalOpen.value = false;
   }

   function handleFavoriteClick(): void {

      const favoriteToolsJSON = localStorage.getItem('favorite_tools') ?? '[]';
      const favoriteTools = JSON.parse(favoriteToolsJSON);

      if (favoriteTools?.includes(slug)) {

         const newFavoriteTools = favoriteTools.filter((toolSlug: string) => toolSlug !== slug);

         localStorage.setItem('favorite_tools', JSON.stringify(newFavoriteTools));

         isFavorite.value = false;

      } else {

         const newFavoriteTools = [...favoriteTools, slug];

         localStorage.setItem('favorite_tools', JSON.stringify(newFavoriteTools));

         isFavorite.value = true;

      }

   }
</script>

<template>
   <WebsitePreviewModal
      :title="title"
      :website-url="websiteUrl"
      :display="isModalOpen ? 'flex' : 'none'"
      @close-button-click="closeModal()"
   />
   <div class="tool-card" @click="openModal()">
      <header>
         <div class="title">
            <img loading="lazy" :src="`../images/logos/${categorySlug}/${slug}.png`" :alt="slug.replace(/-/g, ' ')">
            <h3>{{ title }}</h3>
         </div>
         <IconButton @click.stop="handleFavoriteClick()">
            <StarIcon :fill="isFavorite ? '#da9c02' : 'transparent'" :stroke="isFavorite ? '#da9c02' : 'currentColor'" />
         </IconButton>
      </header>
      <main>
         <p>{{ description }}</p>
      </main>
   </div>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .tool-card {
      width: 450px;

      background-color: $dark-gray;

      border: 1px solid $transparent-gray;
      border-radius: 10px;

      padding: 15px;

      display: flex;
      flex-direction: column;

      transition: border-color .1s;

      align-self: stretch;

      @media (max-width: 480px) {
         width: 95vw;
      }

      &:hover {
         border-color: $purple;
         
         cursor: pointer;
      }

      > header {
         display: flex;
         justify-content: space-between;
         align-items: center;

         > .title {
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

         > .icon-button {
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