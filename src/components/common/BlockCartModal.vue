<template>
  <div class="shopping-cart-detail">
    <b-modal :id="modalId" hide-footer class="cart-details-subhe show-cart-detail" size="xl">
        <div slot="modal-title">
            <b-icon icon="check2"></b-icon>
            <span>Product successfully added to your shopping cart</span>
        </div>
        <div class="modal-body">
            <b-row>
                <b-col md="5" sm="12" class="divide-right">
                    <b-row>
                        <b-col md="6" sm="12">
                            <img src="https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg" class="product-image"/>
                        </b-col>
                        <b-col md="6" sm="12">
                            <h6 class="h6 product-name">Hummingbird printed sweater</h6>
                            <p class="product-price">€0.00</p>
                            <span>Quantity:&nbsp;<strong>7</strong></span>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="7" sm="12">
                    <div class="cart-content">
                        <p class="cart-products-count">There are 23 items in your cart.</p>
                        <p><span class="label">Subtotal:</span>&nbsp;<span class="value">€2,328.40</span></p>
                        <p><span>Shipping:</span>&nbsp;<span class="value">Free </span></p>
                        <p class="product-total"><span class="label">Total&nbsp;(tax incl.)</span>&nbsp;<span class="value">€2,328.40</span></p>
                        <div class="cart-content-btn">
                            <b-button variant="secondary" @click="$bvModal.hide('blockcart_modal')">Continue shopping</b-button>
                            <router-link :to="$i18nRoute({ name: 'cart'})">
                                <b-button variant="danger">
                                    <b-icon icon="check2"></b-icon>
                                    Proceed to checkout
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </b-modal>
  </div>
</template>

<script>
import { BLOCK_CART_MODAL } from '@/constants/modal'
export default {
  data () {
    return {
      modalId: BLOCK_CART_MODAL
    }
  }
}
</script>

<style scoped lang="scss">

</style>
