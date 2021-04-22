<template lang="pug">
section(class="md:px-0").px-4.grid.grid-cols-5.py-28.gap-x-8.text-primary
  .flex.justify-end.min-w-full(class="col-span-5 md:col-span-2")
    h1.font-extrabold.uppercase.text-2xl.text-right(class="sm:text-5xl w-3/4 pb-8") Most Popular Services
  .col-span-3(class="col-span-5 md:col-span-3")
    .flex.flex-col.justify-center(class="md:justify-start md:w-5/6")
      .mb-6.flex.justify-between.items-start(
        v-for="service in services",
        class="lg:mb-8"
      )
        div
          p(class="md:text-xl").uppercase.font-bold {{ service.name }}
          p(class="md:text-lg").capitalize {{ service.info }}
          p(class="md:text-lg").capitalize {{ service.duration }}
        p(class="md:text-2xl").font-extrabold.text-secondary {{ service.price }}
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
