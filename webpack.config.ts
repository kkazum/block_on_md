import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = () => {
  return {
    entry: {
      background: path.join(__dirname, 'src', '/background.ts'),
      content: path.join(__dirname, 'src', '/content.ts'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: './[name].js'
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new CopyWebpackPlugin({patterns: [
        { from: 'src/public', to: '.'}
      ]}),
      new CleanWebpackPlugin(),
    ],
  }
}


export default config
