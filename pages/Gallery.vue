<template lang="pug">
div(v-if="galeria && galeria.obraz").color-medium
  div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${galeria.tlo.url})` }"
    )
    .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
      h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6" v-if="galeria.tytul" ) {{ galeria.tytul }}
      p(class="text-lg text-center md:w-1/2 lg:w-1/3 mb-6 lg:mb-12" v-if="galeria.opis" ) {{ galeria.opis }}
  section(class="md:px-0 py-20")
    grid(:maxAmount="100")
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
