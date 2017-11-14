<template>
  <section class="container">
    <h2>Produtos</h2>
    
    <div class="row list-item">
      <div class="col l4 m12">
        <img src="/images/slide/2.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/slide/3.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/slide/4.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
    </div>
    <div class="row list-item">
      <div class="col l4 m12">
        <img src="/images/slide/3.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/slide/2.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/slide/3.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
    </div>
    <div class="row list-item">
      <div class="col l4 m12">
        <img src="/images/slide/4.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
      <div class="col l4 m12">
        <img src="/images/slide/3.jpg">
        <blockquote>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.</blockquote>
      </div>
    </div>
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
