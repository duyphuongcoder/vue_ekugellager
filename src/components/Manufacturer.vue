<template>
  <b-container fluid class="manufacturer-logos">
    <b-container>
      <div class="head-title">
        <b-col lg="12" md="12">
          <h1>
            <span>{{$t('manufacturer.self')}}</span>
          </h1>
        </b-col>
      </div>
    </b-container>
    <div class="manufacturer-carousel">
      <b-container>
        <carousel
        :autoplay="false"
        :margin="15"
        :loop="true"
        :nav="false"
        :dots="false"
        :responsive="{
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          }
        }">
        <div class="item" v-for="(item, index) in carousel_items" :key="index">
          <div class="img-logos">
            <b-img
              :src="getImgUrl(item.name)"
              alt="image slot"
            ></b-img>
          </div>
          <h4 class="title-logos">{{item.name}}</h4>
        </div>
      </carousel>
      </b-container>
    </div>
  </b-container>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  data () {
    return {
      carousel_items: [
        {
          name: 'ntn'
        },
        {
          name: 'nke'
        },
        {
          name: 'zen'
        },
        {
          name: 'skf'
        },
        {
          name: 'fag'
        },
        {
          name: 'nsk'
        }
      ]
    }
  },
  methods: {
    getImgUrl (name) {
      var images = require.context('../assets/img/manufacturer_logos', false, /\.png$/)
      return images('./' + name + '.png')
    }
  },
  components: { carousel }
}
</script>
<style scoped lang="scss">
.manufacturer-logos {
  margin-bottom: 50px;
  .head-title {
    h1{
      color: #363636;
      font-weight: 300;
      font-family: 'Lato';
      text-align: center;
      font-size: 28px;
      text-transform: uppercase;
      span {
        background: #fff
      }
      span:before {
        content: '';
        background-color: #f1f1f1;
        height: 2px;
        display: block;
        position: absolute;
        top: 18px;
        left: 0;
        width: 40%;
      }
      span:after {
        content: '';
        background-color: #f1f1f1;
        height: 2px;
        display: block;
        position: absolute;
        top: 18px;
        right: 0;
        width: 40%;
      }
    }
  }
  .manufacturer-carousel {
    .item {
      padding-top: 50px;
      padding-bottom: 31px;
      padding-left: 40px;
      padding-right: 40px;
      margin-bottom: 17px;
    }
    .img-logos {
      height: 200px;
      width: 200px;
      align-items: center;
      display: flex;
      border: 3px solid #f1f1f1;
      border-radius: 4px;
      background-color: #fff;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 576px) {
        height: 150px;
        width: 150px;
      }
    }
    .title-logos {
      text-transform: uppercase;
    }
  }
  .manufacturer-carousel:before {
    content: '';
    background-color: #f1f1f1;
    height: 80px;
    display: block;
    position: absolute;
    margin-top: 104px;
    left: 0;
    width: 100%;
  }

}
</style>
