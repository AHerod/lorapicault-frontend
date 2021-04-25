<template lang="pug">
  section(class="md:px-0").py-28.px-4.flex.items-center.justify-center.bg-primary.text-white
    .flex.flex-col.items-center.justify-center(class="col-span-2 md:col-span-2")
      h2(class="text-2xl md:text-5xl font-extrabold uppercase") We love what we do
      svg(xmlns='http://www.w3.org/2000/svg' width='40' height='30' fill='#fbbaa1' class="my-6")
        path(d='M15.567 4.429c5.094 5.719 1.585 15.673-2.657 19.522-3.615 3.28-9.605 5.96-10.17 5.024-.897-1.49 2.636-2.547 5.293-4.938 3.316-3.586 4.43-5.198-.16-7.221-4.918-2.22-5.012-4.391-5.17-7.153-.398-6.954 7.89-10.207 12.864-5.234zm19.172.099c5.095 5.719 1.585 15.675-2.657 19.522-3.614 3.28-9.604 5.96-10.17 5.024-.897-1.49 2.636-2.547 5.293-4.938 3.316-3.586 4.43-5.198-.159-7.221-4.918-2.22-5.013-4.391-5.17-7.153-.399-6.954 7.89-10.207 12.863-5.234z')
      div(:options="options")
        div(class="text-xl text-center" v-for="(item,index) in items" :key="index")
          p(class="md:w-3/5  m-auto row-span-2") {{item.testimonial}}
          p(class="font-extrabold row-span-1") {{item.author}}

</template>

<script>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';

// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import { SimpleCarouselContainer, SimpleCarouselItem } from 'vue-simple-carousel';
// import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "Testimonials",
  data() {
    return {
      options: {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      },
      items: [{
        author: "Kasia",
        testimonial: "Good day! I want to say that in this salon I used the services: eyelash extensions, manicure, eyebrow architecture. All masters are qualified. I was very pleased with the work of the masters."
      }, {
        author: "Anna",
        testimonial: "Good day! I want to say that in this salon I used the services: eyelash extensions, manicure, eyebrow architecture. All masters are qualified. I was very pleased with the work of the masters."
      }, {
        author: "Matylda",
        testimonial: "Good day! I want to say that in this salon I used the services: eyelash extensions, manicure, eyebrow architecture. All masters are qualified. I was very pleased with the work of the masters."
      }]
    }
  }
}
</script>

<style scoped>

</style>
