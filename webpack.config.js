const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'gui-react': './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'gui-react',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
    ]
  }
}