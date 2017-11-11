<template>
  <section>
    <h1>quem-somos</h1>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Quem Somos | ' + this.$store.getters.getAppName
    }
  }
}
</script>
