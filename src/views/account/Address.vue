<template>
  <b-container class="my-account mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{ $t(headerTitle) }}</h1>
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
      addressId: undefined,
      headerTitle: 'account.new_address'
    }
  },
  mounted () {
    this.addressId = this.$route.query.id_address
    if (this.addressId !== undefined) {
      this.headerTitle = 'account.update_your_address'
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
</style>
