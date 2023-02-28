<template lang="pug">
div(v-if="start" class="relative showcase md:h-screen start-section bg-cover" :style="{ backgroundImage: `${isPhoto ? `url(${start.tlo.obraz.url})` : ''}` }")
  .container(class="container md:px-18 mt-40 mb-4 md:mb-12 md:ml-6 p-6 shadow-lg text-center w-auto z-10" style="background: #353535ba;")
    p.mb-4.font-secondary.text-light.text-xl.leading-4(
      class="sm:text-3xl md:text-4xl"
    ) {{ start.naglowek }}
    h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl text-white") {{ start.tytul }}
    p(v-if="start.opis").pr-4.pt-2.pb-8.text-2xl.max-w-screen-sm(class="md:text-lg text-medium") {{ start.opis }}
    base-button.mb-4(tag="a" :href="start.przycisk.url", color="primary", class="text-sm bg-black")
      | {{ start.przycisk.tekst }}
  .video-container(v-if="!isPhoto")
    video(:src='start.tlo.obraz.url' autoplay="true" :playsinline="true" muted loop="loop")
</template>

<script>
import heroQuery from '~/apollo/queries/hero'

export default {
  data() {
    return {
      video: true
    };
  },
  apollo: {
    start: {
      query: heroQuery
    }
  },
  computed: {
    isPhoto() {
      if(!this.start?.tlo?.obraz?.url) return false
      const string = this.start?.tlo?.obraz?.url;
      const substrings = [".jpg", ".png", ".jpeg"];
      return substrings.some(substring => string.includes(substring));
    }
  }
};
</script>
<style>
.start-section {
  min-height: 40vh;
}
.showcase {
	display: flex;
	align-items: flex-end;
	color: #fff;
	padding: 0 20px;
}
.video-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.video-container video {
	min-width: 100%;
	min-height: 100%;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	object-fit: cover;
}

.video-container:after {
	content: '';
	z-index: 1;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
}
</style>
