const path = require('path')
module.exports = {
  plugins: {
    'postcss-combine-media-query': {
      output: {
        path: path.join(__dirname, 'dist', 'assets'), // emit to 'dist' folder in root
        name: '[name]-[query].[ext]', // pattern of emited files
      },
    },
  },
}
