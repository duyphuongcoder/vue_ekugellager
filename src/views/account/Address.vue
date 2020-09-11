<template>
  <b-container class="my-account mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{ $t(headerTitle) }}</h1>
        <div class="address">
          <b-form class="text-left">
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group >
                  <template v-slot:label>
                    {{$t('account.first_name')}} <span class="text-danger">*</span>
                  </template>
                  <b-form-input
                    v-model="form.first_name"
                    required
                    type="text"
                    :placeholder="$t('account.first_name')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
               <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.last_name')}} <span class="text-danger">*</span>
                  </template>
                  <b-form-input
                    v-model="form.last_name"
                    required
                    type="text"
                    :placeholder="$t('account.last_name')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                    <template v-slot:label>
                      {{$t('account.alias')}}
                    </template>
                  <b-form-input
                    v-model="form.alias"
                    type="text"
                    :placeholder="$t('account.alias')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.company')}}
                  </template>
                  <b-form-input
                    v-model="form.company"
                    type="text"
                    :placeholder="$t('account.company')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.phone')}}
                  </template>
                  <VuePhoneNumberInput v-model="form.phone" @update="getPayload"
                  default-country-code="DE"
                  :translations="this.$i18n.locale=='de'?translations_de:{}"/>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.address')}} <span class="text-danger">*</span>
                      </template>
                      <b-form-input
                        v-model="form.address"
                        required
                        type="text"
                        :placeholder="$t('account.address')"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12"  md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.address_code')}}
                      </template>
                      <b-form-input
                        v-model="form.address_code"
                        type="text"
                        :placeholder="$t('account.address_code')"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.zip_postal_code')}} <span class="text-danger">*</span>
                      </template>
                      <b-form-input
                      v-model="form.zip_postal_code"
                      required
                      type="text"
                      :placeholder="$t('account.zip_postal_code')"
                      ></b-form-input>
                      <!-- <VueZipCodeInput @get-result-regex="test"/> -->
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.city')}} <span class="text-danger">*</span>
                      </template>
                      <b-form-input
                      v-model="form.city"
                      required
                      type="text"
                      :placeholder="$t('account.city')"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.country')}} <span class="text-danger">*</span>
                  </template>
                  <b-form-select
                    required
                    v-model="form.country"
                    :options="country_options">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.vat_number')}}
                  </template>
                  <b-form-input
                    v-model="form.vat_number"
                    type="text"
                    :placeholder="$t('account.vat_number')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button type="submit" variant="danger" class="save_btn">{{$t('account.save')}}</b-button>
          </b-form>
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
  props: {
    address_form: Object
  },
  data () {
    return {
      addressId: undefined,
      headerTitle: 'account.new_address',
      form:
      {
        alias: '',
        first_name: '',
        last_name: '',
        company: '',
        phone: '',
        address: '',
        address_code: '',
        zip_postal_code: '',
        city: '',
        country: null,
        vat_number: ''
      },
      country_options:
      [
        { value: null, text: 'please choose country' },
        { value: 1, text: 'Germany' },
        { value: 2, text: 'United States' }
      ],
      translations_de: {
        countrySelectorLabel: 'Landesvorwahl',
        countrySelectorError: 'Wähle ein Land',
        phoneNumberLabel: 'Telefonnummer',
        example: 'Beispiel :'
      }
    }
  },
  methods: {
    getPayload (payload) {
      // console.log(payload)
      // console.log(this.$i18n.locale)
    }
  },
  mounted () {
    this.addressId = this.$route.query.id_address
    if (this.addressId !== undefined) {
      this.headerTitle = 'account.update_your_address'

      this.form = {
        alias: 'test alias',
        first_name: 'test first name',
        last_name: 'test last name',
        company: 'test company',
        phone: '439343',
        address: 'test address',
        address_code: 'test address code',
        zip_postal_code: 'test postal code',
        city: 'test city',
        country: 1,
        vat_number: '13434'
      }
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
  .save_btn {
    text-transform: capitalize;
    float: right;
  }
}
</style>
