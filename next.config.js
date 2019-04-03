const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withMDX({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  pageExtensions: ['js', 'md', 'mdx']
}))
