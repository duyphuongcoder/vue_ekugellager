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
        <b-row class="products" v-if="products.length > 0">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in products" :key="index">
            <ProductBox :product="products[index]" :addtocart="addToCart"/>
          </b-col>
        </b-row>
        <b-row class="no-products text-center" v-if="products.length == 0">
          <span> No contents </span>
        </b-row>
        <nav class="row page-bottom">
          <b-col md="4" sm="12" class="page-info">
            Showing {{(currentPage - 1) * perPage + 1}}-{{(currentPage - 1) * perPage + products.length}} of {{totalCount}} item(s)
          </b-col>
          <b-col md="8" sm="12" class="pagination-nav">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalCount"
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
      totalCount: 0,
      perPage: 5,
      currentPage: 1,
      products: [],
      activeFilters: ['Categories: Clothes', 'Size: S'],
      modalId: BLOCK_CART_MODAL,
      loader: null
    }
  },
  mounted () {
    const params = {
      shopId: 1,
      langId: Trans.getLangId(Trans.currentLanguage),
      cateId: this.$route.params.id_category,
      page: this.currentPage,
      perPage: this.perPage
    }
    this.loader = this.$loading.show(loadingSpinnerConfig)
    ProductServices.getProduct(params).then(resp => {
      if (resp.navigation_layered && resp.navigation_layered.length > 0) {
        this.getFilterData(resp.navigation_layered[0].filters)
      }
      this.freshProducts(resp.products)
      this.totalCount = resp.products_count
      this.loader.hide()
    })
    // ProductServices.getProductFilters().then(resp => {
    //   const facets = resp.roccomediaproductfacets
    //   const filters = resp.roccomediaproductfilters
    //   facets.forEach(facet => {
    //     const filter = { type: facet.widgetType }
    //     if (facet.widgetType === 'slider') {
    //       filter.title = facet.label
    //       filter.min = facet.min
    //       filter.max = facet.max
    //       filter.unit = facet.unit
    //     }
    //     if (facet.widgetType === 'checkbox') {
    //       filter.content = { title: facet.label, items: filters.filter(item => item.id_facet === facet.id) }
    //     }
    //     this.filterdata.push(filter)
    //   })
    //   this.loader.hide()
    // }).catch(err => {
    //   console.log('err', err)
    //   this.loader.hide()
    // })
  },
  created () {
  },
  methods: {
    getFilterData (filters) {
      filters.forEach(f => {
        f.filter_type = 'checkbox'
        this.filterdata.push(f)
      })
    },
    freshProducts (products) {
      products.forEach(p => {
        if (p.features && p.features.length > 0) {
          p.head = []
          p.features.forEach(e => {
            if (e.name === 'Quality') {
              switch (e.value) {
                case 'Best':
                  p.quality = {
                    content: [1, 1, 1, 1]
                  }
                  break
                case 'Very Good':
                  p.quality = {
                    content: [1, 1, 1, 0]
                  }
                  break
                case 'Good':
                  p.quality = {
                    content: [1, 1, 0, 0]
                  }
                  break
                default:
                  break
              }
            }
            if (e.id_feature === '7' || e.id_feature === '8' || e.id_feature === '9') {
              p.head.push({
                name: e.name,
                value: e.value + ' mm'
              })
            }
          })
        }
      })
      this.products = products
    },
    updatevalues (values, id) {
      console.log(this.filterdata[id].name, values)
      this.$router.go({ path: '/startseite', query: { q: 'pp' } })

      // this.loader = this.$loading.show(loadingSpinnerConfig)
      // setTimeout(() => {
      //   this.loader.hide()
      // }, 2000)
      // this.activeFilters.push('Test: test')
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
      this.$router.go()
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
.no-products {
  min-height: 300px;
  span {
    margin: auto;
  }
}
</style>
