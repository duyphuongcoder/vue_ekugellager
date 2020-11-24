<template>
    <div v-if="this.$store.getters.isLoggedIn" :class="opened ? 'side_contact open' : 'side_contact'">
        <ul>
            <li>
                <a href="javascript:void(0)" class="icon-tab1 opentab" @click="opened = !opened">
                    <b-icon :icon="opened ? 'chevron-right' : 'chevron-left'" class="red-icon"></b-icon>
                </a>
                <span class="right">
                <a href="#">Kd Nr: 21</a>
                </span>
            </li>
            <li>
                <router-link :to="$i18nRoute({ name: 'my-account'})" class="icon-tab1">
                    <b-icon icon="person" class="red-icon"></b-icon>
                </router-link>
                <span class="right">
                    <a href="#">Kontakt<span>+49 (0)234 5450120</span><em>Mo.-Fr. 8:00 bis 17:00 Uhr</em></a>
                </span>
            </li>
            <li class="kontaktformular">
                <router-link :to="$i18nRoute({ name: 'comparator'})" class="icon-tab1">
                    <b-icon icon="eye" class="red-icon"></b-icon>
                </router-link>
                <span class="right">
                    <a href="https://ekugellager.roccshow.com/en/contact-us">
                    Kontaktformular
                    <b-icon icon="question-circle"></b-icon>
                    </a>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.side_contact {
    position: fixed;
    right: -235px;
    background: #b2162c;
    border-radius: 10px 0 0 10px;
    z-index: 100;
    color: #000;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    ul {
        margin: 0;
        padding: 0;
        li {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            font-size: 20px;
            line-height: 130%;
            position: relative;
            border-bottom: 1px solid #efe4e4;
            cursor: pointer;
            a {
                color:#000 !important;
                padding: 30px 0;
            }
            .right {
                display: flex;
                border-bottom: 1px solid #ffff;
                padding: 0px 25px;
                width: calc(100% - 85px);
                height: 95px;
                align-items: center;
                background: #f0f0f0;
                text-align: left;
                span {
                    display: block;
                    font-weight: 300;
                }
                em {
                    display: block;
                    font-weight: 300;
                    font-style: normal;
                    font-size: 14px;
                }
            }
            svg.red-icon {
                transition: all 0.5s ease 0s;
                width: 85px;
                display: block;
                color: #ffff;
                padding: 0px 0px;
                text-align: center;
                // border-bottom: 1px solid #da8e98;
                font-size: 24px;
                margin-right: 0;
                position: relative;
                overflow: hidden;
                // border-bottom: 1px solid #da8e98;
            }
        }
        li:hover {
            background: #e1213c;
        }
        .kontaktformular {
            border-bottom: none;
            .right{
                font-weight: 300;
            }
        }
    }
}
.side_contact.open {
    right: 0px !important;
}
</style>
