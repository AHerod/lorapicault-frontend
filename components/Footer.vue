<template lang="pug">
  section(class="md:px-0").px-4.grid.grid-cols-2.py-2.gap-x-8.bg-primary.text-white
    .col-span-2.border-dark.border-b.w-full.py-4
      img(:src="require(`@/assets/images/logo_placeholder.png`)" class="w-72 m-auto")
    .grid(class="col-span-2 grid-cols-2 lg:grid-cols-4 py-10")
      a(v-for="(item,index) in items" class="text-center  grid grid-rows-2")
        div(class="bg-heavy rounded-full w-14 h-14 mb-6 relative m-auto")
          img(:src="require(`@/assets/images/icons/${item.icon}.png`)" class="w-10 h-10 absolute right-1/2 bottom-1.5")
        h3(class="text-lg md:text-xl pb-2") {{item.title}}
</template>

<script>
// make a separate setting for each item
export default {
  data() {
    return {
      items: [
        {title: '784 657 321', icon: 'phone-call'},
        {title: 'Instagram', icon: 'instagram'},
        {title: '105 Fairmount Ave Street,SD 92105, USA', icon: 'placeholder'},
        {title: 'example@email.com', icon: 'email'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
