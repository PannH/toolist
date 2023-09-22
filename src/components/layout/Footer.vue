<script setup lang="ts"></script>

<template>
   <footer>
      <span>
         © Toolify. All rights reserved.
      </span>
      <div class="circle"></div>
   </footer>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss' as *;

   footer {
      display: flex;
      justify-content: center;
      padding-block: 10px;

      position: fixed;
      bottom: 0;

      width: 100%;

      font-size: 16px;
      color: $gray;

      > .circle {
         background-color: $purple;

         width: 200px;
         aspect-ratio: 1;

         border-radius: 100%;

         position: absolute;

         bottom: 0;
      
         transform: translateY(50%);

         filter: blur(75px);

         z-index: -1;
      }
   }
</style>