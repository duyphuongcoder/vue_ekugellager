<template>
  <div class="product-miniature">
    <div class="thumbnail-eku-container">
        <b-row class="product-eku">
            <b-col cols="6" class="marke-product-thumb">
                Hersteller
            </b-col>
            <b-col cols="6" class="name-product-thumb">
                <h2 class="h3 product-title">
                    <a href="">Hummingbird printed t-shirt</a>
                </h2>
            </b-col>
        </b-row>
        <router-link :to="$i18nRoute({ name: 'product', query: { product_id: product.id }})" class="thumbnail product-thumbnail">
            <img :src="product.image"/>
        </router-link>
        <div class="product-description">
            <b-row class="best-preis-list">
                <b-col cols="5">{{product.name}}</b-col>
                <b-col cols="7" class="preis">{{product.currency + product.price}}</b-col>
            </b-row>
            <b-row class="show-price-list">
                <b-collapse :id="collapseid">
                    <b-row class="table-prislist-header">
                        <b-col cols="4">Quantity</b-col>
                        <b-col cols="4">Discount</b-col>
                        <b-col cols="4">Unit price</b-col>
                    </b-row>
                    <b-row class="table-prislist-content">
                        <b-col cols="4">15</b-col>
                        <b-col cols="4">15%</b-col>
                        <b-col cols="4">€13.05</b-col>
                    </b-row>
                    <b-row class="table-prislist-content">
                        <b-col cols="4">50</b-col>
                        <b-col cols="4">25%</b-col>
                        <b-col cols="4">€11.51</b-col>
                    </b-row>
                    <b-row class="table-prislist-content">
                        <b-col cols="4">60</b-col>
                        <b-col cols="4">35%</b-col>
                        <b-col cols="4">€10.05</b-col>
                    </b-row>
                    <b-card>
                        <div class="product-prislist-miniature">{{$t('products.In_stock')}}</div>
                        <b-row>
                            <b-col cols="4">
                                <div class="product-add-to-cart">
                                    <b-form-input type="number" value="1" min="1"></b-form-input>
                                </div>
                                <div class="product-prislist-quantity">
                                    <span>493</span>{{$t('products.in_stock')}}
                                </div>
                            </b-col>
                            <b-col cols="8">
                                <div>
                                    <b-button variant="danger" class="add-to-cart">{{$t('products.shoppingcart')}}</b-button>
                                </div>
                                <div class="eku-compear">
                                    <a href="/">
                                        <span>{{$t('products.compare_remember')}}</span>
                                        <b-icon icon="eye"></b-icon>
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-collapse>
                <div class="toggle-btn" v-b-toggle="collapseid">
                    <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
                    <b-icon icon="chevron-up" class="opened-icon"></b-icon>
                    <span class="collapsed-icon">{{$t('products.details_quickl_purchase')}}</span>
                </div>
            </b-row>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
      collapseid: 'product_collapse_' + this.product.id
    }
  }
}
</script>

<style scoped lang="scss">
.product-miniature {
    margin: 0rem;
    box-shadow: none;
    margin-bottom: 20px;
    .thumbnail-eku-container {
        background: #fff;
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 25px;
        .product-eku {
            margin: 0;
            .marke-product-thumb {
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0px;
                color: #818181;
                border-top-left-radius: 8px;
                background-color: #F0F0F0;
                padding: 0px 5px;
                line-height: 41px;
            }
            .name-product-thumb {
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0px;
                color: #F0F0F0;
                border-top-right-radius: 8px;
                background-color: #12407E;
                padding: 0px 5px;
                line-height: 41px;
                overflow: hidden;
                .product-title {
                    text-align: center;
                    text-transform: capitalize;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #F0F0F0;
                    font-weight: 500;
                    margin-top: 0px !important;
                    margin-bottom: 0px;
                    line-height: 41px;
                    height: 41px;
                    a {
                        font-size: .875rem;
                        text-decoration: none;
                        text-align: center;
                        font-weight: 400;
                        color: #F0F0F0 !important;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .product-thumbnail {
            display: block;
            text-align: center;
            img {
                vertical-align: middle;
                border-style: none;
                width: 100%;
            }
        }
        .product-description {
            position: unset !important;
            background: #fff;
            height: auto;
            .best-preis-list {
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                height: 40px;
                line-height: 40px;
                color: #303030;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                border-bottom: 1px solid #707070;
                margin: 0px;
                .preis {
                    text-align: right;
                }
            }
            .show-price-list {
                color: #545454;
                line-height: 40px;
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                display: block;
                margin: 0px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                text-align: center;
                font-weight: 400;
                opacity: 1;
                .toggle-btn {
                    outline: none;
                    svg {
                        font-size: 20px;
                        margin-right: 5px;
                    }
                }
                .table-prislist-header {
                    height: 40px;
                    line-height: 40px;
                    color: #303030;
                    background-color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    text-align: center;
                    border-bottom: 1px solid #707070;
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                    div {
                        padding-left: 5px !important;
                        padding-right: 5px !important;
                    }
                }
                .table-prislist-content {
                    height: 40px;
                    line-height: 40px;
                    color: #303030;
                    background-color: #fff;
                    font-size: 14px;
                    text-align: center;
                    border-bottom: 1px solid #707070;
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                    div {
                        padding-left: 5px !important;
                        padding-right: 5px !important;
                    }
                }
                .card .card-body {
                    padding: 5px !important;
                    .row {
                        margin-left: 0px !important;
                        margin-right: 0px !important;
                    }
                    .col-4, .col-8 {
                        padding: 5px !important;
                    }
                    .product-prislist-miniature {
                        color: #36D94F;
                        font-size: 13px;
                        text-align: left;
                        margin-left: 10px;
                    }
                    .product-prislist-quantity {
                        font-size: 13px;
                        line-height: 15px;
                        margin-top: 5px;
                        span {
                            margin-right: 5px;
                        }
                    }
                    .product-add-to-cart .form-control {
                        text-align: center;
                    }
                    .eku-compear {
                        font-size: 13px;
                        line-height: 15px;
                        font-weight: 500;
                        a {
                            color: #545454 !important;
                            .svg {
                                margin-left: 5px !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
