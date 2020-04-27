module.exports = {
  // entry point = the first script webpack should look at
  entry: "index.js",
  //output: the name of the bundled js file webpack should create, along with its location
  //if the location doesn't exist, webpack will create it
  output: {
    filename: "bundle.js",
    path: "./dist"
  },
  mode: "none"
}