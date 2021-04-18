<template lang="pug">
component(
  :is="tag",
  :href="href",
  :class="[`bg-${color} border-${color} hover:bg-${color}`, variation === 'fill' ? 'hover:bg-transparent' : `bg-transparent`]",
  class="text-white font-bold uppercase h-full border-2 px-8 md:px-10 py-1.5 md:py-3 hover:bg-secondary hover:border-secondary"
)
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button",
      validator: (value) => {
        return value.match(/(button|a)/);
      },
    },
    href: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(/(hover|active|focus)/);
      },
    },
    color: {
      type: String,
      default: null,
      validator: (value) => {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
    variation: {
      type: String,
      default: "fill",
      validator: (value) => {
        return ["fill", "outline"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
