<template>
  <div class="font-primary flex flex-col h-full relative">
    <Navbar></Navbar>
    <Nuxt class="flex-auto" />
    <Footer class="flex-shrink-0"></Footer>
  </div>
</template>

<style>
html {
  overflow-x: hidden;
  overflow-y: scroll;
}
html, body, #__nuxt,#__layout {
  height: 100%;
}
</style>
