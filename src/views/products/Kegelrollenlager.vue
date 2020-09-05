<template>
  <b-container class="kegelrollenlager">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is kegelrollenlager page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'kegelrollenlager',
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
        },
        {
          text: 'header.kegelrollenlager',
          route: 'kegelrollenlager'
        }
      ]
    }
  }
}
</script>
