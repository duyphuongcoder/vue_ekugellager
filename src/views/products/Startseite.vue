<template>
  <b-container class="startseite">
    <CatlogBar :catRoutes="catRoutes"/>
    <b-row>
      <b-col md="3" sm="12">
        <FilterWrapper :filterdata="filterdata" :updatevalues="updatevalues" :dragend="dragend"/>
      </b-col>
      <b-col md="9" sm="12">
        <div class="active-filters-block mb-4">
          <div class="filter-title"> <span> Active Filters: </span> </div>
          <b-form-tags
           input-id="tags-basic"
           v-model="activeFilters"
           size="lg"
           no-add-on-enter
           placeholder=""
           disableAddButton
          ></b-form-tags>
        </div>
        <b-row class="products">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in products" :key="index">
            <ProductBox :product="products[index]" :addtocart="addToCart"/>
          </b-col>
        </b-row>
        <nav class="row page-bottom">
          <b-col md="4" sm="12" class="page-info">
            Showing 1-1 of 1 item(s)
          </b-col>
          <b-col md="8" sm="12" class="pagination-nav">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              @input="selectPage"
              align="right"
            ></b-pagination>
          </b-col>
        </nav>
      </b-col>
    </b-row>
    <div>
    </div>
    <BlockCartModal />
    <CategoryForm />
  </b-container>
</template>

<script>
import { Trans } from '../../lang/Translation'
import CatlogBar from '@/components/common/CatlogBar'
import FilterWrapper from '@/components/common/FilterWrapper'
import ProductBox from '@/components/common/ProductBox'
import { ProductServices } from '@/services/index'
import BlockCartModal from '@/components/common/BlockCartModal'
import CategoryForm from '@/components/common/CategoryForm'
import { BLOCK_CART_MODAL } from '@/constants/modal'
import { loadingSpinnerConfig } from '@/config/settings'
export default {
  name: 'startseite',
  components: {
    CatlogBar,
    FilterWrapper,
    ProductBox,
    BlockCartModal,
    CategoryForm
  },
  data () {
    return {
      catRoutes: [
        {
          text: 'header.home',
          route: 'home'
        }
      ],
      filterdata: [],
      rows: 100,
      perPage: 10,
      currentPage: 1,
      products: [
        {
          id: 231,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg',
          head: {
            heading: [
              'Ø Inside', 'Ø External', 'Width'
            ],
            subhead: [
              '10 mm', '26 mm', '8 mm'
            ]
          },
          quality: {
            info: 'Product quality info',
            content: [1, 1, 1, 0]
          },
          pricelist: [
            {
              quantity: 15,
              discount: '15%',
              unitprice: 13.05
            },
            {
              quantity: 50,
              discount: '25%',
              unitprice: 11.05
            },
            {
              quantity: 100,
              discount: '35%',
              unitprice: 9.95
            }
          ]
        },
        {
          id: 1345,
          name: 'Hummingbird notebook',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        },
        {
          id: 342,
          name: 'Hummingbird notebook',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg',
          quality: {
            info: 'Product quality info',
            content: [1, 1, 1, 1]
          }
        },
        {
          id: 32,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/6-home_default/mug-the-best-is-yet-to-come.jpg'
        },
        {
          id: 14,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        }
      ],
      activeFilters: ['Categories: Clothes', 'Size: S'],
      modalId: BLOCK_CART_MODAL,
      loader: null
    }
  },
  mounted () {
    this.loader = this.$loading.show(loadingSpinnerConfig)
    // ProductServices.getProduct(1).then(resp => {
    //   console.log(resp)
    // })
    ProductServices.getProductFilters().then(resp => {
      const facets = resp.roccomediaproductfacets
      const filters = resp.roccomediaproductfilters
      facets.forEach(facet => {
        const filter = { type: facet.widgetType }
        if (facet.widgetType === 'slider') {
          filter.title = facet.label
          filter.min = facet.min
          filter.max = facet.max
          filter.unit = facet.unit
        }
        if (facet.widgetType === 'checkbox') {
          filter.content = { title: facet.label, items: filters.filter(item => item.id_facet === facet.id) }
        }
        this.filterdata.push(filter)
      })
      this.loader.hide()
    }).catch(err => {
      console.log('error', err)
      this.loader.hide()
    })
  },
  created () {
  },
  methods: {
    updatevalues (values, id) {
      console.log(this.filterdata[id].content.title, values)
      this.loader = this.$loading.show(loadingSpinnerConfig)
      setTimeout(() => {
        this.loader.hide()
      }, 2000)
      this.activeFilters.push('Test: test')
    },
    dragend (value, id) {
      const max = this.filterdata[id].max
      const min = this.filterdata[id].min
      const realMin = Math.round((max - min) / 100 * value[0])
      const realMax = Math.round((max - min) / 100 * value[1])
      console.log(this.filterdata[id].title, realMin, realMax)
      this.loader = this.$loading.show(loadingSpinnerConfig)
      setTimeout(() => {
        this.loader.hide()
      }, 2000)
    },
    selectPage (selectedpage) {
      console.log(selectedpage)
    },
    addToCart (n) {
      console.log('count to add', n)
      this.$bvModal.show(this.modalId)
    }
  },
  watch: {
    $route (to, from) {
      console.log('change language:', Trans.currentLanguage)
    }
  }
}
</script>

<style scoped lang="scss">
.active-filters-block {
  display: flex;
  .filter-title {
    width: 150px;
    padding-top: 12px;
    background: #ced4da;
    font-weight: 600;
  }
  .b-form-tags {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #ced4da;
    input {
      outline: none !important;
    }
  }
  .b-form-tags.focus {
    border-color: #ced4da;
    outline: none !important;
    box-shadow: none !important;
  }
}
.products {
  margin-bottom: 20px;
}
.page-bottom .page-info {
  padding: 7px 7px !important;
}
.page-bottom .pagination-nav {
  padding: 0px 0px !important;
}
</style>
