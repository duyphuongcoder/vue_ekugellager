<template>
  <div class="shopping-cart-detail">
    <b-modal id="shopping_cart" hide-footer hide-header class="cart-details-subhe show-cart-detail">
        <div class="shopping_cart_top_heading">
            <h1>
                WARENKORB
                <a href="#" @click="$bvModal.hide('shopping_cart')" class="close_shopping_cart_top">
                    <b-icon icon="x"></b-icon>
                </a>
            </h1>
        </div>
        <div>
            <div class="cart-canvas-price-button">
                <div class="row netto-price">
                    <div class="col-lg-8 px-0">Gesamt netto:</div>
                    <div class="col-lg-4 px-0 text-right">0,00&nbsp;€</div>
                </div>
                <div class="row tax-price">
                    <div class="col-lg-8 px-0">+ 19% MwSt.</div>
                    <div class="col-lg-4 px-0 text-right ">0€</div>
                </div>
                <div class="row total-price">
                    <div class="col-lg-8 px-0">Gesamt</div>
                    <div class="col-lg-4 px-0 text-right"><span class="total_price">0,00&nbsp;€</span></div>
                </div>
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

<style scoped lang="scss">

</style>
