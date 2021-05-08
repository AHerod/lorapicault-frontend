<template lang="pug">
  section(class="md:px-0 py-14 md:py-18").px-4.bg-light
    p(class="text-center uppercase font-bold pb-8") W swojej pracy wykorzystuję wyłącznie produkty selektywnych marek m.in:
    .grid(class="col-span-2 md:col-span-2 grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 flex justify-item center items-center")
      img(v-for="(image, index) in items" :key="index" :src="require(`@/assets/images/brands/${image.path}`)" class="px-4 md:px-10 lg:px-20")
</template>

<script>
export default {
  data() {
    return {
      items: [
        {path: 'bb.png', title: ''},
        {path: 'ga.png', title: ''},
        {path: 'lm.png', title: ''},
        {path: 'el.png', title: ''},
        {path: 'tf.png', title: ''},
        {path: 'nd.webp', title: ''},
      ]
    }
  }
}
</script>

<style scoped>

</style>
