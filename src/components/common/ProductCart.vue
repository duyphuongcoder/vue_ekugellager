<template>
  <div class="product-cart">
    <h1 class="h1 product_name_h1" itemprop="name">Hummingbird printed t-shirt</h1>
    <b-row class="quality-pricelist">
      <b-col lg="4" cols="4" class="title">
        Qualität
      </b-col>
      <b-col lg="8" cols="8">
        <ul class="grade">
          <li class="active"></li>
          <li class="active"></li>
          <li class="active"></li>
          <li></li>
        </ul>
      </b-col>
    </b-row>
    <div class="product-information">
      <div class="product-description-short">
        <p><span>Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton. </span></p>
        <p></p>
      </div>
      <div class="product-actions">
        <b-form action="#">
          <div class="product-variants">
            <div class="clearfix product-variants-item">
              <span class="control-label">Size</span>
              <b-form-select v-model="selected" :options="options"></b-form-select>
              <div style="display: none;"> {{selected}} </div>
            </div>
            <div class="clearfix product-variants-item">
              <span class="control-label">Color</span>
              <b-form-group label="">
                <b-form-radio  name="color-radio" value="white">White</b-form-radio>
                <b-form-radio  name="color-radio" value="black">Black</b-form-radio>
              </b-form-group>
            </div>
          </div>
          <div class="product-add-to-cart">
            <b-row class="product-prices">
              <b-col md="4" class="reduce-padding">
                <p class="cusomter_rank_proud">
                  <span class="rank_val">0</span>
                  <span class="rank_text">Rang</span>
                </p>
              </b-col>
              <b-col md="8" class="reduce-padding text-right">
                <div class="product-discount">
                  <span class="regular-price">€28.44</span>
                </div>
                <div class="product-price has-discount">
                  <span>€22.75</span>
                </div>
                <div class="tax-shipping-delivery-label">Tax included</div>
              </b-col>
            </b-row>
            <p>229 ready to ship</p>
            <b-row class="add-to-cart">
              <b-col cols="4" class="p-0">
                <b-form-input type="number" value="1"></b-form-input>
              </b-col>
              <b-col cols="8" class="p-0">
                <b-button>WARENKORB</b-button>
              </b-col>
            </b-row>
            <b-row class="compare-remember">
              <b-col md="12">
                <b-button>Remember</b-button>
                <b-button>Compare &</b-button>
              </b-col>
            </b-row>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '0',
      options:
      [
        { value: '0', text: 'S' },
        { value: '1', text: 'M' },
        { value: '2', text: 'L' },
        { value: '3', text: 'XL' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.product-cart {
    background: #12407E;
    padding: 15px;
    color: #fff;
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
    h1 {
      padding-bottom: 10px;
      border: none;
      font-size: 18px;
    }
    .quality-pricelist {
      height: 40px;
      line-height: 40px;
      .title {
        text-align: left;
      }
      .grade {
        margin: 0;
        margin-top: 15px;
        display: flex;
        -ms-flex-pack: distribute!important;
        justify-content: space-between!important;
        li {
          width: 20%;
          margin-left: auto;
          margin-right: auto;
          background: #F0F0F0;
          height: 10px;
        }
        li.active {
          background: #36D94F;
        }
      }
    }
    .product-information {
      text-align: left;
      .product-description-short{
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
        padding-top: 10px;
      }
      .product-variants {
        .product-variants-item {
          margin: 1.25rem 0;
        }
        .control-label {
          margin-bottom: .375rem;
          display: block;
          width: 100%;
        }
        select {
          width: auto;
        }
      }
      .product-prices {
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        .product-discount {
          margin-bottom: 5px;
          text-decoration: line-through;
        }
        .has-discount {
          font-size: 40px;
          line-height: 1.1;
        }
      }
      .add-to-cart {
        input {
          text-align: center;
        }
        button {
          width: 100%;
          background: #B2162C;
        }
      }
      .compare-remember {
        button {
          float: right;
          background: none;
          border: none;
        }
      }
    }
  }
</style>
