<template lang="pug">
  section(class="md:px-0 pb-14 pt-10 md:py-28").bg-primary.text-white
    h2(class="font-secondary md:pb-6 pb-3 text-6xl md:text-9xl text-center text-secondary") Portfolio
    cool-light-box(:items="items" :index="index" @close="index = null" :autoplay="true")
    div(class="flex justify-center align-center flex-wrap")
      span(class="text-sm sm:text-lg p-2 md:px-8 uppercase") Makijaż:
      span(v-for="(filter,index) in filters" :key="index+'filter'" class="text-sm sm:text-lg p-2 md:px-6 uppercase border-b border-transparent hover:border-accent cursor-pointer hover:font-bold text-center") {{filter}}
    div(class="grid grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 pt-6 md:px-24")
      div(:style="`height: ${height}px`" @mouseover="itemHover" class="relative w-full" v-for="(image,imageIndex) in items" :key="imageIndex"  @click="index = imageIndex" :class=`[ image.size === 1 ? 'col-span-2 md:col-span-1' : 'col-span-4 md:col-span-2']`)
        video(v-if="image.video" @mouseover="playVideo" @mouseout="stopVideo" :style="`height: ${height}px`" class="cursor-pointer w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")
          source(:src="image.src")
        img(v-else ref="square" :style="`height: ${height}px`" :src="image.src" class="w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")
        svg(v-if="image.video" class="absolute right-2 top-2 w-6 h-6" xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30.051 30.051' fill="#fff" xml:space='preserve')
          path(d='M19.982 14.438l-6.24-4.536a.752.752 0 00-1.195.607v9.069a.75.75 0 001.195.606l6.24-4.532a.747.747 0 000-1.214z')
          path(d='M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z')
        svg(v-show="showByIndex === imageIndex" xmlns='http://www.w3.org/2000/svg' class="absolute right-2 z-10 bottom-2 w-6 h-6" x='0px' y='0px' version='1.1' viewBox='0 0 512 512' fill="#fff" xml:space='preserve')
          path(d='M506.141 477.851L361.689 333.399c65.814-80.075 61.336-198.944-13.451-273.73-79.559-79.559-209.01-79.559-288.569 0s-79.559 209.01 0 288.569c74.766 74.766 193.62 79.293 273.73 13.451l144.452 144.452c7.812 7.812 20.477 7.812 28.289 0 7.813-7.813 7.813-20.478.001-28.29zM319.949 319.948c-63.96 63.96-168.03 63.959-231.99 0-63.96-63.96-63.96-168.03 0-231.99 63.958-63.957 168.028-63.962 231.99 0 63.96 63.96 63.96 168.03 0 231.99z')
          path(d='M301.897 183.949h-77.94v-77.94c0-11.048-8.956-20.004-20.004-20.004-11.048 0-20.004 8.956-20.004 20.004v77.94h-77.94c-11.048 0-20.004 8.956-20.004 20.004 0 11.048 8.956 20.004 20.004 20.004h77.94v77.94c0 11.048 8.956 20.004 20.004 20.004 11.048 0 20.004-8.956 20.004-20.004v-77.94h77.94c11.048 0 20.004-8.956 20.004-20.004 0-11.048-8.956-20.004-20.004-20.004z')
        div(v-if="!image.video" class="absolute left-0 top-0 w-full h-full hover:bg-primary opacity-10 cursor-pointer" @mouseover="showByIndex = imageIndex"  @mouseout="showByIndex = null")
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      showByIndex: null,
      index: null,
      height: 50,
      filters: [
        'Ślubny', 'Naturanly', 'Okazjonalny', 'Biznesowy', 'Dla produkcji'
      ],
      items: [{
        src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_06-768x242.jpg',
        size: 2,
      },
        {
          src: 'https://res.cloudinary.com/aherod/video/upload/v1620327386/IMG_9900_ebc387b68b.mp4',
          size: 1,
          video: true,
          autoplay: true
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_02-768x498.jpg',
          size: 1
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_04-768x656.jpg',
          size: 1
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_07-768x424.jpg',
          size: 1
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_05-768x599.jpg',
          size: 2
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_03-768x400.jpg',
          size: 2
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/11/gallery_img_8-1-768x602.jpg',
          size: 1
        },
        {
          src: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_07-768x424.jpg',
          size: 1
        }]
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.updateElementHeight();
    })
    window.addEventListener('resize', this.updateElementHeight)
  },
  methods: {
    updateElementHeight: function () {
      if (this.$refs.square[1]) {
        this.height = this.$refs.square[1].clientWidth
      }
    },
    playVideo: function (e) {
      e.target.play();
      this.showByIndex = imageIndex
    },
    stopVideo: function (e) {
      e.target.pause();
    }
  }
};
</script>
