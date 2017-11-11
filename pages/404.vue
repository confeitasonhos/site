<template>
  <section class="container center-align">
    <h2>404</h2>
    <h4>PÁGINA NÃO ENCONTRADA</h4>
    <div class="info">
      <span>Você pode ter digitado o endereço de forma incorreta ou ele não existe mais. Recomendamos que você retorne à página principal.</span>
    </div>
    <router-link :to="{name: 'home'}" class="btn">
      <i class="fa fa-arrow-left" aria-hidden="true"></i> IR PARA A HOME
    </router-link>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Página não encontrada | ' + this.$store.getters.getAppName
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    min-height: 300px;
  }

  .btn {
    background-color: #f2e4d7;
    color: #2c180d;
    &:hover {
      background-color: #b92f34;
      color: #fff;
    }
  }

  .info {
    max-width: 600px;
    margin: 0 auto 20px;
  }
</style>
