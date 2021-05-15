<template lang="pug">
  div(v-if="faq")
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${faq.tlo.url})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl")
    div.container.m-auto(class="px-4 md:px-12")
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold text-center uppercase pb-3 md:pb-6") {{ faq.tytul }}
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") {{ faq.opis }}
      div(class="w-full pb-20")
        accordion(:content="faqs")
</template>

<script>
import faqQuery from '~/apollo/queries/faq'
export default {
  apollo: {
    faq: {
      query: faqQuery
    }
  },
  computed: {
    faqs: function () {
      const keys = Object.keys(this.faq.zestaw);
      const array = [];

      keys.forEach((key, index) => {
        array.push(this.faq.zestaw[key])
      });

      let result = array.map(el => {
        return {title: el.pytanie, content: el.odpowiedz}
      });


      return result
    }
  }
};
</script>
