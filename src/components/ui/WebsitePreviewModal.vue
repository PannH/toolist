<script setup lang="ts">
   import Button from './Button.vue';

   const { title, websiteUrl, display } = defineProps<{
      title: string;
      websiteUrl: string;
      display: 'flex' | 'none';
   }>();

   defineEmits(['closeButtonClick']);
</script>

<template>
   <div class="layer" :style="{ display }"></div>
   <div class="website-preview-modal" :style="{ display }">
      <header>
         <h3>Website Preview</h3>
         <div class="website-url-bar">
            <span>{{ websiteUrl }}</span>
         </div>
         <div class="buttons">
            <Button variant="primary" :to="websiteUrl" :is-external="true">Open Website</Button>
            <Button variant="secondary" @click="$emit('closeButtonClick')">Close</Button>
         </div>
      </header>
      <iframe :src="websiteUrl" frameborder="0"></iframe>
   </div>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .layer {
      background-color: $transparent-black;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 50;

      width: 100%;
      height: 100%;

      animation: fade-in .1s ease-in-out;

      @keyframes fade-in {
         from {
            opacity: 0;
         }

         to {
            opacity: 1;
         }
      }
   }

   .website-preview-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 99;

      width: 80%;
      height: 80%;

      background-color: $dark-gray;
      
      color: $white;

      border: 1px solid $transparent-gray;
      border-radius: 10px;

      padding: 15px;

      display: flex;
      flex-direction: column;
      gap: 20px;

      > header {
         display: flex;
         justify-content: space-between;
         align-items: center;

         > .website-url-bar {
            background-color: $black;

            padding: 5px 20px;

            font-size: 18px;

            border-radius: 5px;

            text-align: center;

            > span {
               font-family: 'Roboto Mono', monospace;
            }
         }

         > .buttons {
            display: flex;
            gap: 15px;
         }
      }

      > iframe {
         height: 100%;

         border-radius: 10px;
      }

      animation: come-up .1s;

      @keyframes come-up {
         from {
            opacity: 0;
         }

         to {
            opacity: 1;
         }
      }
   }
</style>