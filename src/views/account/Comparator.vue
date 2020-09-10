<template>
  <b-container class="compare mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title text-left">Products compare</h1>
        <div class="text-right">
          <a href="#">Remove all products</a>
          <hr>
        </div>
        <div class="compare-table pt-5">
          <table>
            <tr v-for="(field, index) in fields" :key="index">
              <td class="">{{index==0?'':field}}</td>
              <td v-for="(item, index_item) in items" :key="index_item">
                <div class="product" v-if="index==0">
                  <a href="#" class="float-right mb-3">
                    <b-icon icon="backspace" ></b-icon>
                  </a>
                  <div class="thumb-mask">
                    <a href="https://ekugellager.roccshow.com/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white"> <img class="img-fluid" src="https://ekugellager.roccshow.com/2-home_default/hummingbird-printed-t-shirt.jpg" alt="Hummingbird printed t-shirt"></a>
                  </div>
                  <div class="product-name">
                    <a href="https://ekugellager.roccshow.com/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white">Hummingbird printed t-shirt</a>
                  </div>
                  <div class="product-price text-muted">
                    <span class="regular-price mr-3">€28.44</span>
                    <span class="product-price">€22.75</span>
                  </div>
                </div>
                <div v-else>{{Object.values(item)[index]}}</div>
              </td>
            </tr>
          </table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  },
  data () {
    return {
      fields:
      [
        'product', 'composition', 'property', 'quality', 'inside', 'external', 'width'
      ],
      items:
      [
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' },
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' },
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' },
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' },
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' },
        { image: 'Hummingbird printed t-shirt', composition: 'cotton', property: 'sleeves', quality: 'very good', inside: '10', external: '26', width: '8' }

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.account-right {
  padding-right: 0%;
  padding-left: 80px;
  margin-bottom: 50px;
  .header-title {
    color: #12407E;
    font-size: 24px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid #707070;
  }
}
.compare-table {
  overflow-x: auto;
  margin-left: 100px;
  table {
    width: 100%;
    tr {
      border-top: 1px solid #f6f6f6;
      td {
        min-width: 200px;
        padding: .75rem;
        font-weight: 600;
        text-transform: capitalize;
      }
    }
    tr>td:first-child {
      position: absolute;
      left: 0;
      font-weight: 900;
      text-transform: capitalize;
      border-top: 1px solid #f6f6f6;
    }
  }
  .regular-price {
    text-decoration: line-through;
  }
}
</style>
