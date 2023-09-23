<script setup lang="ts">
   import Button from '../components/ui/Button.vue';

   document.title = 'Toolist';
</script>

<template>
   <section class="hero-section">
      <div class="texts">
         <h1>
            Elevate Your <span>Web Creativity</span> With Our Digital Toolkit
         </h1>
         <p>
            Discover a curated collection of web development tools such as color palette
            websites, frameworks, icon libraries, free-to-use image stocks, and more. Plus,
            our project is open-source on GitHub and we welcome your suggestions!
         </p>
      </div>
      <div class="buttons">
         <Button variant="primary" to="/categories">
            Explore Categories
         </Button>
         <Button variant="secondary" to="/redirect?to=https://github.com/PannH/toolist" target="_blank">
            GitHub Repository
         </Button>
      </div>
   </section>
</template>

<style scoped lang="scss">
   @use '../styles/vars.scss' as *;

   .hero-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      height: 100%;

      > .texts {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         gap: 10px;

         > * {
            text-align: center;
         }

         > h1 {
            color: $white;
            font-weight: bold;

            > span {
               color: $purple;
            }
         }

         > p {
            font-size: 18px;
            color: $gray;

            width: 715px;
         }

         @media (max-width: 1100px) {
            > h1,
            > p {
               width: 90vw;
            }
         }
      }

      > .buttons {
         display: flex;
         gap: 20px;

         @media (max-width: 460px) {
            flex-direction: column;
         }
      }
   }
</style>