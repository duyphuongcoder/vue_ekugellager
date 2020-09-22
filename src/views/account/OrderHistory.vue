<template>
  <b-container class="order-history mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <b-row class="header">
          <b-col cols="12" sm="6">
            <h1 class="header-title text-center text-sm-left">{{$t('account.order_history')}}</h1>
          </b-col>
          <b-col cols="12" sm="6">
            <p class="text-right"><a href="#" class="return-history">Merchandise returns<b-icon icon="arrow-counterclockwise"></b-icon></a></p>
          </b-col>
        </b-row>
        <b-row class="my-3 float-right search-section">
          <b-form inline>
            <b-form-group class="">
              <b-form-input class="search-input"
                type="text"
                placeholder="Auftragsübersicht Oder Artikel"
              >
              </b-form-input>
              <b-button class="search-btn"><b-icon icon="search"></b-icon></b-button>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="date"
              >
              </b-form-input>
            </b-form-group>
          </b-form>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  }
}
</script>

<style scoped lang="scss">
.account-right {
  padding-right: 0%;
  padding-left: 80px;
  margin-bottom: 50px;
  .header {
    border-bottom: 1px solid #707070;
    .return-history {
      padding: 10px;
      border: 0.5px solid #E9E9E9;
      border-radius: 8px;
      color: #707070;
    }
    .return-history:hover {
      background: #707070;
      color: #f1f1f1;
    }
  }
  .header-title {
    color: #12407E;
    font-size: 24px;
    padding-bottom: 20px;
    // margin-bottom: 40px;

  }
  .search-section {
    .search-input {
      padding-right: 40px;
    }
    .search-btn {
      border: none;
      color: #495057;
      background: none;
      transform: translate(-100%, 0);
    }
  }
}
</style>
