<template lang="pug">
div(v-if="galeria && galeria.obraz").color-medium
  div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${galeria.tlo.url})` }"
    )
      .container.mx-auto.px-4(class="pt-32 pb-8")
        .flex.flex-col.items-center.justify-center(class="col-span-2 md:col-span-2")
          h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") {{ galeria.tytul }}
          p(class="text-lg text-center md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ galeria.opis }}
  section(class="md:px-0 py-20")
</template>

<script>
import galleryQuery from '~/apollo/queries/gallery'
export default {
  apollo: {
    galeria: {
      query: galleryQuery
    }
  }
};
</script>
