<template>
  <b-container class="kombinierte-axial-radiallager">
    <CatlogBar :catRoutes="catRoutes"/>
    <h1> This is kombinierte-axial-radiallager page </h1>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
export default {
  name: 'kombinierte-axial-radiallager',
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
          text: 'header.kombinierte_axial_radiallager',
          route: 'kombinierte-axial-radiallager'
        }
      ]
    }
  }
}
</script>
