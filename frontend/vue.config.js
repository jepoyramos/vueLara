module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    proxy: 'http://laracon.test'
  },

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html',

  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // data: `@import "@/variables.scss";`
      },
      // pass Less.js Options to less-loader
      // less:{
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }
  }
}