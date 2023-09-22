<script setup lang="ts">
   const { logoName, title, description } = defineProps<{
      logoName: string;
      title: string;
      description: string;
   }>();
</script>

<template>
   <div class="tool-card">
      <header>
         <img loading="lazy" :src="`../src/assets/images/logos/${logoName}.png`" :alt="logoName.replace(/-/g, ' ')">
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