<template lang="pug">
  section(class="md:px-0 py-14 md:py-28").px-4.grid.grid-cols-2.gap-x-8
    .flex.flex-col.items-center.justify-center(class="col-span-2 md:col-span-2")
      h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") {{atuty.tytul}}
      p(class="text-lg text-center md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{atuty.opis}}
    .grid(class="col-span-2 md:col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4")
      div(v-for="(item,index) in atuty.element" :key="index" class="flex flex-col items-center justify-center text-center mb-10")
        div(class="bg-secondary rounded-full w-20 h-20 lg:w-24 lg:h-24 mb-6 relative")
            img(:src="item.ikona.url" class="w-14 h-14 lg:w-16 lg:h-16 absolute right-1/2 bottom-1/4")
        h3(class="font-bold text-xl pb-2") {{item.tytul}}
        p(class="w-2/3") {{item.opis}}
</template>

<script>
import benefitsQuery from '~/apollo/queries/benefits'

export default {
  data() {
    return {
      items: [
        {title: 'ALWAYS BEAUTIFUL EYES', info: 'Experienced craftsmen, modern technologies, consultation.', icon: 1},
        {title: 'NO MORE MAKEUP', info: 'With extended eyelashes you can walk up to 4 weeks.', icon: 2},
        {title: 'HYPOALLERGENIC', info: 'Work without gluing, warranty, premium materials.', icon: 3},
        {title: 'YOU CAN SWIM IN THE SEA', info: 'We are distinguished by an individual approach to each client', icon: 4}
      ]
    }
  },
  apollo: {
    atuty: {
      query: benefitsQuery
    }
  },
}
</script>

<style scoped>

</style>
