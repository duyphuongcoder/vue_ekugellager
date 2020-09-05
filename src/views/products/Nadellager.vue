<template>
  <b-container class="nadellager">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is nadellager page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'nadellager',
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
          text: 'header.nadellager',
          route: 'nadellager'
        }
      ]
    }
  }
}
</script>
