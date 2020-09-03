<template>
  <b-container class="custom_text_1">
    <b-row>
      <b-col cols="12" xl="6"  class="business-left">
        <div class="business-details">
          <!-- <img src="../assets/img/custom_text_1_back1.png"> -->
          <p class="left_block_desc">Fachhändler für Kugellager,Lineartechnik & Keilriemen</p>
        </div>
      </b-col>
      <b-col cols="12" xl="6"  class="business-right">
        <div class="business-details">
          <p class="right_block_desc">Genau die richtigen Kugellager für Profis in Fertigung, Service und Werkstatt: Bestellen Sie Ihre Standard Rillenkugellager, Nadellager oder andere technische Produkte direkt online. Einfach Ihre Lagertype oben in die Schnellsuche eingeben – fertig! Auch 2018 sind wir wieder mit Rat und Tat für Sie da. Wählen Sie aus über 35.000 Artikeln von SKF, FAG, INA, NSK, NKE und weiteren Premiummarken. Wir liefern SKF, FAG Wälzlager, Gehäuse und komplette Wälzlagereinheiten, Kegelrollenlager, Rillenkugellager, Rollenlager, Keilriemen, Simmerringe, Ersatzlager für Linearführungen sowie das INA Programm: Nadellager, Gelenklager, Gelenkköpfe in erster Linie für Industrieanlagen, Maschinenbau, Schifffahrt und Landtechnik. Dank umfassendem Lagerbestand wickeln wir Ihren Auftrag per Expressversand noch am gleichen Tag ab. Wir haben alle gelisteten Artikel im Bestand. Nicht gelistete Artikel fragen Sie gerne bei uns an. Versand ist täglich Montag bis Freitag per UPS-Paketdienst oder Spedition, für eilige Sendungen per Express, oder bei Maschinenstillstand noch am gleichen Tag per Direktfahrt zu Ihnen. Wir bevorraten alle Größen und Bauformen fabrikneuer Qualitätslager. Vom Rillen kugellager über Zylinderrollenlager, Pendelkugellager, Pendelrollenlager, Kegelrollenlager, Schrägkugellager, axiale Lager, Nadellager und Zubehör wie Hülsen, Gehäuse und Dichtringe. ekugellager.de ist ein reiner Online-Händler. Wir sind nicht vertraglich an einen einzelnen Hersteller gebunden. Wir bieten Ihnen eine sehr große Auswahl an Kugellagern der führenden Premiumhersteller.</p>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .custom_text_1 {
    margin-bottom: 80px;
    border-radius: 8px;
    padding: 0px;
    overflow: hidden;
    .business-left {
      background: url('../assets/img/custom_text_1_back1.png') no-repeat top right;
      background-size: cover;
      padding: 0px;
      padding-bottom: 50%;
      position: relative;
      .business-details {
        position:absolute;
        top: 50%;
        transform: translate(0, -50%);
        text-align: center;
        color: #FFFFFF;
        font-size: 42px;
        font-weight: 500;
        line-height: 60px;
        @media screen and (max-width: 576px) {
          font-size: 24px;
          line-height: normal;
        }
      }
    }
    .business-right {
      background: url('../assets/img/custom_text_1_back.png') no-repeat top right #12407D;
      padding: 0px;
      .business-details {
        display: flex;
        margin-top: 7%;
        .right_block_desc {
          text-align: center;
          font-size: 16px;
          color: #fff;
          font-weight: 300;
          padding: 0px 50px;
          line-height: 1.8rem;
          @media screen and (max-width: 576px) {
            font-size: 12px;
            max-height: 710px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
</style>
