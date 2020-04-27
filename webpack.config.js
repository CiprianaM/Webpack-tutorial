//old way of importing files because in webpack.config files we cannot use ES6

const path = require ('path');

module.exports = {
  // entry point = the first script webpack should look at
  entry: "./src/index.js",
  //output: the name of the bundled js file webpack should create, along with its location
  //if the location doesn't exist, webpack will create it
  output: {
    filename: "bundle.js",
    //instead of "dist", we add path.resolve which will provide as output the absolute path
    path: path.resolve(__dirname, './dist'),
    //publicPath is where webpack will look for the additional bundled resources
    //if the site were deployed to the internet, you would have http://my-site.com/ as a publicPath
    publicPath: 'dist/'
  },
  mode: "none",
  //module is where we specify the rules for importing various files, including images
  module: {
    //rules is an array of objects, each object has at least 2 properties
    //first property is test - regex to identify the type of file
    //second property is use, an array of loaders to be used when importing those specific files
    rules: [
      // {
      //   test: /\.(xml)$/,
      //   use: [
      //     'xml-loader'
      //   ]
      // },
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      //add loaders for css - multiple loaders will be used
      {
        test: /\.(css)$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          //webpack reads loaders from right to left
          //first, it will invoke the sass-loader, and convert the sass to css
          //then, it will invoke the css-loader, and will take the css and convert it to the JS representation
          //finally, it will invoke style-loader, which will create style text inside our 
          //html page - visible when we inspect the browser
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  }
}