<template>
  <section class="container">
    <h2>A Confeitaria</h2>
    <div class="text">
      A Confeita Sonhos existe em função do trabalho feito com muito carinho pela confeiteira Aparecida Lopes.
      <br><br>
      <img src="/images/cakes/2.jpg">
      <br><br>
      Seu maior amor está em fazer delícias pra você e poder fazer parte das suas festividades, trazer alegria e claro, satisfação com seus produtos.
      </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'A Confeitaria | ' + this.$store.getters.getAppName
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  margin-bottom: 20px;
  img {
    max-width: 100%;
  }
}
</style>
