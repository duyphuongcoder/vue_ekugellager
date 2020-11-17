<template>
  <b-container class="my-account">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right mt-5" md="9" sm="12">
        <h1 class="header-title">{{$t('account.my_account')}}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  name: 'my-account',
  components: {
    AccountNav
  }
}
</script>

<style scoped lang="scss">

</style>
