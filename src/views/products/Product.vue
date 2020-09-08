<template>
  <b-container>
    <div class="product detail mt-5">
      <b-row>
        <b-col md="5">
          <section class="page-content">
            <ProductImages :images="images"/>
            <div class="scroll-box-arrows"></div>
            <div class="product-configurators"></div>
            <ProductDescription />
          </section>
        </b-col>
        <b-col md="7">
          <b-row>
            <b-col lg="6" class="product_features">
              <ProductTechnical :items="items" />
            </b-col>
            <b-col lg="6" class="product_cart">
              <ProductCart />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="featured-products clearfix mt-3">
        <h4>Customers who bought this product also bought:</h4>
        <b-row class="products">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in featured_products" :key="index">
              <ProductBox :product="item"/>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>
<script>
import ProductImages from '@/components/common/ProductImages'
import ProductTechnical from '@/components/common/ProductTechnical'
import ProductDescription from '@/components/common/ProductDescription'
import ProductBox from '@/components/common/ProductBox'
import ProductCart from '@/components/common/ProductCart'
export default {
  name: 'product',
  components: {
    ProductImages,
    ProductTechnical,
    ProductDescription,
    ProductBox,
    ProductCart
  },
  data () {
    return {
      items:
      [
        { name: 'Composition', value: 'Cotton' },
        { name: 'Property', value: 'Short Sleeves' },
        { name: 'Ø Inside', value: '10' },
        { name: 'Ø External', value: '26' },
        { name: 'Width', value: '8' }
      ],
      images: [
        {
          id: 1,
          url: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        },
        {
          id: 2,
          url: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg'
        }
      ],
      filterData:
      [
        {
          type: 'box',
          content: {
            title: 'Size',
            items: [
              {
                name: 'S',
                count: 1
              },
              {
                name: 'M',
                count: 1
              },
              {
                name: 'L',
                count: 1
              },
              {
                name: 'XL',
                count: 1
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Color',
            items: [
              {
                name: 'White',
                count: 4
              },
              {
                name: 'Black',
                count: 4
              }
            ]
          }
        }
      ],

      featured_products: [
        {
          id: 231,
          name: 'Preis ab',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg'
        },
        {
          id: 1345,
          name: 'Preis ab',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.product.detail {
  .page-content {
    position: relative;
    max-width: 452px;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 30px;

  }
  .featured-products {
      h4 {
        text-align: left;
      }
    }
}
</style>
