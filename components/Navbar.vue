<template lang="pug">
  nav(class="uppercase w-full grid grid-cols-12 absolute z-10").text-white
    div(class="col-span-4")
      NuxtLink(to="/")
        img(:src="require(`@/assets/images/logo_placeholder.png`)" class="md:w-4/5")
    div(class="col-span-8 justify-end w-full hidden sm:flex")
      ul(class="grid grid-cols-5 my-10 pr-10")
        li(v-for="(route,index) in routes" class="px-3 md:text-lg border-b border-transparent hover:border-accent hover:font-bold text-center transition duration-300 ease-in-out")
          NuxtLink(:to="route.path" class="hover:") {{route.name}}
</template>

<script>
export default {
  data() {
    return {
      routes: [{path: 'about', name: 'O mnie'},{path: 'services', name: 'Oferta'}, {path: 'gallery', name: 'Portfolio'}, {path: 'faq', name: 'FAQ'}, {path: 'tips', name: 'Przed wizytą'}]
    }
  },
};
</script>

<style>
nav li {
  height: fit-content;
}
</style>
