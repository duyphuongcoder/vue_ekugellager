<template>
  <div id="app">
    <HeaderNav />
    <HeaderBefore />
    <HeaderTop />
    <b-container fluid>
      <router-view/>
    </b-container>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import HeaderBefore from '@/components/HeaderBefore'
import HeaderTop from '@/components/HeaderTop'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    HeaderNav,
    HeaderBefore,
    HeaderTop,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
