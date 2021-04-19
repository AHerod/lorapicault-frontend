<template lang="pug">
  section(class="bg-primary text-white grid grid-cols-2 py-28 gap-x-20")
    div(class="flex justify-center col-span-12 lg:col-span-1")
      img(:src="backgroundUrl" class="max-w-lg")
    div(class="container mx-auto px-4 md:px-18 xl:px-24 py-24 lg:py-32 text-center flex flex-col items-center col-span-12 lg:col-span-1")
      p(class="capitalize font-secondary text-secondary text-xl sm:text-3xl md:text-5xl leading-4") Make-up artist
      h1(class="font-extrabold text-2xl sm:text-5xl md:text-7xl") Lora Picault
      p(class="pr-4 pt-8 pb-10 text-sm md:text-lg max-w-screen-sm") Eyora – the center for creating a luxurious image. We make every woman uniquely beautiful! We have a team of professional masters, we work on the highest quality materials and now set the standard for standards of beauty!
      div(class="flex flex-col justify-center md:flex-row md:justify-start")
        base-button(href="google.com" variant="outline")
          | Read More

</template>

<script>
import backgroundUrl from '~/assets/images/about_placeholder.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}
</script>
