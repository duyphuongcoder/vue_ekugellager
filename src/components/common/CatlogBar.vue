<template>
  <b-row class="navbar-catlog">
    <b-col md="6" sm="12">
        <nav class="breadcrumb">
            <ol>
                <li v-for="(item, index) in catRoute" :key="index">
                    <router-link :to="$i18nRoute({ name: 'category', params: { id_category: item.cate_id } })">
                        <span>{{ $t(item.text) }}</span>
                    </router-link>
                </li>
            </ol>
        </nav>
    </b-col>
  </b-row>
</template>

<script>
import { Trans } from '@/lang/Translation'
import { shopId } from '@/config/settings'
export default {
  props: {
    categoryId: Number
  },
  data () {
    return {
      menu: [],
      catRoute: [],
      index: -1
    }
  },
  mounted () {
    const params = {
      shopId: shopId,
      langId: Trans.getLangId(Trans.currentLanguage)
    }
    this.$store.dispatch('get_menu', params).then(resp => {
      this.searchTree(this.$store.getters.topmenu, this.categoryId, 0)
      let parent = this.menu.filter(e => e.cate_id === this.catRoute[0].parent_id)
      while (parent && parent.length > 0) {
        this.catRoute.push(parent[0])
        parent = this.menu.filter(e => e.cate_id === this.catRoute[this.catRoute.length - 1].parent_id)
      }
      this.catRoute = this.catRoute.reverse()
    })
  },
  methods: {
    searchTree (element, cateId, parentId) {
      this.menu.push({
        text: element.name,
        cate_id: parseInt(element.id),
        parent_id: parseInt(parentId)
      })
      if (parseInt(element.id) === parseInt(cateId)) {
        this.catRoute.push({
          text: element.name,
          cate_id: parseInt(element.id),
          parent_id: parseInt(parentId)
        })
      } else if (element.children && element.children.length > 0) {
        element.children.forEach((child) => {
          this.searchTree(child, cateId, element.id)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-catlog {
    display: block;
    background: #F9F9F9 0% 0% no-repeat padding-box;
    border-radius: 8px;
    line-height: 55px;
    height: 60px;
    margin-left: 0px;
    margin-right: 0px;
    margin: 20px 0;
    .breadcrumb {
        background: transparent;
        padding: 0;
        margin-bottom: 0rem;
        list-style: none;
        border-radius: 0;
        ol {
            padding-left: 0;
            margin-bottom: 0;
            li {
                display: inline;
                a {
                    color: #232323;
                    font-size: 14px;
                    text-decoration: none;
                    -webkit-transition: all .5s ease;
                    transition: all .5s ease;
                    font-weight: 600;
                }
            }
            li:after {
                content: "/";
                color: #7a7a7a;
                margin: .3125rem;
            }
            li:last-child:after {
                content: "";
            }
        }
    }
}
</style>
