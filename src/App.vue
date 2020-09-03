<template>
  <div id="app">
    <HeaderNav />
    <HeaderBefore />
    <HeaderTop />
    <b-container fluid>
      <router-view/>
    </b-container>
<<<<<<< HEAD
    <CustomText1 />
    <CustomText2 />
    <Manufacturer />
=======
>>>>>>> 51a514a69c256869c6f128b90910d3526186773a
    <Contact />
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import HeaderBefore from '@/components/HeaderBefore'
import HeaderTop from '@/components/HeaderTop'
<<<<<<< HEAD
import CustomText1 from '@/components/CustomText1'
import CustomText2 from '@/components/CustomText2'
import Manufacturer from '@/components/Manufacturer'
=======
>>>>>>> 51a514a69c256869c6f128b90910d3526186773a
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    HeaderNav,
    HeaderBefore,
    HeaderTop,
<<<<<<< HEAD
    CustomText1,
    CustomText2,
    Manufacturer,
=======
>>>>>>> 51a514a69c256869c6f128b90910d3526186773a
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
