<template lang="pug">
  div(v-if="wizyta")
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${wizyta.tlo.url})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl")
    div.container.m-auto(class="px-4 md:px-12")
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold text-center uppercase pb-3 md:pb-6") {{ wizyta.tytul }}
        p(class="text-lg text-center w-4/5 md:w-1/2 mb-6 lg:mb-12") {{ wizyta.opis }}
        .grid(class="grid-cols-1 md:grid-cols-3 flex items-start py-8 w-full")
          div(v-for="(item,index) in steps" class="flex flex-col items-center justify-center text-center mb-10")
            div(class="bg-secondary rounded-full w-20 h-20 lg:w-24 lg:h-24 mb-6 relative")
                img(:src="item.ikona.url" class="w-14 h-14 lg:w-16 lg:h-16 absolute right-1/2 bottom-1/4")
            h3(class="font-bold text-xl pb-2") {{item.tytul}}
            p(class="w-2/3 normal-case") {{item.opis}}
</template>

<script>
import tipsQuery from '~/apollo/queries/tips'

export default {
  apollo: {
    wizyta: {
      query: tipsQuery
    }
  },
  computed: {
    steps: function () {
      const keys = Object.keys(this.wizyta.krok);
      const array = [];

      keys.forEach((key, index) => {
        array.push(this.wizyta.krok[key])
      });


      return array
    }
  }
}
</script>
