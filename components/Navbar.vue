<template lang="pug">
  nav(class="uppercase w-full grid grid-cols-12 absolute z-20").text-white
    div(class="col-span-4")
      NuxtLink(to="/")
        img(:src="require(`@/assets/images/logo_placeholder.png`)" class="md:w-4/5 mt-2")
    div(:class="open ? 'bg-primary' : ''" class="transition-all duration-500 ease-in-out fixed md:shadow-none col-span-8 md:bg-transparent md:relative justify-end w-full flex")
      button.text-gray-500.w-10.h-10.m-6.relative.text-center(class='focus:outline-none z-30 md:hidden' @click='open = !open' )
        span.sr-only Open main menu
        .block.w-5.absolute.transform(class='left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2')
          span.block.absolute.w-5.bg-accent.transform.transition.duration-500.ease-in-out(aria-hidden='true' class='h-0.5' :class="{'rotate-45': open,' -translate-y-1.5': !open }")
          span.block.absolute.w-5.bg-accent.transform.transition.duration-500.ease-in-out(aria-hidden='true' class='h-0.5' :class="{'opacity-0': open } ")
          span.block.absolute.w-5.bg-accent.transform.transition.duration-500.ease-in-out(aria-hidden='true' class='h-0.5' :class="{'-rotate-45': open, ' translate-y-1.5': !open}")
      ul(:class="open ? 'shadow-2xl bg-primary right-0 transition-all duration-500 ease-in-out pb-8' : 'right-hidden'" class="transition-all duration-500 ease-in-out flex flex-col md:grid grid-cols-5 my-10 md:pr-10 w-full md:w-auto sm:w-full absolute md:relative md:right-auto")
        li(v-for="(route,index) in routes" @click='open = false' class="py-1 mx-16 md:mx-0 md:block md:py-0 px-3 md:text-lg border-b border-transparent hover:border-accent hover:font-bold text-center transition duration-300 ease-in-out")
          NuxtLink(:to="route.path" class="block py-6 md:py-3" ) {{route.name}}
</template>

<script>
export default {
  data() {
    return {
      open: false,
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
