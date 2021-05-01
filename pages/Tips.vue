<template lang="pug">
  div
    div.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    )
      .container.mx-auto.px-4(class="pt-32 md:pt-48 lg:pt-72 pb-8")
        h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl")
    div.container.m-auto(class="px-4 md:px-12")
      section(id="services").flex.flex-col.items-center.justify-center.pt-16.pb-10
        h2(class="text-2xl md:text-4xl font-extrabold text-center uppercase pb-3 md:pb-6") Przed wizytą
        p(class="text-lg text-center w-4/5 md:w-1/2 mb-6 lg:mb-12") Zalecenia i przygotowanie do wykonania usługi makijażu przed wizytą. Dzień przed wizytą proszę, aby osoba która przyjdzie na usługę makijażu przygotowała swoją skórę.
        .grid(class="grid-cols-1 md:grid-cols-3 flex items-start py-8")
          div(v-for="(item,index) in items" class="flex flex-col items-center justify-center text-center mb-10")
            div(class="bg-secondary rounded-full w-20 h-20 lg:w-24 lg:h-24 mb-6 relative")
                img(:src="require(`@/assets/images/icons/makeup_${item.icon}.png`)" class="w-14 h-14 lg:w-16 lg:h-16 absolute right-1/2 bottom-1/4")
            h3(class="font-bold text-xl pb-2") {{item.title}}
            p(class="w-2/3 normal-case") {{item.info}}
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
      items: [
        {title: 'Krok pierwszy', info: 'Wykonaj w domu peeling', icon: 4},
        {title: 'Krok drugi', info: 'Nałóż maseczkę nawilżającą', icon: 2},
        {title: 'Krok trzeci', info: 'Nałóż pozostałą pielęgnację krem do twarzy, krem pod oko oraz balsam do ust', icon: 3},
      ]
    };
  },
};
</script>
