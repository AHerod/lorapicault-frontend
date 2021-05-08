<template lang="pug">
  section(class="md:px-0 pb-14 pt-10 md:py-28").bg-primary.text-white
    h2(class="font-secondary md:pb-6 pb-3 text-6xl md:text-9xl text-center text-secondary") Portfolio
    div(class="flex justify-center align-center flex-wrap")
      span(class="text-sm sm:text-lg p-2 md:px-8 uppercase") Makijaż:
      span(v-for="(filter,index) in filters" :key="index+'filter'" class="text-sm sm:text-lg p-2 md:px-8 uppercase border-b border-transparent hover:border-accent cursor-pointer hover:font-bold text-center") {{filter}}
    div(class="grid grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 pt-6 md:px-24")
      div(:style="`height: ${height}px`" class="relative w-full" v-for="(image,index) in images" :key="index+'img'" :class=`[ image.size === 1 ? 'col-span-2 md:col-span-1' : 'col-span-4 md:col-span-2']`)
        img(ref="square" :style="`height: ${height}px`" :src="image.url" class="w-full block absolute transform object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2")
</template>

<script>
export default {
  data() {
    return {
      height: 50,
      filters: [
        'Ślubny', 'Naturanly', 'Okazjonalny', 'Biznesowy', 'Dla produkcji'
      ],
      images: [{
        url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_06-768x242.jpg',
        size: 2
      },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_01-768x576.jpg',
          size: 1
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_02-768x498.jpg',
          size: 1
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_04-768x656.jpg',
          size: 1
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_07-768x424.jpg',
          size: 1
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_05-768x599.jpg',
          size: 2
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_03-768x400.jpg',
          size: 2
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/11/gallery_img_8-1-768x602.jpg',
          size: 1
        },
        {
          url: 'https://livewp.site/wp/md/eyora/wp-content/uploads/sites/68/2019/12/gallery_img_07-768x424.jpg',
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
    }
  }
};
</script>
