<script setup lang="ts">
   const { count } = defineProps<{
      count: number;
   }>();
</script>

<template>
   <h1 class="counter-title">
      <slot />
      <div class="count">{{ count }}</div>
   </h1>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   .counter-title {
      color: $white;
      font-weight: 500;

      display: flex;

      > .count {
         color: $gray;
         font-size: 18px;

         padding-inline: 5px;
      }
   }
</style>