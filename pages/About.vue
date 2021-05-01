<template lang="pug">
  div
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") About Me
    div
      section(class="grid-cols-1 sm:grid-cols-5 py-14 md:py-28 md:px-16").grid
        .col-span-1(class="sm:col-span-2 px-3")
          img(:src="personalImageUrl" class="")
        .container.mx-auto.px-4.py-14.flex.flex-col.col-span-1(
          class="md:px-18 xl:px-24 lg:py-32 sm:col-span-3"
        )
          p.capitalize.font-secondary.text-secondary.text-xl.leading-4(
            class="md:text-5xl"
          ) Make-up artist
          h1.font-extrabold.text-2xl(class="md:text-7xl") Lora Picault
          p.pr-4.pt-4.pb-2.max-w-screen-sm(class="md:text-lg italic") Eyora – the center for creating a luxurious image. We make every woman uniquely beautiful! We have a team of professional masters, we work on the highest quality materials and now set the standard for standards of beauty!
          p.pr-4.pt-8.pb-10.max-w-screen-sm(class="md:text-lg") Eyora – the center for creating a luxurious image. We make every woman uniquely beautiful! We have a team of professional masters, we work on the highest quality materials and now set the standard for standards of beauty!

</template>

<script>
import backgroundUrl from "~/assets/images/services_placeholder.jpg";
import personalImageUrl from "assets/images/about_placeholder.jpg";

export default {
  data() {
    return {
      backgroundUrl,
      personalImageUrl
    };
  },
};
</script>
