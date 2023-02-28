<template lang="pug">
section(class="grid-cols-1 md:grid-cols-2 py-14 md:py-28").bg-primary.text-white.grid.gap-x-20
  .flex.justify-center.col-span-1(class="lg:col-span-1")
    img(:src="backgroundUrl" class="w-10/12 md:max-w-lg")
  .container.mx-auto.px-4.py-24.text-center.flex.flex-col.items-center.col-span-1(
    class="md:px-18 xl:px-24 lg:py-32 lg:col-span-1"
  )
    p.font-secondary.text-secondary.text-xl.leading-4(
      class="sm:text-3xl md:text-5xl"
    ) Make-up artist
    h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") Lora Picault
    p.pr-4.pt-8.pb-10.text-sm.max-w-screen-sm(class="md:text-lg") Eyora – the center for creating a luxurious image. We make every woman uniquely beautiful! We have a team of professional masters, we work on the highest quality materials and now set the standard for standards of beauty!
    .flex.flex-col.justify-center(class="md:flex-row md:justify-start")
      base-button(tag="a" href="about" variant="outline")
        | Read More
</template>

<script>
import backgroundUrl from "assets/images/about_placeholder_2.jpg";
export default {
  data() {
    return { backgroundUrl };
  },
};
</script>
