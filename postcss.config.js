
// https://github.com/michael-ciniawsky/postcss-load-config
const browserslist = require('./package.json').browserslist
module.exports = (ctx) => ({
  plugins: {
    'postcss-pxtorem': ctx.env !== 'production' ? { rootValue: 100, propWhiteList: [] } : false,
    'postcss-url': {url: 'inline'},
    'cssnano': { zindex: false, mergeIdents: false, discardUnused: false, autoprefixer: false, reduceIdents: false
    },
    'autoprefixer': { browsers: browserslist }
  }
})
