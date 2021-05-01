<template lang="pug">
  div
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl")
    div.container.m-auto(class="px-4 md:px-12")
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold text-center uppercase pb-3 md:pb-6") Frequently asked questions
        p(class="text-lg text-center w-4/5 md:w-1/2 lg:w-1/3 mb-6 lg:mb-12") If you have short and rare eyelashes then eyelash extension is what you need. You can see the result of our work in the gallery.
      div(class="w-full pb-20")
          accordion(:content="data")
</template>

<script>
import backgroundUrl from "~/assets/images/services_placeholder.jpg";
import voucherUrl from "~/assets/images/voucher_placeholder.jpg";
import currency from "@/mixins/currency";

export default {
  mixins: [currency],

  data() {
    return {
      voucherUrl,
      backgroundUrl,
       data: [
        {
          title: 'Dlaczego makijaż próbny ślubne jest obowiązkowy?',
          content:
            'Makijaż próbny trwa dłużej niż makijaż ślubny ponieważ w tym czasie określamy nasze oczekiwania , omawiamy  kolorystykę oraz dobieramy makijaż do typu urody.\n' +
            'W tym czasie wprowadzamy zmiany np. testujemy różne kolory pomadki. Przyszła panna młoda może także sprawdzić jak makijaż współgra z fryzurą oraz kreacją którą ma na siebie założyć w dniu ceremonii. \n' +
            'Te wszystkie czynniki wpływają na to, że makijaż ślubny próbny jest bardzo ważnym procesem w przygotowaniu przyszłego makijażu panny młodej.',
        },
        {
          title:
            'Vue.js too?',
          content:
            'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
        },
        {
          title: 'Download VueTailwindAccordion on NPM now?',
          content:
            'Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level. ',
        },
      ],
    };
  },
};
</script>
