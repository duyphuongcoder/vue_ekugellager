<template>
  <div class="app-header">
    <h1> This is header </h1>
    <div>
      Change Language to:
      <TheLanguageSwitcher/>
    </div>
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'
export default {
  components: {
    TheLanguageSwitcher
  }
}
</script>
