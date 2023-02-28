<template lang="pug">
  section(class="md:px-0" v-if="list").px-4.grid.grid-cols-2.py-2.gap-x-8.bg-primary.text-white
    .col-span-2.border-dark.border-b.w-full.py-4
      img(:src="require(`@/assets/images/logo.png`)" class="w-72 m-auto")
    .grid(class="col-span-2 grid-cols-2 lg:grid-cols-4 py-10")
      a(v-for="(item,index) in list" class="text-center grid grid-rows-2")
        div(class="bg-dark rounded-full w-14 h-14 mb-6 relative m-auto" v-if="item.ikona")
          img(:src="item.ikona.url" class="w-10 h-10 absolute right-1/2 bottom-1.5")
        h3(class="text-lg md:text-xl pb-2 break-all") {{item.tytul}}
</template>

<script>
import footerQuery from '~/apollo/queries/footer'
// make a separate setting for each item
export default {
  apollo: {
    stopka: {
      query: footerQuery
    }
  },

  computed: {
    list: function () {
      const keys = Object.keys(this.stopka);
      const array = [];

      keys.forEach((key, index) => {
        array.push(this.stopka[key])
      });

      return array
    }
  }
}
</script>

<style scoped>

</style>
