<template>
  <div class="home">
    <h1> Home Page </h1>
    <LastOrder />
    <CustomText1 />
    <CustomText2 />
    <Manufacturer />
  </div>
</template>

<script>
import LastOrder from '@/components/LastOrder'
import CustomText1 from '@/components/CustomText1'
import CustomText2 from '@/components/CustomText2'
import Manufacturer from '@/components/Manufacturer'
export default {
  name: 'home',
  components: {
    LastOrder,
    CustomText1,
    CustomText2,
    Manufacturer
  }
}
</script>
