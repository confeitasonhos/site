<template>
  <header>
    <nav>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <div class="container">
        <div class="nav-wrapper">
          <router-link :to="{name: 'home'}" class="brand-logo">
            <img src="/images/logo.png">
          </router-link>
          <ul id="nav-desk" class="right hide-on-med-and-down">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'produtos'}">Produtos</router-link></li>
            <li><router-link :to="{name: 'a-confeitaria'}">A Confeitaria</router-link></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'produtos'}">Produtos</router-link></li>
            <li><router-link :to="{name: 'a-confeitaria'}">A Confeitaria</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <app-parallax :image="'/images/slide/2.jpg'" :height="500"></app-parallax>
  </header>
</template>
<script src="./header"></script>
<style lang="scss" src="./header.scss" scoped></style>
