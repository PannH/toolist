<script setup lang="ts">
   import { ref } from 'vue';
   import WebsitePreviewModal from './WebsitePreviewModal.vue';

   const { logoName, title, description, websiteUrl } = defineProps<{
      logoName: string;
      title: string;
      description: string;
      websiteUrl: string;
   }>();

   const isModalOpen = ref<boolean>(false);

   function openModal(): void {
      isModalOpen.value = true;
   }

   function closeModal(): void {
      isModalOpen.value = false;
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
         <img loading="lazy" :src="`../images/logos/frameworks/${logoName}.png`" :alt="logoName.replace(/-/g, ' ')">
         <h3>{{ title }}</h3>
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