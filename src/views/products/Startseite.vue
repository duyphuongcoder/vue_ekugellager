<template>
  <b-container class="startseite">
    <CatlogBar :catRoutes="catRoutes"/>
    <b-row>
      <b-col md="4" sm="12">
        <FilterWrapper :filterdata="filterdata" :updatevalues="updatevalues" :dragend="dragend"/>
      </b-col>
      <b-col md="8" sm="12">
        <h1> This is startseite page </h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CatlogBar from '@/components/common/CatlogBar'
import FilterWrapper from '@/components/common/FilterWrapper'
export default {
  name: 'startseite',
  components: {
    CatlogBar,
    FilterWrapper
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
      ]
    }
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
    }
  }
}
</script>
