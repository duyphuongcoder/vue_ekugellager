<template>
  <b-container class="cart mt-5">
    <div class="page-title text-center mb-5">
      <h3>{{$t('products.shoppingcart')}}</h3>
    </div>
    <div class="shopping-cart mb-5">
      <b-container>
        <b-row>
          <b-col lg="8" cols="12">
            <CartOverview :items="items"/>
          </b-col>
          <b-col lg="4" cols="12">
            <CartCheckout />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>

<script>
import CartOverview from '@/components/common/CartOverview'
import CartCheckout from '@/components/common/CartCheckout'
export default {
  name: 'cart',
  components: {
    CartOverview,
    CartCheckout
  },
  data () {
    return {
      items:
      [
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.cart {
  .page-title {
    text-transform: uppercase;
  }
}
</style>
