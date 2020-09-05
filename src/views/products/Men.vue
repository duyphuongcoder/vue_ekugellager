<template>
  <b-container class="men">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is Men page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'men',
  components: {
    CatlogBar
  },
  data () {
    return {
      catRoutes: [
        {
          text: 'header.home',
          route: 'home'
        },
        {
          text: 'header.clothes',
          route: 'clothes'
        },
        {
          text: 'header.men',
          route: 'men'
        }
      ]
    }
  }
}
</script>
