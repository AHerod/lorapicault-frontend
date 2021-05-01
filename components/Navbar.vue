<template lang="pug">
  nav(class="uppercase w-full flex justify-between items-center absolute z-10").text-white
    div
      NuxtLink(to="/")
        img(:src="require(`@/assets/images/logo_placeholder.png`)" class="w-1/2")
    ul(class="flex justify-end w-full my-10")
      li(v-for="(route,index) in routes" class="mx-6 md:text-lg")
        NuxtLink(:to="route.path") {{route.name}}
</template>

<script>
export default {
  data() {
    return {
      routes: [{path: 'about', name: 'About'},{path: 'services', name: 'Services'}, {path: 'gallery', name: 'Gallery'}, {path: 'faq', name: 'FAQ'}]
    }
  },
};
</script>
