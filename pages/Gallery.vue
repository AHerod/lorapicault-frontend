<template lang="pug">
  div.color-medium
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
      )
        .container.mx-auto.px-4(class="pt-32 pb-8")
          .flex.flex-col.items-center.justify-center(class="col-span-2 md:col-span-2")
            h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Our perfect works
            p(class="text-lg text-center md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") Familiarize yourself with the works of our masters. All procedures are performed by experienced masters of our studio.
    section(class="md:px-0 py-20")
      div(class="flex justify-center align-center flex-wrap")
        span(v-for="(filter,index) in filters" :key="index+'filter'" class="text-sm sm:text-lg p-2 md:px-8 uppercase") {{filter}}
      div(class="grid grid-cols-4 gap-4 md:gap-8 px-4 pt-6 md:px-10")
        div(:style="`height: ${height}px`" class="relative w-full" v-for="(image,index) in images" :key="index+'img'" :class=`[ image.size === 1 ? 'col-span-2 md:col-span-1' : 'col-span-4 md:col-span-2']`)
          img(ref="square" :style="`height: ${height}px`" :src="image.url" class="w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")
</template>

<script>
import backgroundUrl from "~/assets/images/services_placeholder.jpg";

export default {
  data() {
    return {
      backgroundUrl,
      height: 50,
      filters: [
        'All', 'Extension', 'Lamination', 'Nature', 'Tinting'
      ],
      images: [{
        url: 'https://dummyimage.com/600x400/c21bc2/fff',
        size: 2
      },
        {
          url: 'https://dummyimage.com/600x400/4f114f/fff',
          size: 1
        },
        {
          url: 'https://dummyimage.com/600x400/5f53c9/fff',
          size: 1
        },
        {
          url: 'https://dummyimage.com/600x400/3022b3/fff',
          size: 1
        },
        {
          url: 'https://dummyimage.com/600x400/22b3a9/fff',
          size: 1
        },
        {
          url: 'https://dummyimage.com/600x400/127a73/fff',
          size: 2
        },
        {
          url: 'https://dummyimage.com/600x400/5ea100/fff',
          size: 2
        },
        {
          url: 'https://dummyimage.com/600x400/9fc418/fff',
          size: 1
        },
        {
          url: 'https://dummyimage.com/600x400/4f114f/fff',
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
      console.log('UPDATE')
      this.height = this.$refs.square[1].clientWidth
    }
  }
};
</script>
