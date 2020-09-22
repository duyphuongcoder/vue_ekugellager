<template>
  <div class="order-of-day">
    <b-row class="quick-actions p-3 mx-0">
      <b-col md="2">AuftraG 123456</b-col>
      <b-col md="2">Bestelldetails</b-col>
      <b-col md="3">Auftrag RetouRnieren</b-col>
      <b-col md="3">Lieferung verfolgen</b-col>
      <b-col md="2">Rechnung</b-col>
    </b-row>
    <b-row class="header p-3 mx-0">
      <b-col md="2">ARTIKEL</b-col>
      <b-col md="3"></b-col>
      <b-col md="2">MENGE</b-col>
      <b-col md="1">STÜCKPREIS</b-col>
      <b-col md="2">GESAMT</b-col>
      <b-col md="2"></b-col>
    </b-row>
    <b-row class="item p-3 align-items-center mx-0">
      <b-col md="2" class="image"><b-img src="https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg"></b-img></b-col>
      <b-col md="3" class="detail">
        <p>Rillenkugellager</p>
        <p>16002 BE-XL-JPA-T41A</p>
        <p>BOSCH-Rexroth</p>
        <p>10 x 26 x 8 mm</p>
      </b-col>
      <b-col md="2" class="count"><b-input value="1000"></b-input></b-col>
      <b-col md="1" class="unit-price">0.50 €</b-col>
      <b-col md="2" class="total-price">21.50 €</b-col>
      <b-col md="2" class="return-btn"><b-button>Erneut bestellen</b-button></b-col>
    </b-row>
    <b-row class="item p-3 align-items-center mx-0">
      <b-col md="2" class="image"><b-img src="https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg"></b-img></b-col>
      <b-col md="3" class="detail">
        <p>Rillenkugellager</p>
        <p>16002 BE-XL-JPA-T41A</p>
        <p>BOSCH-Rexroth</p>
        <p>10 x 26 x 8 mm</p>
      </b-col>
      <b-col md="2" class="count"><b-input value="1000"></b-input></b-col>
      <b-col md="1" class="unit-price">0.50 €</b-col>
      <b-col md="2" class="total-price">21.50 €</b-col>
      <b-col md="2" class="return-btn"><b-button>Erneut bestellen</b-button></b-col>
    </b-row>
    <b-row class="item p-3 align-items-center mx-0">
      <b-col md="2" class="image"><b-img src="https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg"></b-img></b-col>
      <b-col md="3" class="detail">
        <p>Rillenkugellager</p>
        <p>16002 BE-XL-JPA-T41A</p>
        <p>BOSCH-Rexroth</p>
        <p>10 x 26 x 8 mm</p>
      </b-col>
      <b-col md="2" class="count"><b-input value="1000"></b-input></b-col>
      <b-col md="1" class="unit-price">0.50 €</b-col>
      <b-col md="2" class="total-price">21.50 €</b-col>
      <b-col md="2" class="return-btn"><b-button>Erneut bestellen</b-button></b-col>
    </b-row>
  </div>
</template>
<script>
export default {

}
</script>>
<style lang="scss" scoped>
.order-of-day {
  border: 1px solid #E9E9E9;
  border-radius: 8px;
  .quick-actions {
    text-transform: uppercase;
    background-color: #E4E4E4;
    border-radius: 8px;

  }
  .item {
    border-top: 1px solid #E9E9E9;
    .detail {
      line-height: 1;
    }
  }
}
</style>
