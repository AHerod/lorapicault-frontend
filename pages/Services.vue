<template lang="pug">
  div(v-if="cennik")
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${cennik.tlo.url})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") Oferta
        ul.flex.items-center.justify-center
          li(v-for="item in nav" class="mx-2 md:mx-8 hover:text-secondary")
            a(:href="'#'+item.path")
              | {{item.name}}
    div(class="px-2 md:px-0 xl:container").m-auto
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") {{ cennik.tytul }}
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.opis }}
        pricing(v-for="(usluga, index) in uslugi" :key="index" :services="usluga" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="eyebrows").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Brwi
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.opis_brwi }}
        pricing(v-for="(usluga, index) in brwi" :key="index" :services="usluga" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="packages").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Pakiety
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.opis_pakietow }}
        pricing(:services="pakiets" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="lessons").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Lekcje
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.opis_lekcji }}
        pricing(v-for="(usluga,index) in lekcje" :key="index" :services="usluga" wrapperClasses="w-full grid md:grid-cols-2 gap-x-28 px-4")

      section(id="voucher").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Voucher
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.opis_vouchera }}
        img(v-for="item in cennik.zdjecie_vouchera" :src="item.url" class="md:w-2/3")

      section(id="arrival").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold uppercase pb-3 md:pb-6") Dojazd
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ cennik.dojazd }}
</template>

<script>
import voucherUrl from "~/assets/images/voucher_placeholder.jpg";
import currency from "@/mixins/currency";
import servicesQuery from '~/apollo/queries/services'
import packagesQuery from '~/apollo/queries/packages'
import lessonsQuery from '~/apollo/queries/lessons'
import eyebrowsQuery from '~/apollo/queries/eyebrows'
import servicesCopyQuery from '~/apollo/queries/services_copy'

export default {
  mixins: [currency],
  data() {
    return {
      voucherUrl,
      nav: [
        {name: 'Makijaż', path: 'services'},
        {name: 'Brwi', path: 'eyebrows'},
        {name: 'Pakiety', path: 'packages'},
        {name: 'Lekcje',path: 'lessons'},
        {name: 'Voucher', path: 'voucher'}]
    };
  },
  apollo: {
    brwi: {
      query: eyebrowsQuery
    },
    uslugi: {
      query: servicesQuery
    },
    pakiets: {
      query: packagesQuery
    },
    lekcje: {
      query: lessonsQuery
    },
    cennik: {
      query: servicesCopyQuery
    }
  },
};
</script>
