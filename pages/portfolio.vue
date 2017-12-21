<template>
  <section class="container">
    <h2>Produtos</h2>
    
    <div class="row list-item">
      <div class="col l4 m12">
        <img src="/images/cakes/3.jpg">
        <blockquote>Bolo decorado com flores feitas com glasse, dois andares, massa branca, recheio de doce de leite com coco.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/cakes/5.jpg">
        <blockquote>Bolo pelado, recheio de brigadeiro e beijinho com beijinho, coberto por uma calda de chocolate decorada com granulado e morango.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/cakes/7.jpg">
        <blockquote>Doces variados, beijinho ou o tão famoso e tradicional brigadeiro, entre outros.</blockquote>
      </div>
    </div>
    <div class="row list-item">
      <div class="col l4 m12">
        <img src="/images/cakes/4.jpg">
        <blockquote>Bolo de chocolate com recheio de brigadeiro e calda de morango banhado no chocolate.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/cakes/6.jpg">
        <blockquote>Bolo feito para festa fantasia, sabor coco de três andares.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/cakes/1.jpg">
        <blockquote>Copinhos de chocolate decorativos para mesa de bolos, recheio de mousse de maracujá e chantininho.</blockquote>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Produtos | ' + this.$store.getters.getAppName
    }
  }
}
</script>

<style lang="scss">
.list-item {
  img {
    max-width: 100%;
  }
  blockquote {
    border-color: #be3136;
  }
}
</style>
