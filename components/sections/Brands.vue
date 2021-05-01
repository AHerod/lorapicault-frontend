<template lang="pug">
  section(class="md:px-0 py-14 md:py-18").px-4.grid.grid-cols-2.gap-x-8.bg-light
    .grid(class="col-span-2 md:col-span-2 grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 flex justify-item center items-center")
      img(v-for="(image, index) in items" :key="index" :src="require(`@/assets/images/brands/${image.path}.png`)" class="px-10 lg:px-20")
</template>

<script>
export default {
  data() {
    return {
      items: [
        {path: 'bb', title: ''},
        {path: 'lm', title: ''},
        {path: 'ga', title: ''},
      ]
    }
  }
}
</script>

<style scoped>

</style>
