<template>
  <ul class="cart_checkout">
    <li class="">
      <div class="price">
        <b-row class="shipping pb-3">
          <b-col cols="8" class="desc">
            <h6>shipping</h6>
            <h6>VERSANDKOSTENFREI AB 250€</h6>
          </b-col>
          <b-col cols="4" class="value">
            <h6>€0.00</h6>
          </b-col>
        </b-row>
        <b-row class="total pt-3">
          <b-col cols="8" class="desc">
            <h6>Gesamt</h6>
          </b-col>
          <b-col cols="4" class="value">
            <h6>€1080.98</h6>
          </b-col>
        </b-row>
      </div>
      <div class="voucher pt-3">
        <b-row>
          <b-col cols="6" lg="8" class="pr-0"><b-form-input placeholder="Gutschein Code"></b-form-input></b-col>
          <b-col cols="6" lg="4" class="pl-0"><b-button>Verwenden</b-button></b-col>
        </b-row>
      </div>
      <div class="checkout pt-3">
        <b-row>
          <router-link :to="$i18nRoute({ name: 'order'})">
            checkout
          </router-link>
        </b-row>
      </div>
      <div class="blockreassurance_product pt-5">
        <div class="d-flex mt-3 mb-3">
          <span class="item-product mr-2"><b-icon icon="check2" font-scale="2"></b-icon></span>
          <p class="block-title">Datenschutzbedingungen (bearbeiten im Modul "Kundenvorteile")</p>
        </div>
        <div class="d-flex mt-3 mb-3">
          <span class="item-product mr-2"><b-icon icon="check2" font-scale="2"></b-icon></span>
          <p class="block-title">Lieferbedingungen (bearbeiten im Modul "Kundenvorteile")</p>
        </div>
        <div class="d-flex mt-3 mb-3">
          <span class="item-product mr-2"><b-icon icon="check2" font-scale="2"></b-icon></span>
          <p class="block-title">Rücksendebedingungen (bearbeiten im Modul "Kundenvorteile")</p>
        </div>
        <div class="d-flex mt-3 mb-3">
          <span class="item-product mr-2"><b-icon icon="check2" font-scale="2"></b-icon></span>
          <p class="block-title"></p>
        </div>
      </div>
    </li>
  </ul>
</template>>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.cart_checkout {
  background: linear-gradient(90deg, rgba(18,64,126,1) 0%, rgba(17,61,119,1) 68%, rgba(14,49,96,1) 100%);
  transition: all .45s cubic-bezier(.3,0,.15,1);
  margin-bottom: 20px;
  border: 1px solid #12407e;
  box-shadow: 0px 3px 6px #00000029;
  padding: 30px 15px;
  border-radius: 8px;
  color: #fff;
  min-height: auto;
  .price {
    .desc {
      text-align: left;
      text-transform: uppercase;
    };
    .desc>h6:nth-child(2) {
      font-weight: 100;
    }
    .value {
      text-align: right;
      margin-top: auto;
    }
    .shipping {
      border-bottom: 1px solid;
    }
  }
  .voucher {
    button {
      width: 100%;
      background-color: #ccc;
      color: #113b72;
      height: 50px;
      text-transform: uppercase;
    }
    button:hover {
      background-color: #b2162c;
      color: #fff;
    }
    input {
      height: 50px;
    }
  }
  .checkout {
    a {
      background: #B2162C;
      color: #fff ;
      border: 1px solid #B2162C;
      padding: 8px 25px;
      border-radius: 8px;
      text-align: center;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      text-transform: uppercase;
      font-weight: 700;
      margin: auto;
    }
  }
  .blockreassurance_product {
    text-align: left;
  }
}
</style>
