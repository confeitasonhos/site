export default {
  name: 'AppFooter',

  methods: {
    /**
     * @desc returns current year
     * @returns {Number}
     */
    currentYear: () => (new Date()).getFullYear(),

    /**
     * @desc return the mail link
     * @returns {String}
     */
    linkMail () {
      return 'mailto:cida.mlsilva@gmail.com?subject=Contato do site ' + this.$store.getters.getAppName
    },

    /**
     * @desc returns the tel link
     * @returns {String}
     */
    linkTel () {
      return 'https://api.whatsapp.com/send?phone=5531998191666'
    }
  }
}
