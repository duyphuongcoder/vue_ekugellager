<template>
  <b-container>
    <div class="product detail mt-5">
      <b-row>
        <b-col md="5">
          <section class="page-content">
            <ProductImages :images="images" v-if="images.length" :description_short="description_short"/>
            <div class="scroll-box-arrows"></div>
            <div class="product-configurators"></div>
            <ProductDescription :description="description"/>
          </section>
        </b-col>
        <b-col md="7">
          <b-row>
            <b-col lg="6" class="product_features">
              <ProductTechnical :items="product_features" v-if="product_features.length" />
            </b-col>
            <b-col lg="6" class="product_cart">
              <ProductCart :addtocart="addToCart" :details="cart_details"/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="featured-products clearfix mt-3">
        <h4>{{$t('products.also_bought')}}</h4>
        <b-row class="products">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in featured_products" :key="index">
              <ProductBox :product="item" :addtocart="addToCart"/>
          </b-col>
        </b-row>
      </div>
    </div>
    <BlockCartModal />
  </b-container>
</template>
<script>
import { ProductServices } from '@/services/index'
import ProductImages from '@/components/common/ProductImages'
import ProductTechnical from '@/components/common/ProductTechnical'
import ProductDescription from '@/components/common/ProductDescription'
import ProductBox from '@/components/common/ProductBox'
import ProductCart from '@/components/common/ProductCart'
import BlockCartModal from '@/components/common/BlockCartModal'
export default {
  name: 'product',
  metaInfo () {
    return {
      title: this.product_name
    }
  },
  components: {
    ProductImages,
    ProductTechnical,
    ProductDescription,
    ProductBox,
    ProductCart,
    BlockCartModal
  },
  data () {
    return {
      product_features:
      [
      ],
      images: [
      ],
      description: {
        text: '',
        reference: '',
        in_stock: ''
      },
      description_short: '',

      product_name: '',
      cart_details: {
        name: '',
        quality: '',
        description_short: '',
        groups: [],
        base_price: '',
        price: ''
      },
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
  },
  methods: {
    addToCart (n) {
      console.log('count to add', n)
      this.$bvModal.show('blockcart_modal')
    }
  },
  mounted () {
    const params = {
      shopId: 1,
      langId: 2,
      productId: this.$route.params.id_product
    }
    ProductServices.productDetails(params).then(res => {
      console.log(res)
      // browswer title
      this.product_name = res.name
      // product images
      res.gallery.forEach((item, index) => {
        this.images.push({
          id: index + 1,
          url: item[0].value
        })
      })
      this.description_short = res.description_short
      // product description
      this.description.text = res.description
      this.description.reference = res.reference
      this.description.in_stock = res.quantity
      // product technical features
      this.product_features = res.features
      // cart details
      this.cart_details.name = res.name
      var qualityFeature = res.features.filter((item, index) => item.name === 'Quality')
      this.cart_details.quality = qualityFeature.length ? qualityFeature[0].value : ''
      this.cart_details.description_short = res.description_short
      this.cart_details.groups = res.groups
      this.cart_details.base_price = res.base_price
      this.cart_details.price = res.price
    })
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
