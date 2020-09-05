<template>
  <b-container class="axiallager">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is axiallager page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'axiallager',
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
          text: 'header.axiallager',
          route: 'axiallager'
        }
      ]
    }
  }
}
</script>
