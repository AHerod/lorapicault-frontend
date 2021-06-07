<template>
  <div class="font-primary flex flex-col h-full relative">
    <Navbar></Navbar>
    <Nuxt class="flex-auto"/>
    <Footer class="flex-shrink-0"></Footer>
  </div>
</template>

<style>
  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  html, body, #__nuxt, #__layout {
    height: 100%;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18.72px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 13.28px;
  }

  h6 {
    font-size: 10.72px;
  }
</style>
