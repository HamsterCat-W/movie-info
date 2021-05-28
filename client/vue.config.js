module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
    proxy: process.env.VUE_APP_MOCK_SERVER
  }
}
