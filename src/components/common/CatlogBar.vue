<template>
  <b-row class="navbar-catlog">
    <b-col md="6" sm="12">
        <nav class="breadcrumb">
            <ol>
                <li v-for="(item, index) in catRoutes" :key="index">
                    <router-link :to="$i18nRoute({ name: item.route})">
                        <span>{{ $t(item.text) }}</span>
                    </router-link>
                </li>
            </ol>
        </nav>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    catRoutes: Array
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
