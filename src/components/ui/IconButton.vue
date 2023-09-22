<template>
   <button class="icon-button">
      <slot />
   </button>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss'  as *;

   .icon-button {
      background: none;

      border: none;
      border-radius: 50%;

      display: grid;
      place-items: center;

      color: $white;

      padding: 12px;

      transition: background-color .1s;

      &:hover {
         cursor: pointer;
      
         background-color: $transparent-gray;
      }

      > svg {
         $width: 24px;

         width: $width;
         height: $width;
      }
   }
</style>