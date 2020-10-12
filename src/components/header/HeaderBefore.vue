<template>
  <div class="header-before">
    <b-container fluid>
      <b-row class="top_section">
          <b-col md="3" sm="12" class="top-logo mt-2">
            <span class="menu_bar_btn d-block d-md-none" v-b-toggle.collapse-menu>
              <b-icon icon="list" class="collapsed-icon"></b-icon>
              <b-icon icon="x" class="opened-icon"></b-icon>
            </span>
            <router-link :to="$i18nRoute({ name: 'home'})">
              <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            </router-link>
          </b-col>
          <b-col md="6" sm="12" class="search-section mt-2">
            <div id="search_widget" class="search-widget mb-2">
              <b-form-input v-model="search_key" :placeholder="$t('header.search_for_catalog')"></b-form-input>
              <b-button variant="outline-primary">
                <b-icon icon="search"></b-icon>
              </b-button>
            </div>
          </b-col>
          <b-col md="3" sm="12" class="header-before-right-nav mt-2">
            <div>
              <div class="user-info">
                <router-link v-if="this.$store.getters.isLoggedIn" :to="$i18nRoute({ name: 'rank'})">
                  <b-button variant="outline-primary" class="btn-circle user-rank">
                  {{rank}} Rank
                  </b-button>
                </router-link>
                <router-link :to="this.$store.getters.isLoggedIn ? $i18nRoute({ name: 'my-account'}) : $i18nRoute({ name: 'login'})">
                  <b-button variant="outline-primary" class="btn-circle" v-b-tooltip.hover.bottomright :title="this.$store.getters.isLoggedIn ? 'Visit my account' : $t('header.log_in_to_your_customer_account')">
                    <b-icon icon="person"></b-icon>
                  </b-button>
                </router-link>
              </div>
            </div>
            <div>
              <div class="blockcart cart-preview inactive">
                <b-button variant="outline-primary" v-b-modal="modalId" class="btn-circle">
                  <b-icon icon="cart3"></b-icon>
                  <span class="cart-products-count">0</span>
                </b-button>
              </div>
            </div>
          </b-col>
      </b-row>
      <Menu data="d-block d-md-none"/>
    </b-container>
    <ShoppingCartModal />
  </div>
</template>

<script>
import ShoppingCartModal from '@/components/common/ShoppingCartModal'
import { SHOPPING_CART_MODAL } from '@/constants/modal'
import Menu from './Menu'
import { UserServices } from '@/services/index'
export default {
  components: {
    ShoppingCartModal,
    Menu
  },
  data () {
    return {
      modalId: SHOPPING_CART_MODAL,
      search_key: '',
      user: null,
      rank: 0
    }
  },
  mounted () {
    this.user = this.$store.getters.user
    if (this.$store.getters.isLoggedIn && this.user) {
      UserServices.getUserRank(this.user.id_customer).then(resp => {
        this.rank = resp.customerrank.rank
      })
    }
  }
}
</script>

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
    margin: auto;
    .menu_bar_btn {
      color: #12407E;
      position: absolute;
      left: 20px;
      top: 10px;
    }
    img {
      max-width: 220px;
    }
    .search-section .search-widget {
      display: flex;
      max-width: 400px;
      margin: auto;
      margin-top: 3px;
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
  .header-before .container-fluid {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .header-before .top_section .top-logo {
    box-shadow: 0px 0px 3px 0px #0004!important;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px;
  }
  .header-before .top_section .search-section .search-widget button {
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
    height: 40px !important;
    transform: translate(-8px, -1px) !important;
  }
  .header-before-right-nav {
    display: none !important;
  }
}
</style>
