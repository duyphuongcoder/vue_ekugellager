<template>
  <b-container>
    <div class="product detail mt-5">
      <b-row>
        <b-col md="5">
          <section class="page-content">
            <ProductImages :images="images" v-if="images.length" :description_short="description_short" :prices="prices"/>
            <div class="scroll-box-arrows"></div>
            <div class="product-configurators"></div>
            <ProductDescription :description="description" v-if="description"/>
          </section>
        </b-col>
        <b-col md="7">
          <b-row>
            <b-col lg="6" class="product_features">
              <ProductTechnical :items="product_features" v-if="product_features.length" />
            </b-col>
            <b-col lg="6" class="product_cart">
              <ProductCart :addtocart="addToCart" :details="cart_details" :selected_groups="selected_groups" v-if="cart_details.name"/>
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
import { Trans } from '../../lang/Translation'
import { ProductServices } from '@/services/index'
import ProductImages from '@/components/common/ProductImages'
import ProductTechnical from '@/components/common/ProductTechnical'
import ProductDescription from '@/components/common/ProductDescription'
import ProductBox from '@/components/common/ProductBox'
import ProductCart from '@/components/common/ProductCart'
import BlockCartModal from '@/components/common/BlockCartModal'
import { loadingSpinnerConfig } from '@/config/settings'
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
      product_details: {},
      product_features:
      [
      ],
      images: [
      ],
      prices: {},
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
        price: '',
        quantity: ''
      },
      selected_groups: [],
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
    },
    setTitle (name) {
      this.product_name = name
    },
    setProductImages (images, description, prices) {
      this.images = images

      this.description_short = description
      this.prices = prices
    },
    setProductDescription (description, reference, quantity) {
      this.description.text = description
      this.description.reference = reference
      this.description.in_stock = quantity
    },
    setProductFeatures (features) {
      this.product_features = features.filter((item, index) => item.name !== 'Quality')
    },
    setProductCart (res, quantity) {
      this.cart_details.name = res.name
      var qualityFeature = res.features.filter((item, index) => item.name === 'Quality')
      this.cart_details.quality = qualityFeature.length ? qualityFeature[0].value : ''
      this.cart_details.description_short = res.description_short
      this.cart_details.groups = res.groups
      this.cart_details.base_price = res.base_price
      this.cart_details.price = res.price
      this.cart_details.quantity = quantity
    },
    setSelectedGroups (groups) {
      this.selected_groups = []
      groups.forEach((item, index) => {
        // use default value in case of non query
        var groupValue = this.$route.query[item.group_name] ? this.$route.query[item.group_name] : item.default
        this.selected_groups.push(parseInt(groupValue))
      })
    },
    manageProductDetails (res) {
      var quantity, prices
      var images = []
      if (res.groups.length) { // in case of group exists
        this.setSelectedGroups(res.groups)
        var combinations = res.combinations.filter((item, index) => JSON.stringify(item.attributes) === JSON.stringify(this.selected_groups))
        combinations[0].images.forEach((item, index) => {
          images.push({
            id: index + 1,
            url: item.value
          })
        })
        quantity = combinations[0].quantity
        prices = combinations[0].specific_price
      } else { // in case of group doesn't exist
        res.gallery.forEach((item, index) => {
          images.push({
            id: index + 1,
            url: item[0].value
          })
        })
        quantity = res.quantity
        prices = res.specific_prices
      }
      // browswer title
      this.setTitle(res.name)
      // product technical features
      this.setProductFeatures(res.features)
      // cart details
      this.setProductCart(res, quantity)
      // product images
      this.setProductImages(images, res.description_short, prices)
      // product description
      this.setProductDescription(res.description, res.reference, quantity)
    },
    getProductDetails () {
      const params = {
        shopId: 1,
        langId: Trans.getLangId(Trans.currentLanguage),
        productId: this.$route.params.id_product
      }
      this.loader = this.$loading.show(loadingSpinnerConfig)
      ProductServices.productDetails(params).then(res => {
        console.log(res)
        this.product_details = res
        this.manageProductDetails(this.product_details)
        this.loader.hide()
      })
    }
  },
  mounted () {
    this.getProductDetails()
    console.log(this.$store.getters)
  },
  watch: {
    $route (to, from) {
      if (to.path !== from.path) {
        this.getProductDetails()
      } else {
        this.manageProductDetails(this.product_details)
      }
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
