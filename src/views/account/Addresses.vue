<template>
  <b-container class="address mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('account.addresses')}}</h1>
        <div class="address-list">
          <b-row class="address align-items-center text-left" v-for="(address, index) in addresses" :key="index" :class="{removed:(removedAddresses.includes(index))}">
            <b-col md="1">
              <a href="#" @click="removeItem(index, $event)">
                <b-icon icon="x-circle" font-scale="2"></b-icon>
              </a>
            </b-col>
            <b-col md="7">test test, aaaaaa . 45673 aaaaa Germany, </b-col>
            <b-col md="3">My Address invoice</b-col>
            <b-col md="1">
              <router-link :to="$i18nRoute({ name: 'address', query: { id_address: index }})">
                <b-icon icon="pencil" font-scale="2"></b-icon>
              </router-link>
            </b-col>
          </b-row>
        </div>
        <div class="address-footer mt-5">
          <p class="add-new-address">
            <router-link :to="$i18nRoute({ name: 'address' })">
              <b-icon icon="plus"></b-icon>
              <span>{{$t('account.create_address')}}</span>
            </router-link>
          </p>
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
      addresses:
      [
        1, 2, 3, 4, 5
      ],
      removedAddresses: []
    }
  },
  methods: {
    removeItem (index, $event) {
      $event.preventDefault()
      this.removedAddresses.push(index)
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
  .address-list {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    margin-bottom: 30px;
    margin: 0px;
    padding: 10px 20px;
    .address {
      box-shadow: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #E9E9E9;
      padding: 15px 0px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #707070;
    }

  }
  .add-new-address {
    border: 0.5px solid #E9E9E9;
    border-radius: 8px;
    background: #fff;
    padding: 0px 15px;
    float: right;
  }
}
</style>
