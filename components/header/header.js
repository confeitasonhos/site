export default {
  name: 'AppHeader',

  mounted () {
    $(this.$el.querySelector('.button-collapse')).sideNav()
  }
}
