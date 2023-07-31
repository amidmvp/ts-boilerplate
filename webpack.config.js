const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.ts',
    modules: './src/ts-modules/*.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/js-modules'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'js', 'json'],
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
