<script setup lang="ts">
   import { RouterLink } from 'vue-router';

   const { to } = defineProps<{
      to: string;
   }>();
</script>

<template>
   <RouterLink class="nav-link" :to="to">
      <slot />
   </RouterLink>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss'  as *;

   .nav-link {
      padding: 5px 20px;

      border-radius: 50px;

      text-decoration: none;

      transition: background-color .1s;

      font-size: 16px;
      color: $white;

      &:hover {
         background-color: $transparent-white;
      }
   }
</style>