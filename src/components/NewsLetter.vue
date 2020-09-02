<template>
<b-container fluid class="block_newsletter">
    <b-container>
      <b-row>
        <b-col md="12" lg="12" sm="12" >
          <b-row class="justify-content-between">
            <b-col md="4" cols="12">
              <h1>Get our latest news and special sales</h1>
              <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
            </b-col>
            <b-col md="4" cols="12">
              <label class="form-check-label checkbox-field psgdpr_consent_message">
                <span class="custom-checkbox-form">
                    <input id="psgdpr_consent_checkbox_17" name="psgdpr_consent_checkbox" type="checkbox" value="1">
                    <span></span>
                </span>
                <span class="check-box-label">Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.</span>
              </label>
            </b-col>
            <b-col md="4" cols="12">
              <form action="https://ekugellager.roccshow.com/en/#footer" method="post">
                <b-row>
                  <b-col sm="12">
                    <b-button variant="primary" class="float-right hidden-sm-down" type="submit">Subscribe</b-button>
                    <b-button variant="primary" class="float-right hidden-sm-up" type="submit">Sign up</b-button>
                    <div class="input-wrapper">
                      <b-form-input type="email" placeholder="Your email address" aria-labelledby="block-newsletter-label"></b-form-input>
                    </div>
                    <div class="clearfix"></div>
                  </b-col>
                </b-row>
              </form>
            </b-col>
          </b-row>

        </b-col>
        <b-col lg="4" md="12" sm="12" class="block-social"></b-col>
      </b-row>
    </b-container>
</b-container>
</template>
<style scoped lang="scss">
.block_newsletter {
  padding-top:2.5rem;
  background-color: #EDEDED;
  h1 {
    font-size: 30px;
    color: #000000;
    font-weight: 700;
    font-family: 'Lato';
    line-height: 30px;
  }
  p {
    padding-top: .625rem;
    font-family: 'Lato';
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #363636
  }
  .form-check-label {
    padding-left: 1.25rem;
    margin-bottom: 0;
    cursor: pointer;
  }
  .btn-primary {
    background-color: #113D79;
    border-radius: 8px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 70px;
    font-family: Lato;
    font-weight: 300;
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: 1px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
  }
  form .input-wrapper {
    overflow: hidden;
  }

  form input[type=email] {
    background: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    height: 70px;
    color: #000 !important;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 11px;
    width: 100%;
    box-shadow: none;
  }
  form input[type=email]:focus {
      border: 1px solid #113D79;
      padding: 8px 8px 9px;
      outline: 0;
  }
  @media (min-width: 576px){
    .hidden-sm-up {
        display: none!important;
    }
  }
  @media (max-width: 576px){
    .hidden-sm-down {
        display: none!important;
    }
  }
}
</style>
