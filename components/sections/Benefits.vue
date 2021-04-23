<template lang="pug">
  section(class="md:px-0").px-4.grid.grid-cols-2.py-28.gap-x-8
    .flex.flex-col.items-center.justify-center(class="col-span-2 md:col-span-2")
      h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") We love what we do
      p(class="text-lg text-center md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") It is better to be a good specialist in one business than an average in several. Our eyelash studio knows about it like no other.
    .grid(class="col-span-2 md:col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4")
      div(v-for="item in items" class="flex flex-col items-center justify-center text-center mb-10")
        div(class="bg-secondary rounded-full w-20 h-20 mb-6")
        h3(class="font-bold text-xl pb-2") {{item.title}}
        p(class="w-2/3") {{item.info}}

</template>

<script>
export default {
  data() {
    return {
      items: [
        {title: 'ALWAYS BEAUTIFUL EYES', info: 'Experienced craftsmen, modern technologies, consultation.', icon: null},
        {title: 'NO MORE MAKEUP', info: 'With extended eyelashes you can walk up to 4 weeks.', icon: null},
        {title: 'HYPOALLERGENIC', info: 'Work without gluing, warranty, premium materials.', icon: null},
        {title: 'YOU CAN SWIM IN THE SEA', info: 'We are distinguished by an individual approach to each client', icon: null}
      ]
    }
  }
}
</script>

<style scoped>

</style>
