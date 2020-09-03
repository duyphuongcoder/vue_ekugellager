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
        :items="4"
        :responsive="{
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items:4
          }
        }">
        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/ntn.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">NTN</h4>
        </div>
        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/nke.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">NKE</h4>
        </div>

        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/zen.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">ZEN</h4>
        </div>
        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/skf.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">SKF</h4>
        </div>
        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/fag.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">FAG</h4>
        </div>
        <div class="item">
          <div class="img-logos">
            <img
              class=""
              src="../assets/img/manufacturer_logos/nsk.png"
              alt="image slot"
            >
          </div>
          <h4 class="title-logos">NSK</h4>
        </div>
      </carousel>
      </b-container>
    </div>
  </b-container>
</template>
<script>

import carousel from 'vue-owl-carousel2'

export default {
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
