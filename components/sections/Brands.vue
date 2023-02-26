<template lang="pug">
  section(v-if="marki" class="md:px-0 py-14 md:py-18").px-4.bg-light
    p(class="text-center uppercase font-bold pb-8") {{ marki.tytul }}
    .grid(class="col-span-2 grid-rows-2 grid-cols-3 sm:grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 flex justify-item center items-center")
      img(v-if="item.ikona" v-for="(item, index) in brands" :key="index" :src="item.ikona.url"  :alt="item.tytul" class="px-4 md:px-10 lg:px-10")
    div(class="test col-span-1 sm:col-span-5 py-20 md:px-12")
      swiper(ref="mySwiper" :options="options" class="mx-18")
        swiper-slide(v-for="(item, index) in items" :key="index")
          img(:src="item" class="p-4 bg-medium shadow-2xl")
</template>

<script>
import brandsQuery from '~/apollo/queries/brands'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816551/DSC_1189_rdidbg.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816551/DSC_1139_st9hzd.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816551/DSC_1206_blur9y.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816550/DSC_1119_hluvj1.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816550/DSC_1124_o8knoe.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816550/DSC_1173_bkhotz.jpg',
        'https://res.cloudinary.com/dhxyosqsq/image/upload/v1631816550/DSC_1142_px3jgz.jpg'
      ],
      options: {
        slidesPerView: 1.5,
        breakpoints: {
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
  },
  apollo: {
    marki: {
      query: brandsQuery
    }
  },
  computed: {
    brands: function () {
      const keys = Object.keys(this.marki.marka);
      const array = [];

      keys.forEach((key, index) => {
        array.push(this.marki.marka[key])
      });


      return array
    }
  }
}
</script>
