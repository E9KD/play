'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  rules: [
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
    },
    {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader?indentedSyntax'
      ],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          'scss': [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ],
          'sass': [
            'vue-style-loader',
            'css-loader',
            'sass-loader?indentedSyntax'
          ]
        }
        // other vue-loader options go here
      }
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg|ttf|woff)$/,
      loader: 'url-loader?limit=10000',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
  ]
})
