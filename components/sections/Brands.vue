<template lang="pug">
  section(class="md:px-0 py-14 md:py-28").px-4.grid.grid-cols-2.gap-x-8.bg-light
    .grid(class="col-span-2 md:col-span-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4")
      div(v-for="(item,index) in items" class="flex flex-col items-center justify-center text-center mb-10")
        img(:src="require(`@/assets/images/icons/makeup_${item.icon}.png`)" class="w-14 h-14 lg:w-16 lg:h-16")
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
