<template lang="pug">
  div(v-if="galeria && galeria.obraz")
    div(class="flex justify-center align-center flex-wrap")
      span(class="text-sm sm:text-lg p-2 md:px-8 uppercase") Makijaż: {{currentFilter}}
      span(v-for="(filter,index) in makeups" :key="index+'filter'" @click="currentFilter = currentFilter === index + 1 ? 'all' : index + 1" :class="currentFilter === index + 1 ? 'font-bold' : 'font-light'" class="text-sm sm:text-lg p-2 md:px-6 uppercase border-b border-transparent hover:border-accent cursor-pointer hover:font-bold text-center") {{filter.nazwa}}
    div(class="grid grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 pt-6 md:px-24")
      cool-light-box(:items="items" :index="index" @close="index = null" :autoplay="true" :useZoomBar="true")
      div(:style="`height: ${height}px`" class="shadow-2xl relative w-full" v-for="(image,imageIndex) in items" v-if="(image.makeups.filter(el => el.id.includes(currentFilter.toString())).length > 0 || currentFilter === 'all' && (imageIndex < limitGallery()))" :key="imageIndex"  @click="index = imageIndex" :class="imageSize(imageIndex) + ''")
        video(v-if="image.video" ref="square" @mouseover="playVideo" @mouseout="stopVideo" :style="`height: ${height}px`" class="cursor-pointer w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" autoplay="false" :playsinline="true" muted)
          source(:src="image.src")
        img(v-else="!image.video" ref="square" :style="`height: ${height}px`" :src="image.src" class="w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")
        svg(v-show="image.video" class="absolute right-2 top-2 w-6 h-6" xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30.051 30.051' fill="#fff" xml:space='preserve')
          path(d='M19.982 14.438l-6.24-4.536a.752.752 0 00-1.195.607v9.069a.75.75 0 001.195.606l6.24-4.532a.747.747 0 000-1.214z')
          path(d='M15.026.002C6.726.002 0 6.728 0 15.028c0 8.297 6.726 15.021 15.026 15.021 8.298 0 15.025-6.725 15.025-15.021.001-8.3-6.727-15.026-15.025-15.026zm0 27.54c-6.912 0-12.516-5.601-12.516-12.514 0-6.91 5.604-12.518 12.516-12.518 6.911 0 12.514 5.607 12.514 12.518.001 6.913-5.603 12.514-12.514 12.514z')
        svg(v-show="showByIndex === imageIndex" xmlns='http://www.w3.org/2000/svg' class="absolute right-2 z-10 bottom-2 w-6 h-6" x='0px' y='0px' version='1.1' viewBox='0 0 512 512' fill="#fff" xml:space='preserve')
          path(d='M506.141 477.851L361.689 333.399c65.814-80.075 61.336-198.944-13.451-273.73-79.559-79.559-209.01-79.559-288.569 0s-79.559 209.01 0 288.569c74.766 74.766 193.62 79.293 273.73 13.451l144.452 144.452c7.812 7.812 20.477 7.812 28.289 0 7.813-7.813 7.813-20.478.001-28.29zM319.949 319.948c-63.96 63.96-168.03 63.959-231.99 0-63.96-63.96-63.96-168.03 0-231.99 63.958-63.957 168.028-63.962 231.99 0 63.96 63.96 63.96 168.03 0 231.99z')
          path(d='M301.897 183.949h-77.94v-77.94c0-11.048-8.956-20.004-20.004-20.004-11.048 0-20.004 8.956-20.004 20.004v77.94h-77.94c-11.048 0-20.004 8.956-20.004 20.004 0 11.048 8.956 20.004 20.004 20.004h77.94v77.94c0 11.048 8.956 20.004 20.004 20.004 11.048 0 20.004-8.956 20.004-20.004v-77.94h77.94c11.048 0 20.004-8.956 20.004-20.004 0-11.048-8.956-20.004-20.004-20.004z')
        div(v-if="!image.video" class="absolute left-0 top-0 w-full h-full transition duration-300 ease-in-out hover:bg-secondary opacity-30 cursor-pointer" @mouseover="showByIndex = imageIndex"  @mouseout="showByIndex = null")
</template>

<script>
  import galleryQuery from '~/apollo/queries/gallery'
  import makeupQuery from '~/apollo/queries/makeup'
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  export default {
    components: {
      CoolLightBox,
    },
    props: {
      maxAmount: {
        type: Number,
      }
    },
    data() {
      return {
        showByIndex: null,
        index: null,
        height: 50,
        currentFilter: 'all'
      };
    },
    apollo: {
      makeups: {
        query: makeupQuery
      },
      galeria: {
        query: galleryQuery
      }
    },
    computed: {
      // image.makeups.filter(el => el.id.includes(currentFilter.toString())).length > 0 || currentFilter === 'all')
      items: function () {
        let list = this.galeria.obraz.map(el => {
          return {src: el.medium ? el.medium.url : el, size: el.rozmiar, video: el.video, makeups: el.makeups}
        });

        return list
      }
    },
    async mounted() {
      await this.$nextTick(function () {
        this.updateElementHeight();
      });
      window.addEventListener('resize', this.updateElementHeight)
    },
    methods: {
      limitGallery: function () {
        return this.currentFilter === 'all' ? this.maxAmount : 100
      },
      imageSize: function (index) {
        if(index % 4 === 0) {
          return 'col-span-4 h-20'
        } else if (index % 2 === 0) {
          return 'col-span-2 h-20'
        }
      },
      updateElementHeight: function () {
        if (this.$refs.square[0] && this.galeria.obraz.length > 0) {
          this.height = this.$refs.square[1].clientWidth * 1.5
        }
      },
      playVideo: function (e) {
        e.target.play();
      },
      stopVideo: function (e) {
        e.target.pause();
      }
    }
  };
</script>
