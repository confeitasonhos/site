export default {
  name: 'AppSlider',

  props: {
    image: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },

  mounted () {
    $('.parallax').parallax()
  }
}
