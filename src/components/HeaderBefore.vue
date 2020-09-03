<template>
  <div class="header-before">
    <b-container fluid>
      <b-row class="top_section">
          <b-col md="3" sm="12" class="mt-1">
            <a href="/">
              <img class="logo img-responsive" src="../assets/img/logo.jpg"/>
            </a>
          </b-col>
          <b-col md="6" sm="12" class="search-section mt-1">
            <div id="search_widget" class="search-widget">
              <b-form-input v-model="search_key" :placeholder="$t('header.search_for_catalog')"></b-form-input>
              <b-button variant="outline-primary">
                <b-icon icon="search"></b-icon>
              </b-button>
            </div>
          </b-col>
          <b-col md="3" sm="12" class="header-before-right-nav mt-1">
            <div>
              <div class="user-info">
                <b-button variant="outline-primary" class="btn-circle user-rank">
                 0 Rank
                </b-button>
                <router-link :to="$i18nRoute({ name: 'home'})">
                  <b-button variant="outline-primary" class="btn-circle" v-b-tooltip.hover.bottomright :title="$t('header.log_in_to_your_customer_account')">
                    <b-icon icon="person"></b-icon>
                  </b-button>
                </router-link>
              </div>
            </div>
            <div>
              <div class="blockcart cart-preview inactive">
                <b-button variant="outline-primary" class="btn-circle">
                  <b-icon icon="cart3"></b-icon>
                  <span class="cart-products-count">0</span>
                </b-button>
              </div>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search_key: ''
    }
  }
}
</script>>

<style scoped lang="scss">
.header-before {
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
  z-index: 2;
  .top_section {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    display: flex;
    width: 100%;
    img {
      max-width: 220px;
    }
    .search-section .search-widget {
      display: flex;
      max-width: 400px;
      margin: auto;
      input {
        border: #D8D8D8 1px solid;
        border-radius: 8px;
      }
      input:focus {
        outline: none;
        box-shadow: none !important;
        border-radius: 8px;
        border: #12407E 1px solid;
      }
      button {
        background: #12407E;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        color: #f1f1f1 !important;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        cursor: pointer;
        border-color: transparent;
        transform: translate(-17px, -7px);
      }
      button:hover {
        background: #B2162C;
        box-shadow: none !important;
      }
      button:visited {
        border-color: transparent;
        box-shadow: none !important;
      }
      button:active {
        border-color: transparent;
        box-shadow: none !important;
      }
    }
    .header-before-right-nav {
      display: flex;
      justify-content: center;
      .user-info {
        display: flex;
        .user-rank {
          font-size: 12px;
          font-weight: bold;
        }
      }
      .blockcart {
        .cart-products-count {
          background: #12407E;
          color: #fff !important;
          border-radius: 50%;
          height: 22px;
          width: 22px;
          line-height: 22px;
          position: absolute;
          font-size: 12px;
          transform: translate(12px, -40px);
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .header-before-right-nav {
    display: none !important;
  }
}
</style>
