<template>
  <div class="home">
    <ParallaxWindow />
    <ProductAdvisor />
    <LastOrder />
    <CustomText1 />
    <CustomText2 />
    <Manufacturer />
    <Contact />
  </div>
</template>

<script>
import ParallaxWindow from '@/components/ParallaxWindow'
import ProductAdvisor from '@/components/ProductAdvisor'
import LastOrder from '@/components/LastOrder'
import CustomText1 from '@/components/CustomText1'
import CustomText2 from '@/components/CustomText2'
import Manufacturer from '@/components/Manufacturer'
import Contact from '@/components/Contact'
export default {
  name: 'home',
  components: {
    ParallaxWindow,
    ProductAdvisor,
    LastOrder,
    CustomText1,
    CustomText2,
    Manufacturer,
    Contact
  }
}
</script>
