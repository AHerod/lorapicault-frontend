<template lang="pug">
  div(:class="wrapperClasses")
    .mb-6.flex.flex-col(
      v-for="service in services",
      class="lg:mb-8"
      v-if="service.nazwa"
    )
      div(class="flex items-center grid grid-cols-12" v-if="service.nazwa")
        div(class="flex items-center w-full col-span-9")
          p(class="md:text-xl min-w-max").uppercase.font-bold {{ prefixLessons ? 'Lekcja: ' : ''}}{{ service.nazwa }}
          p(class="border-b-2 md:border-b-4 border-dotted w-full ml-4 md:ml-8")
        p(class="md:text-2xl pl-2 col-span-3").text-center.font-extrabold.text-secondary.flex {{ getCurrencyFormat(service.cena) }}
      div
        ul(v-if="Array.isArray(service.uslugi)" class="md:text-lg")
              li(v-for="item in service.uslugi" class="flex items-center")
                span(class="bg-secondary block w-3 h-3 rounded-full ml-6 mr-4")
                | {{item.element}}
        p(v-else v-html="service.opis" class="md:text-lg")
        p(class="md:text-lg italic").capitalize {{ service.czas_trwania }}
</template>

<script>
import currency from "@/mixins/currency";

export default {
  mixins: [currency],
  props: {
    prefixLessons: {
      type: Boolean,
      default: false
    },
    services: {
      type: [Array, Object, String]
    },
    wrapperClasses: {
       type: String
    }
  }
}
</script>

<style scoped>

</style>
