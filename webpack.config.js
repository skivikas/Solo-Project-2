const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
//   mode: 'production',
  mode: process.env.NODE_ENV, 
  performance: {
      hints: false
  },
  devServer: {
      host: 'localhost',
      port: 8080,
      static: {
            directory: path.resolve(__dirname, '/dist'),
            publicPath: '/'
        },
    compress: true,
},
proxy: {
    '/step2/**': {
      target: 'http://localhost:3000/',
      secure: false,
    },
},
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
    "loaders": [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
                   limit: 10000,
                   name: 'static/media/[name].[hash:8].[ext]',
                 },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}