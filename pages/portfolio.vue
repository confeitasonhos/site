<template>
  <section>
    <h1>portfolio</h1>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Portfólio | ' + this.$store.getters.getAppName
    }
  }
}
</script>
