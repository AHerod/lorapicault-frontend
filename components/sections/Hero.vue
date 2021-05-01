<template lang="pug">
section.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
  class="md:h-screen",
  :style="{ backgroundImage: `url(${backgroundUrl})` }"
)
  .container.mx-auto.px-4.py-24(class="md:px-18 xl:px-24 lg:py-32")
    p.capitalize.font-secondary.text-secondary.text-xl.leading-4(
      class="sm:text-3xl md:text-5xl"
    ) Change yourself
    h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") Eye brows
    p.pr-4.pt-2.pb-8.text-sm.max-w-screen-sm(class="md:text-lg") Eyebrow microblading is the art of creating fuller thicker eyebrows through the use if a manual tattooing technique
    .flex.flex-col.justify-center(class="md:flex-row md:justify-start")
      base-button.mb-4(href="google.com", color="secondary", class="md:mr-6")
        | Book Now
      base-button(tag="a" href="about" variant="outline")
        | About Us
</template>

<script>
import backgroundUrl from "~/assets/images/hero_placeholder.jpg";
export default {
  data() {
    return { backgroundUrl };
  },
};
</script>
