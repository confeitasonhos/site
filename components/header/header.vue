<template>
  <header>
    <nav>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <div class="container">
        <div class="nav-wrapper">
          <router-link :to="{name: 'home'}" class="brand-logo">
            <img src="/images/logo.png">
          </router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'portfolio'}">Portfólio</router-link></li>
            <li><router-link :to="{name: 'quem-somos'}">Quem Somos</router-link></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li><router-link :to="{name: 'portfolio'}">Portfólio</router-link></li>
            <li><router-link :to="{name: 'quem-somos'}">Quem Somos</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="curve"></div>
  </header>
</template>
<script src="./header"></script>
<style lang="scss" src="./header.scss" scoped></style>
