<template lang="pug">
  div
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") Pricing
        ul.flex.items-center.justify-center
          li(v-for="item in nav" class="mx-2 md:mx-8 hover:text-secondary")
            a(:href="'#'+item.path")
              | {{item.name}}
    div.container.m-auto
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Services
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") If you have short and rare eyelashes then eyelash extension is what you need. You can see the result of our work in the gallery.
        pricing(:services="services" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="packages").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Package
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") If you have short and rare eyelashes then eyelash extension
        pricing(:services="packages" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="lessons").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Lessons
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") If you have short and rare eyelashes then eyelash extension is what you need. You can see the result of our work in the gallery.
        pricing(:services="services" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="voucher").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Voucher
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") If you have short and rare eyelashes then eyelash extension is what you need.
        img(:src="voucherUrl")
</template>

<script>
import backgroundUrl from "~/assets/images/services_placeholder.jpg";
import voucherUrl from "~/assets/images/voucher_placeholder.jpg";
import currency from "@/mixins/currency";

export default {
  mixins: [currency],
  data() {
    return {
      voucherUrl,
      backgroundUrl,
      nav: [{name: 'services', path: 'services'}, {name: 'packages', path: 'packages'}, {
        name: 'lessons',
        path: 'lessons'
      }, {name: 'voucher', path: 'voucher'}],
      services: [
        {
          name: "Classic extensions",
          info: "1 artificial one is superimposed on each of its eyelashes.",
          duration: "Duration 1.5-2 hours",
          price: 40,
        },
        {
          name: "Volume 2D",
          info: "On each of their eyelashes 2 artificial ones are superimposed",
          duration: "Duration 2-2.5 hours",
          price: 35,
        },
        {
          name: "Volume 3D",
          info: "3-5 artificial ones are applied to each of their eyelashes.",
          duration: "Duration 2-2.5 hours",
          price: 60,
        },
        {
          name: "Volume 3D",
          info: "3-5 artificial ones are applied to each of their eyelashes.",
          duration: "Duration 2-2.5 hours",
          price: 80,
        },
        {
          name: "Hollywood Volume",
          info: "4 artificial ones are superimposed on each of its eyelashes.",
          duration: "Duration 1-2 hours",
          price: 100,
        },
      ],
      packages: [
        {
          name: "Wedding",
          info: ["1 artificial eyelashes.", "Superimposed on each of its eyelashes.", "Superimposed on each of its eyelashes.", "Superimposed on each of its eyelashes."],
          duration: "Duration 1.5-2 hours",
          price: 1500,
        },
        {
          name: "Bachelorette party",
          info: ["1 artificial eyelashes.", "Superimposed on each of its eyelashes.", "Superimposed on each of its eyelashes.", "Superimposed on each of its eyelashes.", "Superimposed on each of its eyelashes."],
          duration: "Duration 2-2.5 hours",
          price: 400,
        },
      ],
    };
  },
};
</script>
