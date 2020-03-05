const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .sass("resources/sass/app.scss", "public/css")
  .react("resources/js/auth/login.js", "public/js") // Add this line of code
  .react("resources/js/auth/register.js", "public/js") // Add this line of code
  .react("resources/js/auth/verification.js", "public/js") // Add this line of code
  .react("resources/js/auth/forget-password.js", "public/js") // Add this line of code
  .react("resources/js/auth/reset-password.js", "public/js") // Add this line of code
  .react("resources/js/home.js", "public/js") // Add this line of code
  .react("resources/js/admin/app.js", "public/js/admin") // Add this line of code
  .react("resources/js/admin/pages/login.js", "public/js/admin"); // Add this line of code

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      "~": path.join(__dirname, "./resources/js/admin")
    }
  },
  output: {
    publicPath: "/",
    chunkFilename: "js/admin/[name].js"
  }
});
