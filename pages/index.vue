<template>
  <section>
    <div class="container">
      <h2 class="title">Mais pedidos!</h2>
      <div class="row">
        <app-materialboxed :message="'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit.'" :image="'/images/slide/2.jpg'"></app-materialboxed>
        <app-materialboxed :message="'Proin eget tortor risus. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.'" :image="'/images/slide/3.jpg'"></app-materialboxed>
        <app-materialboxed :message="'Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada.'" :image="'/images/slide/4.jpg'"></app-materialboxed>
      </div>
    </div>
  </section>
</template>

<script>
import AppMaterialboxed from '~/components/materialboxed/materialboxed.vue'

export default {
  components: {
    AppMaterialboxed
  },

  head () {
    return {
      title: 'Home | ' + this.$store.getters.getAppName
    }
  }
}
</script>

<style lang="scss" scoped>
blockquote {
  border-color: #be3136;
}
</style>

