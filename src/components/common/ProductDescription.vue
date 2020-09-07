<template>
  <div class="tabs product-description">
    <b-tabs content-class="">
      <b-tab title="Description" active><p>Symbol of lightness and delicacy, the hummingbird evokes curiosity and joy. Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime.</p></b-tab>
      <b-tab title="Product Details">
        <div class="product-reference">
          <label class="label">Reference <span itemprop="sku">demo_1</span></label>
        </div>
        <div class="product-quantities">
          <label class="label">In stock <span data-stock="229" data-allow-oosp="0">229 Items</span></label>
        </div>
        <div class="product-out-of-stock"></div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<style lang="scss">
.product-description {
  margin-top: 2rem;
  padding: 0;
  box-shadow: none;
  color: #7a7a7a;
  a{
    color: #7a7a7a;
  }
  a.nav-link.active {
    background: #113D79;
    color: #fff;
    outline: none;
    border-bottom: 3px solid #113D79;
    border-radius: 6px;
  }
  .nav-link:not(.active):hover {
    border-bottom: 3px solid #2fb5d2;
  }
  .tab-content {
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
    padding: 1.25rem 1.875rem;
    text-align: left;
    .tab-pane {
      p{
        font-size: .9375rem;
        font-weight: 400;
      }
      label {
        color: #232323;
        font-weight: 700;
      }
    }
  }
}
</style>
