<template lang="pug">
div(v-if="start" class="relative showcase md:h-screen")
  .container.mx-auto(class="container md:px-18 mx-auto mt-40 mb-12 md:my-24 p-11 shadow-lg text-center w-auto z-10" style="background: #353535ba;")
    p.capitalize.font-secondary.text-secondary.text-xl.leading-4(
      class="sm:text-3xl md:text-5xl"
    ) {{ start.naglowek }}
    h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl text-white") {{ start.tytul }}
    p.pr-4.pt-2.pb-8.text-2xl.max-w-screen-sm(class="md:text-lg text-medium") {{ start.opis }}
    base-button.mb-4(tag="a" :href="start.przycisk.url", color="secondary", class="md:mr-6")
      | {{ start.przycisk.tekst }}
  .video-container(v-if="video")
    video(:src='start.tlo.obraz.url' autoplay="true" :playsinline="true" muted loop="loop")
  section.bg-auto.bg-cover.bg-no-repeat.bg-center.text-white.flex.flex-col.justify-end(
    class="md:h-screen",
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    v-else
  )
    .container.mx-auto.px-4.py-24(class="md:px-18 xl:px-24 lg:py-32")
      p.capitalize.font-secondary.text-secondary.text-xl.leading-4(
        class="sm:text-3xl md:text-5xl"
      ) Change yourself
      h1.font-extrabold.text-2xl(class="sm:text-5xl md:text-7xl") Eye brows
      p.pr-4.pt-2.pb-8.text-sm.max-w-screen-sm(class="md:text-lg") Eyebrow microblading is the art of creating fuller thicker eyebrows through the use if a manual tattooing technique
      .flex.flex-col.justify-center(class="md:flex-row md:justify-start")
        base-button.mb-4(href="google.com", color="secondary", class="md:mr-6")
          | Book Now
        base-button(tag="a" href="about" variant="outline")
          | About Us
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
};
</script>
<style>
.showcase {
	display: flex;
	align-items: flex-end;
	justify-content: center;
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
