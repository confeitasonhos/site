export const state = () => ({
  appName: process.env.APP_NAME
})

export const getters = {
  /**
   * @desc returns app name
   * @returns {String}
   */
  getAppName: (state) => state.appName
}
