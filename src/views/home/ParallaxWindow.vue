<template>
<b-container>
  <div class="parallax-window bluemain-col open mt-4">
  </div>
</b-container>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.bluemain-col:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: url(../../assets/img/bg-animation.png) 0 0 no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    z-index: 1;
}
.bluemain-col.open {
    display: block;
}
.bluemain-col {
    background: #12407e;
    background: linear-gradient(90deg,#12407e 0,#113d77 68%,#0e3160 100%);
    border-radius: 8px;
    border: 1px solid #fff;
    padding-bottom: 80px;
    margin-bottom: 60px;
    color: #fff;
    display: none;
    position: relative;
    overflow: hidden;
}
</style>
