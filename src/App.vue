<template>
  <div id="app">
    <div v-if="this.$route.meta.layout === undefined">
      <Header />
      <b-container fluid>
        <router-view/>
      </b-container>
      <FooterMain />
    </div>
    <div v-if="this.$route.meta && this.$route.meta.layout === false">
      <b-container fluid>
        <router-view/>
      </b-container>
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
export default {
  name: 'app',
  components: {
    Header,
    HeaderOrder,
    FooterMain
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
