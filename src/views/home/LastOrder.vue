<template>
  <b-container class="lastorder-section">
    <div class="head-title">
      <b-col cols="12">
        <h1>
          <span>
            {{$t('last_order.self')}}
          </span>
        </h1>
      </b-col>
    </div>
    <b-row>
      <b-col cols="3" v-for="(step, index) in steps" :key="index">
        <b-col lg="12">
          <b-row>
            <div class="step"> {{index+1}} </div>
          </b-row>
        </b-col>
        <div class="description">
            <b-icon :icon="step.icon_name" class="icon" v-if="step.icon_type=='b-icon'"></b-icon>
            <vue-fontawesome :icon="step.icon_name" class="icon" v-else></vue-fontawesome>
            <span>{{step.description}}</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      steps: [
        {
          description: this.$t('last_order.step_1'),
          icon_type: 'b-icon',
          icon_name: 'cart3'
        },
        {
          description: this.$t('last_order.step_2'),
          icon_type: 'fa-icon',
          icon_name: 'hand-paper-o'
        },
        {
          description: this.$t('last_order.step_3'),
          icon_type: 'fa-icon',
          icon_name: 'thumbs-o-up'
        },
        {
          description: this.$t('last_order.step_4'),
          icon_type: 'b-icon',
          icon_name: 'truck'
        }
      ]
    }
  },
  watch: {
    $route (to, from) {
      this.steps[0].description = this.$t('last_order.step_1')
      this.steps[1].description = this.$t('last_order.step_2')
      this.steps[2].description = this.$t('last_order.step_3')
      this.steps[3].description = this.$t('last_order.step_4')
    }
  }
}
</script>
<style lang="scss" scoped>
.lastorder-section {
  margin-bottom: 50px;
  padding: 40px 0px;
  .head-title h1{
    color: #12407E;
    font-weight: 300;
    font-family: 'Lato';
    text-align: center;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 40px;
    @media screen and (max-width: 576px){
       font-size: 18px;
    }
    span:before {
      content: '';
      background-color: #f1f1f1;
      height: 2px;
      display: block;
      position: absolute;
      top: 18px;
      left: 0;
      width: 25%;
    }
    span:after {
      content: '';
      background-color: #f1f1f1;
      height: 2px;
      display: block;
      position: absolute;
      top: 18px;
      right: 0;
      width: 25%;
    }
  }
  .row {
    .step {
      color: #fff;
      background: #12407E;
      font-size: 24px;
      line-height: 70px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin: auto;
      @media screen and (max-width: 576px){
       width: 40px;
       height: 40px;
       line-height: 40px;
      }
    }
    :not(:first-child) .step:before {
      content: '';
      background: #12407E;
      height: 25px;
      display: block;
      position: absolute;
      top: 22px;
      left: -50%;
      width: 95%;
      @media screen and (max-width: 576px) {
        top: 10px;
        height: 15px;
        left: -75%;
        width: 100%;
      }
    }
    .description {
      width: 100%;
      color: #12407D;
      font-size: 16px;
      display: inline-grid;
      margin-top: 15px;
      .icon {
        font-size: 36px;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
      }
      @media screen and (max-width: 576px){
       span {
         display: none;
       }
       .icon {
         font-size: 28px;
       }
      }
    }
  }
}
</style>
