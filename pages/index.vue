<template>
  <section>
    <div class="container">
      <h2 class="title">Seu momento é aqui!</h2>
      <div class="row">
        <app-materialboxed :message="'Bolo decorado com flores feitas com glasse, dois andares, massa branca, recheio de doce de leite com coco.'" :image="'/images/cakes/3.jpg'"></app-materialboxed>
        <app-materialboxed :message="'Bolo pelado, recheio de brigadeiro e beijinho com beijinho, coberto por uma calda de chocolate decorada com granulado e morango'" :image="'/images/cakes/5.jpg'"></app-materialboxed>
        <app-materialboxed :message="'Doces variados, beijinho ou o tão famoso e tradicional brigadeiro, entre outros.'" :image="'/images/cakes/7.jpg'"></app-materialboxed>
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

