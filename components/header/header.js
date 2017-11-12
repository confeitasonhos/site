import AppParallax from '~/components/parallax/parallax.vue'

export default {
  name: 'AppHeader',

  components: {
    AppParallax
  },

  mounted () {
    $(this.$el.querySelector('.button-collapse')).sideNav({ closeOnClick: true })
  }
}
