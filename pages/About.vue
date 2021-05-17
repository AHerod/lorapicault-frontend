<template lang="pug">
  div(v-if="bio")
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${bio.tlo.url})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl")
    div
      section(class="grid-cols-1 sm:grid-cols-5 py-14 md:py-28 md:px-16").grid
        .col-span-1(class="sm:col-span-2 px-3")
          img(:src="bio.zdjecie.url" class="")
        .container.mx-auto.px-4.py-14.flex.flex-col.col-span-1(
          class="md:px-18 xl:px-24 lg:py-32 sm:col-span-3"
        )
          p.capitalize.font-secondary.text-secondary.text-xl.leading-4(
            class="md:text-5xl"
          ) {{ bio.tytul }}
          h1.font-extrabold.text-2xl(class="md:text-7xl") Lora Picault
          p.pr-4.pt-4.pb-2.max-w-screen-sm(class="md:text-lg italic")  {{ bio.opis }}
        div(class="test col-span-1 sm:col-span-5 py-20")
          swiper(ref="mySwiper" :options="options" class="mx-18")
            swiper-slide(v-for="item in bio.galeria")
              img(:src="item.url" class="p-4")
</template>

<script>
  import bioQuery from '~/apollo/queries/bio'
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    apollo: {
      bio: {
        query: bioQuery
      }
    },
    data() {
      return {
        options: {
          slidesPerView: 1,
          breakpoints: {
            786: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          },
          loop: true,
          autoplay: {
            enabled: true,
            delay: 3500,
          }
        }
      }
    }
  };
</script>
<style>
  .swiper-wrapper {
    align-items: center;
  }
  .swiper-slide img {
    cursor: grab;
    object-fit: cover;
    box-shadow: #00000036 -3px -1px 19px 0;
  }
</style>