<template lang="pug">
  section(class="md:px-0").bg-primary.text-white.py-28
    div(class="flex justify-center align-center flex-wrap")
      span(v-for="filter in filters" class="text-sm sm:text-lg p-2 md:px-8 uppercase") {{filter}}
    div(class="grid grid-cols-4 gap-4 md:gap-8 px-4 md:px-8  pt-6 md:px-24")
      div(:style="`height: ${height}px`" class="relative w-full" v-for="image in images" :class=`['col-span-'+image.size * 2, 'md:col-span-'+image.size, image.size === 1 ? 'square' : '']`)
        img(ref="square" :style="`height: ${height}px`" :src="image.url" class="w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")

</template>

<script>
export default {
  data() {
    return {
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
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.updateElementHeight);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("resize", this.updateElementHeight);
    }
  },
  mounted() {
    this.height = this.getElementHeight(this.$refs.square.[1].clientWidth)
  },
  methods: {
    getElementHeight: function (width) {
      return width;
    },
    updateElementHeight: function () {
      this.height = this.getElementHeight(this.$refs.square.[1].clientWidth)
    }
  }
};
</script>
