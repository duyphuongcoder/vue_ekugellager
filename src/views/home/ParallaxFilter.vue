<template>
<div class="bluemain-col mt-4">
  <div class="search-filters">
    <div class="head-title">
      <b-col md="2" class="d-none d-md-block"></b-col>
      <b-col md="8" sm="12">
          <h1>{{item.title}}</h1>
          <div class="subtitle">Bitte wählen Sie ihr Produkt aus 5 Artikeln</div>
      </b-col>
      <b-col md="2" class="d-none d-md-block right-side"> <span class="eku-num"> 3 </span><span class="eku-text">SCHRITTE</span> </b-col>
    </div>
    <b-row></b-row>
    <b-row></b-row>
  </div>
</div>
</template>

<script>

export default {
  props: {
    item: Object
  }
}
</script>

<style scoped lang="scss">
  // .bluemain-col.open {
  //   display: block;
  // }
  .bluemain-col {
    // display: block;
    background: linear-gradient(90deg,#12407e 0,#113d77 68%,#0e3160 100%);
    border-radius: 8px;
    border: 1px solid #fff;
    padding-bottom: 80px;
    margin-bottom: 60px;
    color: #fff;
    position: relative;
    overflow: hidden;
    font-family: Lato;
    .head-title {
      display: flex;
      padding-top: 60px;
      margin-bottom: 50px;
      h1 {
        font-weight: 400;
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .subtitle {
        font-weight: 300;
        font-size: 20px;
        opacity: 1;
      }
      .right-side {
        right: 0;
        .eku-num {
          font-size: 122px;
          font-weight: 500;
        }
        .eku-text {
          font-size: 24px;
          text-transform: uppercase;
          font-weight: 100;
          transform: matrix(0,-1,1,0,0,0);
          position: absolute;
          right: -10px;
        }

      }
    }
  }
  .bluemain-col:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: url('https://ekugellager.roccshow.com/modules/roccomediaproductfilter/images/bg-animation.png') 0 0 no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    z-index: 1;
  }
</style>
