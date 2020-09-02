<template>
  <div class="LanguageSwitcher">
    <b-form-select v-model="selectedLang" :options="languages" @change="changeLanguage" size="sm"></b-form-select>
  </div>
</template>
<script>
import { Trans } from '@/lang/Translation'

export default {
  data () {
    return {
      selectedLang: Trans.currentLanguage,
      languages: Trans.supportedLanguagesObject
    }
  },
  computed: {
    supportedLanguages () {
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },
  methods: {
    changeLanguage (e) {
      const lang = this.selectedLang
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.LanguageSwitcher {
  .custom-select:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
