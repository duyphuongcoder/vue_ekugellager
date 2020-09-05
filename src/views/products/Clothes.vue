<template>
  <b-container class="clothes">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is Clothes page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'clothes',
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
        }
      ]
    }
  }
}
</script>
