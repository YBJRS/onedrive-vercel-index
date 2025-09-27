// const { i18n } = require('./next-i18next.config')

// module.exports = {
//   i18n,
//   reactStrictMode: true,
//   // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
//   trailingSlash: true
// }

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config, { isServer }) {
    if (isServer) {
      // 如果是在服务器端构建，排除 plyr.js
      config.externals = config.externals || [];
      config.externals.push('plyr');  // 排除 plyr.js 让它只在客户端加载
    }

    return config;
  }
}
