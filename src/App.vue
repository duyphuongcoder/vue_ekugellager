<template>
  <div id="app">
    <div v-if="!this.$route.meta.layout">
      <Header />
      <b-container fluid>
        <router-view/>
      </b-container>
      <FooterMain />
    </div>
    <div v-if="this.$route.meta && this.$route.meta.layout === 'order'">
      <HeaderOrder />
      <b-container fluid>
        <router-view/>
      </b-container>
      <FooterMain />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import HeaderOrder from '@/components/header/HeaderOrder'
import FooterMain from '@/components/footer/FooterMain'
// import Footer from '@/components/footer/Footer'
export default {
  name: 'app',
  components: {
    Header,
    HeaderOrder,
    FooterMain
    // Footer
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
