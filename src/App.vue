<template>
  <div id="app">
    <HeaderNav />
    <HeaderBefore />
    <HeaderTop />
    <div id="nav">
      <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('Home') }}</router-link> |
      <router-link :to="$i18nRoute({ name: 'clothes'})">{{ $t('Clothes') }}</router-link> |
      <router-link :to="$i18nRoute({ name: 'men'})">{{ $t('Men') }}</router-link> |
      <router-link :to="$i18nRoute({ name: 'women'})">{{ $t('Women') }}</router-link> |
      <router-link :to="$i18nRoute({ name: 'about'})">{{ $t('About') }}</router-link>
    </div>
    <b-container fluid>
      <router-view/>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
import HeaderBefore from '@/components/HeaderBefore'
import HeaderTop from '@/components/HeaderTop'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    HeaderNav,
    HeaderBefore,
    HeaderTop,
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
