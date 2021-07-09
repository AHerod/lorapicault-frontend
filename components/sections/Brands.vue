<template lang="pug">
  section(v-if="marki" class="md:px-0 py-14 md:py-18").px-4.bg-light
    p(class="text-center uppercase font-bold pb-8") {{ marki.tytul }}
    .grid(class="col-span-2 md:col-span-2 grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 flex justify-item center items-center")
      img(v-if="item.ikona" v-for="(item, index) in brands" :key="index" :src="item.ikona.url"  :alt="item.tytul" class="px-4 md:px-10 lg:px-20")
    div(class="test col-span-1 sm:col-span-5 py-20 md:px-12")
      swiper(ref="mySwiper" :options="options" class="mx-18")
        swiper-slide(v-for="item in items")
          img(:src="item" class="p-4 bg-accent shadow-2xl")
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
        'https://res.cloudinary.com/aherod/image/upload/v1620812287/medium_DSC_1206_ec0c779b95.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812279/medium_DSC_1189_5fe3f1e7eb.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812276/medium_DSC_1173_10c600c94f.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812259/medium_DSC_1119_5ee8b5cfcd.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812259/medium_DSC_1124_7663772b64.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812257/medium_DSC_1139_4cdc7ec8b3.jpg',
        'https://res.cloudinary.com/aherod/image/upload/v1620812254/medium_DSC_1152_b2c24e87a3.jpg'
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
