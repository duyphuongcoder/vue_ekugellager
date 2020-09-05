<template>
  <b-container class="women">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is Women page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'women',
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
          text: 'header.women',
          route: 'women'
        }
      ]
    }
  }
}
</script>
