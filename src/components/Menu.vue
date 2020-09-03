<template>
  <b-container class="menu">
    <div class="menu-content">
      <b-collapse id="collapse-menu" class="">
        <b-list-group>
          <b-list-group-item>
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.home') }}</router-link>
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
                      <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.rillenkugellager') }}</router-link>
                    </b-list-group-item>
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.achragkugellager_spindellager') }}</router-link>
                    </b-list-group-item>
                    <b-list-group-item>
                      <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.spannlager_gehauselager') }}</router-link>
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
                      <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.kegelrollenlager') }}</router-link>
                    </b-list-group-item>
                  </b-collapse>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.nadellager') }}</router-link>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.axiallager') }}</router-link>
                </b-list-group-item>
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.kombinierte_axial_adiallager') }}</router-link>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.laufrolle') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.lineartechnik') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.gehause_einheiten') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.gleitlager') }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0">
            <router-link :to="$i18nRoute({ name: 'home'})">{{ $t('header.keilriemen') }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </div>
  </b-container>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.menu {
  text-align: left;
  .menu-content {
    padding: 0px 15px;
    background: #f0f0f0;
    width: 100%;
    box-shadow: 0px 3px 30px #00000029;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
      svg {
        font-size: 25px;
        margin-left: 220px;
      }
    }
    .sub-sub-menu-bar-1 {
      outline: none;
      svg {
        font-size: 25px;
        margin-left: 197px;
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
  }
  .menu.container {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
</style>
