<template>
  <!-- Footer -->
  <div>
    <NewsLetter />
    <mdb-footer color="mdb-color" class="font-small lighten-3 pt-4 mt-4">
      <mdb-container class="text-center text-md-left footer-container">
        <mdb-row class="my-4">
          <mdb-col xl="2" lg="4" md="6">
            <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            <h5 class="font-weight-bold">{{ $t('footer.contact.self') }}</h5>
            <p>+49 (0)234 5450120</p>
            <a href="mailto:" class="email-contact">info@ekugellager.de</a>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" md="6" class="ml-auto" v-if="links && links.length > 0">
            <h5 class="text-uppercase mb-4 font-weight-bold" v-b-toggle.products>{{ links[0].title }}</h5>
            <b-collapse visible id="products">
            <ul class="list-unstyled" v-for="(item, index) in links[0].links" :key="index">
              <p><a :href="item.url_path">{{ item.title }}</a></p>
            </ul>
            </b-collapse>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" md="6" v-if="links && links.length > 1">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ links[1].title }}</h5>
            <ul v-for="(item, index) in links[1].links" :key="index">
              <p><a :href="item.url_path">{{ item.title }}</a></p>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" md="6" v-if="links && links.length > 2">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ links[2].title }}</h5>
            <ul v-for="(item, index) in links[2].links" :key="index">
              <p><a :href="item.url_path">{{ item.title }}</a></p>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" md="6" v-if="links && links.length > 3">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ links[3].title }}</h5>
            <ul v-for="(item, index) in links[3].links" :key="index">
              <p><a :href="item.url_path">{{ item.title }}</a></p>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" md="6">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.shippment_payment.self') }}</h5>
            <div class="mt-2 ">
              <ul class="list-unstyled shipping">
                <p><img src="../../assets/img/visa.png"></p>
                <p><img src="../../assets/img/mastercard.png"></p>
                <p><img src="../../assets/img/paypal.png"></p>
                <p><img src="../../assets/img/sepa.png"></p>
                <p><img src="../../assets/img/invoice_alternate.png"></p>
              </ul>
            </div>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
            All Rights Reserved &copy; 2020
        </mdb-container>
      </div>
    </mdb-footer>
  <!-- Footer -->
  </div>
</template>
<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
import NewsLetter from './NewsLetter'
import { FooterServices } from '@/services/index'
import { Trans } from '@/lang/Translation'
export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    NewsLetter
  },
  data () {
    return {
      links: []
    }
  },
  mounted () {
    setTimeout(() => {
      const params = {
        shopId: 1,
        langId: Trans.getLangId(Trans.currentLanguage)
      }
      FooterServices.getFooterContent(params).then(resp => {
        this.links = resp.footer.links
      })
    }, 200)
  }
}
</script>

<style scoped>
.logo {
    max-width: 180px;
    margin-bottom: 21px;
}
.footer-container a {
    font-family: 'Lato';
    color: #333;
    font-weight: 500;
    font-size: 14px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer-container ul.shipping p {
    margin-left: 5px;
    margin-right: 5px;
    text-align: left;
    width: 50px;
    height: 30px;
    margin-bottom: 10px;
}
.footer-container ul.shipping {
    display: flex;
    flex-wrap: wrap;
}
</style>
