<script setup lang="ts">
   import CounterTitle from '../components/ui/CounterTitle.vue';
   import CategoryCard from '../components/ui/CategoryCard.vue';
</script>

<template>
   <main>
      <CounterTitle :count="16">Categories</CounterTitle>
      <div class="cards-container">
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
         <CategoryCard
            emoji-name="hammer-and-wrench"
            title="Frameworks"
            description="Explore ready-made solutions to speed up the creation of interactive and high-performance websites."
            :elements-count="12"
            slug="frameworks"
         />
      </div>
   </main>
</template>

<style scoped lang="scss">
   @use '../styles/vars.scss' as *;

   main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding-block: 150px;

      > .cards-container {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 20px;
         flex-wrap: wrap;
         
         margin: 50px;
      }
   }
</style>