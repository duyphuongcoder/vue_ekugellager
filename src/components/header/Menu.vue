<template>
<div :class="data">
  <b-container class="menu">
    <div class="menu-content">
      <b-collapse id="collapse-menu">
        <b-list-group>
          <b-list-group-item>
            <router-link :to="$i18nRoute({ name: 'startseite'})">{{ $t('header.home') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'clothes'})">{{ $t('header.clothes') }}</router-link>
            <span v-b-toggle.collapse-menu-sub class="sub-menu-bar">
              <b-icon icon="plus" class="collapsed-icon"></b-icon>
              <b-icon icon="dash" class="opened-icon"></b-icon>
            </span>
            <b-collapse id="collapse-menu-sub" class="mt-1">
              <b-list-group>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'men'})">{{ $t('header.men') }}</router-link>
                  <span v-b-toggle.collapse-menu-sub-sub class="sub-sub-menu-bar">
                    <b-icon icon="chevron-right" class="collapsed-icon"></b-icon>
                    <b-icon icon="chevron-down" class="opened-icon"></b-icon>
                  </span>
                  <b-collapse id="collapse-menu-sub-sub" class="mt-1">
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'rillenkugellager'})">{{ $t('header.rillenkugellager') }}</router-link>
                    </b-list-group-item>
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'schraegkugellager-spindellager'})">{{ $t('header.achragkugellager_spindellager') }}</router-link>
                    </b-list-group-item>
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'spannlager-gehaeuselager'})">{{ $t('header.spannlager_gehauselager') }}</router-link>
                    </b-list-group-item>
                  </b-collapse>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'women'})">{{ $t('header.women') }}</router-link>
                  <span v-b-toggle.collapse-menu-sub-sub-1 class="sub-sub-menu-bar-1">
                    <b-icon icon="chevron-right" class="collapsed-icon"></b-icon>
                    <b-icon icon="chevron-down" class="opened-icon"></b-icon>
                  </span>
                  <b-collapse id="collapse-menu-sub-sub-1" class="mt-1">
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'kegelrollenlager'})">{{ $t('header.kegelrollenlager') }}</router-link>
                    </b-list-group-item>
                  </b-collapse>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'nadellager'})">{{ $t('header.nadellager') }}</router-link>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'axiallager'})">{{ $t('header.axiallager') }}</router-link>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'kombinierte-exial-radiallager'})">{{ $t('header.kombinierte_axial_radiallager') }}</router-link>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'laufrolle'})">{{ $t('header.laufrolle') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'lineartechnik'})">{{ $t('header.lineartechnik') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'gehaeuse-einheiten'})">{{ $t('header.gehause_einheiten') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'gleitlager'})">{{ $t('header.gleitlager') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'keilriemen'})">{{ $t('header.keilriemen') }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </div>
  </b-container>
</div>
</template>

<script>
export default {
  props: {
    data: String
  }
}
</script>

<style scoped lang="scss">
.menu {
  text-align: left;
  .menu-content {
    background: #f0f0f0;
    width: 100%;
    box-shadow: 0px 3px 30px #00000029;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    #collapse-menu-sub {
      .list-group {
        max-width: 310px;
      }
    }
    .sub-menu-bar {
      outline: none;
      svg {
        outline: none;
        font-size: 30px;
        transform: translateX(-30px);
      }
    }
    .sub-sub-menu-bar {
      outline: none;
      float: right;
      svg {
        font-size: 25px;
      }
    }
    .sub-sub-menu-bar-1 {
      outline: none;
      float: right;
      svg {
        font-size: 25px;
      }
    }
    .list-group-item {
      text-align: left;
      background-color: #f0f0f0;
      border: none;
      z-index: 1000;
      a {
        color: #323232;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
      }
    }
  }
}
.menu-content .list-group-item[data-depth="0"]>a {
  border-bottom: 1px solid rgba(0,0,0,.25);
  min-width: 300px;
  display: inline-block;
  margin: .3125rem 0 0;
  padding-bottom: .5875rem;
}
@media screen and (max-width: 768px) {
  .menu-content .list-group-item[data-depth="0"]>a {
    min-width: 100px !important;
    width: 85% !important;
  }
  .menu-content .list-group-item[data-depth="0"] .sub-sub-menu-bar svg,
  .menu-content .list-group-item[data-depth="0"] .sub-sub-menu-bar-1 svg {
    margin-left: 0px !important;
    float: right;
    margin-right: 50px;
  }
  .menu.container {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  #collapse-menu-sub .list-group {
    max-width: 767px !important;
  }
}
</style>
