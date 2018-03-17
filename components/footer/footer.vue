<template>
  <section>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5>{{$store.getters.getAppName}}</h5>
            <p class="text-lighten-4">Aproveite a oportunidade e deixe uma mensagem em nosso número de telefone (também com Whatsapp) ou Facebook. Vamos fazer seu sonho virar uma delícia.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5>Contato</h5>
            <ul>
              <li>
                <i class="fa fa-whatsapp" aria-hidden="true"></i><span><a :href="linkTel()">+55 (31) 98806-1081</a></span>
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true"></i><span><a :href="linkMail()">cida.mlsilva@gmail.com</a></span>
              </li>
            </ul>
            <h5>Rede Social</h5>
            <div class="social">
              <a href="//www.facebook.com/pg/confeitasonhos/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
              <a href="//www.instagram.com/confeitasonhos/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Copyright &copy; {{currentYear()}}
        <span class="text-lighten-4 right">Desenvolvido por <a href="//www.brunosalgado.com.br" target="_blank">Bruno Salgado</a></span>
        </div>
      </div>
    </footer>
  </section>
</template>
<script src="./footer"></script>
<style lang="scss" src="./footer.scss" scoped></style>
