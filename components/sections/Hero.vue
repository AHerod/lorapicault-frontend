<template lang="pug">
  section(class="bg-auto bg-cover bg-no-repeat bg-center md:bg-auto md:h-screen text-white flex flex-col justify-end" :style="{ backgroundImage: `url(${backgroundUrl})` }")
    div(class="container mx-auto px-4 md:px-18 xl:px-24 py-24 lg:py-32")
      p(class="capitalize font-secondary text-secondary text-xl sm:text-3xl md:text-5xl leading-4") Change yourself
      h1(class="font-extrabold text-2xl sm:text-5xl md:text-7xl") Eye brows
      p(class="pr-4 pt-2 pb-8 text-sm md:text-lg max-w-screen-sm") Eyebrow microblading is the art of creating fuller thicker eyebrows through the use if a manual tattooing technique
      div(class="flex flex-col justify-center md:flex-row md:justify-start")
        base-button(href="google.com" color="secondary" class="mb-4 md:mr-6")
          | Book Now
        base-button(href="google.com" variant="outline")
          | About Us
</template>

<script>
import backgroundUrl from '~/assets/images/hero_placeholder.jpg'
export default {
  data() {
    return { backgroundUrl }
  }
}
</script>
