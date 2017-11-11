<template>
  <section class="container">
    <div>
      <h1 class="title">home</h1>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home | ' + this.$store.getters.getAppName
    }
  }
}
</script>
