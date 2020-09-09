<template>
  <div class="shopping-cart-detail">
    <b-modal :id="modalId" hide-footer hide-header class="cart-details-subhe show-cart-detail">
        <div class="shopping_cart_top_heading">
            <h1>
                WARENKORB
                <a href="#" @click="$bvModal.hide(modalId)" class="close_shopping_cart_top">
                    <b-icon icon="x"></b-icon>
                </a>
            </h1>
        </div>
        <div>
            <div class="cart-canvas-price-button">
                <b-row class="netto-price">
                    <b-col class="col-lg-8 px-0">Gesamt netto:</b-col>
                    <b-col class="col-lg-4 px-0 text-right">0,00&nbsp;€</b-col>
                </b-row>
                <b-row class="tax-price">
                    <b-col class="col-lg-8 px-0">+ 19% MwSt.</b-col>
                    <b-col class="col-lg-4 px-0 text-right ">0€</b-col>
                </b-row>
                <b-row class="total-price">
                    <b-col class="col-lg-8 px-0">Gesamt</b-col>
                    <b-col class="col-lg-4 px-0 text-right"><span class="total_price">0,00&nbsp;€</span></b-col>
                </b-row>
                <div class="continue-preview-cart continue-shopping">
                    <div class="col-md-12 col-12 text-center col-xs-12">
                        <a href="" class="continue-shopping-a continue-checkout">Zur Kasse</a>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
import { SHOPPING_CART_MODAL } from '@/constants/modal'
export default {
  data () {
    return {
      modalId: SHOPPING_CART_MODAL
    }
  }
}
</script>

<style scoped lang="scss">

</style>
