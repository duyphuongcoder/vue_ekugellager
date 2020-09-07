<template>
  <b-container class="startseite">
    <CatlogBar :catRoutes="catRoutes"/>
    <b-row>
      <b-col md="3" sm="12">
        <FilterWrapper :filterdata="filterdata" :updatevalues="updatevalues" :dragend="dragend"/>
      </b-col>
      <b-col md="9" sm="12">
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
              first-text="<<"
              prev-text="Previous"
              next-text="Next"
              last-text=">>"
              align="right"
            ></b-pagination>
          </b-col>
        </nav>
      </b-col>
    </b-row>
    <div>
    </div>
    <BlockCartModal />
  </b-container>
</template>

<script>
import { Trans } from '../../lang/Translation'
import CatlogBar from '@/components/common/CatlogBar'
import FilterWrapper from '@/components/common/FilterWrapper'
import ProductBox from '@/components/common/ProductBox'
import { productService } from '@/services/index'
import BlockCartModal from '@/components/common/BlockCartModal'
export default {
  name: 'startseite',
  components: {
    CatlogBar,
    FilterWrapper,
    ProductBox,
    BlockCartModal
  },
  data () {
    return {
      catRoutes: [
        {
          text: 'header.home',
          route: 'home'
        }
      ],
      filterdata: [
        {
          type: 'box',
          content: {
            title: 'Categories',
            items: [
              {
                name: 'Clothes',
                count: 5
              },
              {
                name: 'Laufrolle',
                count: 1
              },
              {
                name: 'Lineartechnik',
                count: 1
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Size',
            items: [
              {
                name: 'S',
                count: 1
              },
              {
                name: 'M',
                count: 1
              },
              {
                name: 'L',
                count: 1
              },
              {
                name: 'XL',
                count: 1
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Color',
            items: [
              {
                name: 'White',
                count: 4
              },
              {
                name: 'Black',
                count: 4
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Property',
            items: [
              {
                name: '120 pages',
                count: 4
              },
              {
                name: 'Long sleeves',
                count: 1
              },
              {
                name: 'Removable cover',
                count: 4
              },
              {
                name: 'Short sleeves',
                count: 1
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Composition',
            items: [
              {
                name: 'Ceramic',
                count: 4
              },
              {
                name: 'Cotton',
                count: 2
              },
              {
                name: 'Matt paper',
                count: 3
              },
              {
                name: 'Polyester',
                count: 3
              },
              {
                name: 'Recycled cardboard',
                count: 3
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Size',
            items: [
              {
                name: 'S',
                count: 1
              },
              {
                name: 'M',
                count: 1
              },
              {
                name: 'L',
                count: 1
              },
              {
                name: 'XL',
                count: 1
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Availability',
            items: [
              {
                name: 'Not available',
                count: 2
              },
              {
                name: 'In stock',
                count: 27
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Brand',
            items: [
              {
                name: 'FAG',
                count: 1
              },
              {
                name: 'NKE',
                count: 1
              },
              {
                name: 'TIMKEN',
                count: 1
              }
            ]
          }
        },
        {
          type: 'slide',
          title: 'Weight',
          min: 0,
          max: 7.664,
          unit: 'kg'
        },
        {
          type: 'slide',
          title: 'Price',
          min: 0.00,
          max: 781.00,
          unit: '€'
        },
        {
          type: 'box',
          content: {
            title: 'Dimension',
            items: [
              {
                name: '40x60cm',
                count: 3
              },
              {
                name: '60x90cm',
                count: 3
              },
              {
                name: '80x120cm',
                count: 3
              }
            ]
          }
        },
        {
          type: 'box',
          content: {
            title: 'Paper Type',
            items: [
              {
                name: 'Ruled',
                count: 2
              },
              {
                name: 'Plain',
                count: 2
              },
              {
                name: 'Squarred',
                count: 2
              },
              {
                name: 'Dotes',
                count: 2
              }
            ]
          }
        }
      ],
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
      ]
    }
  },
  mounted () {
  },
  created () {
    productService.getProduct().then(product => {
      console.log(product)
    })
  },
  methods: {
    updatevalues (values, id) {
      console.log(this.filterdata[id].content.title, values)
    },
    dragend (value, id) {
      const max = this.filterdata[id].max
      const min = this.filterdata[id].min
      const realMin = Math.round((max - min) / 100 * value[0])
      const realMax = Math.round((max - min) / 100 * value[1])
      console.log(this.filterdata[id].title, realMin, realMax)
    },
    selectPage (selectedpage) {
      console.log(selectedpage)
    },
    addToCart (n) {
      console.log('count to add', n)
      this.$bvModal.show('blockcart_modal')
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
