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
      return 'mailto:contato@contato.com.br?subject=Contato do site ' + this.$store.getters.getAppName
    },

    /**
     * @desc returns the tel link
     * @returns {String}
     */
    linkTel () {
      return 'tel:+5531988061081'
    }
  }
}
