<script setup lang="ts">
   import { RouterLink } from 'vue-router';

   const { variant, to, isExternal } = defineProps<{
      variant: 'primary' | 'secondary';
      to?: string;
      isExternal?: boolean;
   }>();
</script>

<template>
   <RouterLink v-if="to" :to="to" :target="isExternal ? '_blank' : ''" :class="`button ${variant}`">
      <slot />
   </RouterLink>
   <button v-else :class="`button ${variant}`">
      <slot />
   </button>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .button {
      padding: 5px 20px;
      
      border-radius: 50px;
      
      font-size: 16px;

      border: none;

      text-decoration: none;

      transition: background-color .1s;

      &:hover {
         cursor: pointer;
      }

      &.primary {
         background-color: $purple;
         color: $white;

         &:hover {
            background-color: $purple-subtle;
         }
      }

      &.secondary {
         background: none;

         border: 1px solid $purple;
         color: $purple;

         &:hover {
            background-color: $transparent-purple;
         }
      }
   }
</style>