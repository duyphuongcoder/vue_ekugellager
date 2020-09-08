<template>
  <div class="cart-overview js-cart">
    <div class="body">
      <ul class="cart-items">
        <li class="cart_page_heading_li d-none d-md-block">
          <b-row>
            <b-col md="2">Produkt</b-col>
            <b-col md="3">Bestelldetails</b-col>
            <b-col md="2">Menge</b-col>
            <b-col md="2">STÜCKPREIS</b-col>
            <b-col md="2">Total</b-col>
            <b-col md="1">&nbsp;</b-col>
          </b-row>
        </li>
        <li class="cart-item cart_page_detail_li" v-for="(item, index) in items" :key="index">
          <b-row class="product-line-grid cart-detail-desktop">
            <b-col md="2" class="img">
              <div><b-img :src="item.img"></b-img></div>
            </b-col>
            <b-col md="3" class="name_category">
                <p class="category">{{item.category}}</p>
                <a class="name" href="#">{{item.name}}</a>
            </b-col>
            <b-col md="2" class="quantity">
              <b-form-input type="number" min="1" :value="item.quantity"></b-form-input>
            </b-col>
            <b-col md="2" class="unit_price">
              <p class="regular_price">{{item.price.unit + item.price.regular}}</p>
              <p class="discount">{{'-'+ item.price.discount + item.price.discount_type}}</p>
              <p class="current_price">{{item.price.unit + item.price.current}}</p>
            </b-col>
            <b-col md="2" class="total_price">
              <p>€{{item.price.current * item.quantity}}</p>
            </b-col>
            <b-col md="1" class="remove">
              <b-icon icon="trash" font-scale="1.5"></b-icon>
            </b-col>
          </b-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  },
  data () {
    return {

    }
  }
}
</script>>
<style lang="scss" scoped>
.cart-overview {
  background: #fff;
  border-radius: 8px;
  border: solid 1px #E9E9E9;
  box-shadow: 0px 3px 6px #00000029;
  ul li {
    padding: 0 30px;
  }
  ul li:first-child {
    text-transform: uppercase;
    color: #303030;
    font-size: 16px;
    font-weight: 500;
    padding: 40px 30px;
  }
  .cart_page_detail_li {
    border-top: 1px solid #E9E9E9;
    .product-line-grid>div {
      margin: auto;
    }
    .name_category {
      p.cateogry {
        font-size: 14px;
        font-weight: 500;
        color: #707070;
      }
      a.name {
        color: #303030;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .quantity {
      input {
        text-align: center;
      }
    }
    .unit_price {
      .regular_price {
        color: #7a7a7a;
        text-decoration: line-through;
      }
      .discount {
        width: fit-content;
        background: #b2162c;
        border-radius: 4px;
        padding: 0 5px;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
      }
      .current_price {
        color: #b2162c;
        font-weight: 800;
      }
    }
    .total_price {
      font-weight: 800;
    }
    .remove {
      cursor: pointer;
    }
  }
}
</style>
