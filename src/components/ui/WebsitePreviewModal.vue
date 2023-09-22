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
   <div class="layer" :style="{ display }" @click="$emit('closeButtonClick')"></div>
   <div class="website-preview-modal" :data-open="display === 'flex'" :style="{ display }">
      <header>
         <h3>Website Preview</h3>
         <div class="website-url-bar">
            <span>{{ websiteUrl }}</span>
         </div>
         <div class="buttons">
            <Button variant="primary" :to="`/redirect?to=${websiteUrl}`" :is-external="true">Open Website</Button>
            <Button variant="secondary" @click="$emit('closeButtonClick')">Close</Button>
         </div>
      </header>
      <iframe :src="websiteUrl" frameborder="0"></iframe>
      <footer>
         <p>
            If the website does not display, it means that it does not authorize our connection.
         </p>
      </footer>
   </div>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .layer {
      background-color: rgba($black, .75);

      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 50;

      width: 100%;
      height: 100%;

      animation: fade-in .1s ease-in-out;
   }

   .website-preview-modal {
      position: fixed;
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

      @media (max-width: 1100px) {
         width: 90%;
         height: 90%;
         
         > header {
            flex-wrap: wrap;

            > .buttons {
               width: 100%;

               margin-top: 10px;
            }
         }
      }

      @media (max-width: 675px) {
         > header {
            > h3 {
               text-align: center;
            }

            > * {
               width: 100%;
            }

            > .website-url-bar {
               margin-top: 10px;
            }

            > .buttons {
               margin-top: 20px;

               flex-direction: column;

               text-align: center;
            }
         }
      }

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

      > footer {
         > p {
            font-size: 16px;
            color: $gray;

            text-align: center;
         }
      }

      animation: fade-in .1s;

      @keyframes fade-in {
         from {
            opacity: 0;
         }

         to {
            opacity: 1;
         }
      }
   }
</style>