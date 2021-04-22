<template lang="pug">
  section(class="md:px-0").bg-primary.text-white.py-28
    div(class="flex justify-center align-center flex-wrap")
      span(v-for="filter in filters" class="text-sm sm:text-lg p-2 md:px-8 uppercase") {{filter}}
    div(class="grid grid-cols-4 gap-6 md:gap-8 px-4 md:px-8  pt-6 md:px-24")
      div(class="bg-primary" v-for="image in images" :class=`['col-span-'+image.size * 2, 'md:col-span-'+image.size]`)
        img(:src="image.url" class="w-full h-auto block")

</template>

<script>
export default {
  data() {
    return {
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
};
</script>
