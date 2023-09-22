<script setup lang="ts">
   const { variant } = defineProps<{
      variant: 'primary' | 'secondary';
   }>();
</script>

<template>
   <button :class="variant">
      <slot />
   </button>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   button {
      padding: 5px 20px;
      
      border-radius: 50px;
      
      font-size: 16px;

      border: none;

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