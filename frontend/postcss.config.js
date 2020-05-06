const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/App.js',
        './src/components/Main.js',
        './src/components/Services.js',
        './src/components/Home.js',
        './src/components/Footer.js',
        './src/components/About.js',
        './src/components/Services.js',
        './src/components/Services/ServicesBox1.js',
        './src/components/Services/ServicesBox2.js',
        './src/components/Header/BackgroundMenuBar.js',
        './src/components/Header/ButtonNav.js',
        './src/components/Header/Header.js',
        './src/components/Header/MenuBar.js',
        './src/components/Header/NavBar.js',
        './src/components/Contact/Aside.js',
        './src/components/Contact/Contact.js',
        './src/components/Contact/Form.js',
        './src/components/Contact/MsgBox.js',
        './src/components/Contact/ToTop.js',
        '../public/index.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  module.exports = {
    plugins: [
      require('tailwindcss'),
      purgecss
    ]
  }