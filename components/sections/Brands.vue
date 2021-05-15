<template lang="pug">
  section(v-if="marki" class="md:px-0 py-14 md:py-18").px-4.bg-light
    p(class="text-center uppercase font-bold pb-8") {{ marki.tytul }}
    .grid(class="col-span-2 md:col-span-2 grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 flex justify-item center items-center")
      img(v-if="item.ikona" v-for="(item, index) in brands" :key="index" :src="item.ikona.url"  :alt="item.tytul" class="px-4 md:px-10 lg:px-20")
</template>

<script>
import brandsQuery from '~/apollo/queries/brands'

export default {
  apollo: {
    marki: {
      query: brandsQuery
    }
  },
  computed: {
    brands: function () {
      const keys = Object.keys(this.marki.marka);
      const array = [];

      keys.forEach((key, index) => {
        array.push(this.marki.marka[key])
      });


      return array
    }
  }
}
</script>