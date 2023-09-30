<script setup lang="ts">
   import NavLink from '../ui/NavLink.vue';
   import IconButton from '../ui/IconButton.vue';
   import BarsIcon from '../icons/Bars.vue';
   import XmarkIcon from '../icons/Xmark.vue';
   import { RouterLink } from 'vue-router';
   import { ref } from 'vue';

   const isOpen = ref<boolean>(false);

   const openButtonDisplay = isOpen.value ? 'none' : 'grid';
   const closeButtonDisplay = isOpen.value ? 'grid' : 'none';

   function openHeader(): void {
      isOpen.value = true;
   }

   function closeHeader(): void {
      isOpen.value = false;
   }
</script>

<template>
   <header :data-open="isOpen">
      <RouterLink class="home-link" to="/">TOOLIST</RouterLink>
      <div class="toggle-buttons">
         <IconButton class="open-button" @click="openHeader()">
            <BarsIcon />
         </IconButton>
         <IconButton class="close-button" @click="closeHeader()">
            <XmarkIcon />
         </IconButton>
      </div>
      <nav>
         <NavLink to="/categories" @click="closeHeader()">
            Categories
         </NavLink>
         <NavLink to="/favorites" @click="closeHeader()">
            Favorites
         </NavLink>
         <!--
            todo: replace the pulls url by an anchor url to a title of the readme 
            that says how to suggest a new tool (idea: contact me on discord)
         -->
         <NavLink to="/redirect?to=https://github.com/PannH/toolist/pulls" target="_blank" @click="closeHeader()">
            Suggestion
         </NavLink>
         <NavLink to="/redirect?to=https://github.com/PannH/toolist" target="_blank" @click="closeHeader()">
            GitHub
         </NavLink>
      </nav>
   </header>
</template>

<style scoped lang="scss">
   @use '../../styles/vars.scss'  as *;

   header {
      background-color: $transparent-white;

      backdrop-filter: blur(7px);

      $margin: 20px;

      position: fixed;
      width: calc(100% - $margin * 2);

      margin: $margin;
      padding: 15px 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1px solid $transparent-gray;
      border-radius: 100px;

      > .home-link {
         font-size: 18px;
         font-weight: bold;

         text-decoration: none;

         color: $white;
      }

      > .toggle-buttons {
         display: none;
      }

      > nav {
         display: flex;
         gap: 10px;
      }

      @media (max-width: 780px) {
         flex-wrap: wrap;

         margin: calc($margin / 2);
         width: calc(100% - $margin);

         > .toggle-buttons {
            display: block;
         }

         > nav {
            width: 100%;

            flex-direction: column;

            text-align: center;
         }

         &[data-open="true"] {
            border-radius: 40px;

            > nav {
               margin-top: 20px;

               display: flex;
            }

            > .toggle-buttons {
               > .open-button {
                  display: none;
               }

               > .close-button {
                  display: grid;
               }
            }
         }

         &[data-open="false"] {
            > nav {
               display: none;
            }

            > .toggle-buttons {
               > .open-button {
                  display: grid;
               }

               > .close-button {
                  display: none;
               }
            }
         }
      }
   }
</style>