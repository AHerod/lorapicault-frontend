<template lang="pug">
section.grid.grid-cols-2.py-28.gap-x-8.text-primary
  .flex.justify-end.col-span-12.min-w-full(class="lg:col-end-1")
    h1.font-extrabold.uppercase.text-2xl.text-right(class="sm:text-5xl w-3/4") Most Popular Services
  .col-span-12(class="md:max-w-prose")
    .flex.flex-col.justify-center.max-w-2xl(class="md:justify-start")
      .mb-6.flex.justify-between.items-start(
        v-for="service in services",
        class="lg:mb-8"
      )
        div
          p.uppercase.font-bold.text-xl {{ service.name }}
          p.capitalize.text-lg {{ service.info }}
          p.capitalize.text-lg {{ service.duration }}
        p.font-extrabold.text-secondary.text-2xl {{ service.price }}
      base-button.max-w-max.mt-4(
        href="google.com",
        color="primary",
        variant="fill"
      )
        | Book Now
</template>

<script>
export default {
  data() {
    return {
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
          name: "Hollywood Volume",
          info: "4 artificial ones are superimposed on each of its eyelashes.",
          duration: "Duration 1-2 hours",
          price: 100,
        },
      ],
    };
  },
};
</script>
