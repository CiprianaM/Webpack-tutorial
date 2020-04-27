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
    path: path.resolve(__dirname, './dist')
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
      }
    ]
  }
}