<template lang="pug">
section(class="md:px-0 py-14 md:py-28").px-4.grid.grid-cols-5.gap-x-8.text-primary
  .flex.justify-end.min-w-full(class="col-span-5 md:col-span-2")
    h1.font-extrabold.uppercase.text-2xl(class="sm:text-5xl w-full md:w-3/4 text-center md:text-right pb-8") Popularne usługi
  .col-span-3(class="col-span-5 md:col-span-3")
    .flex.flex-col.justify-center(class="md:justify-start md:w-5/6")
      pricing(:services="this.uslugi['Usluga'].filter(el => el.popularna)")
      pricing(:services="this.lekcje['usluga'].filter(el => el.popularna)" :prefix-lessons="true")
      pricing(:services="this.brwi['usluga'].filter(el => el.popularna)")
      .grid.grid-cols-2.gap-y-2(class="sm:gap-x-4 sm:max-w-max")
        base-button(
          tag="a"
          href="services"
          color="primary",
          variant="fill"
          class="col-span-2 sm:col-span-1"
        )
          | Cała oferta
</template>

<script>
import currency from '@/mixins/currency'
import Services from "@/pages/Services";
import Pricing from "@/components/Pricing";
import servicesQuery from '~/apollo/queries/services'
import packagesQuery from '~/apollo/queries/packages'
import lessonsQuery from '~/apollo/queries/lessons'
import eyebrowsQuery from '~/apollo/queries/eyebrows'

export default {
  components: {Pricing, Services},
  mixins: [currency],
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
    }
  }
};
</script>
