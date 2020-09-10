<template>
  <div class="home">
    <ParallaxWindow />
    <div class="product-advisor">
      <ProductAdvisor />
    </div>
    <LastOrder />
    <CustomText1 />
    <CustomText2 />
    <Manufacturer />
    <Contact />
  </div>
</template>

<script>
import ParallaxWindow from './parallax/ParallaxWindow'
import ProductAdvisor from './ProductAdvisor'
import LastOrder from './LastOrder'
import CustomText1 from './CustomText1'
import CustomText2 from './CustomText2'
import Manufacturer from './Manufacturer'
import Contact from './Contact'
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
<style lang="scss" scoped>
.product-advisor {
  margin-top: -110px;
}
</style>>
