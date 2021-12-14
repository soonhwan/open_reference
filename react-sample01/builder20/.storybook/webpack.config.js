const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// storybook 에서 사용될 webpack 설정 추가
module.exports = async ({ config, mode }) => {
  config.module.rules = [
    {
      test    : /\.(js|jsx)$/,
      exclude : /node_modules/,
      use     : 'babel-loader',
    },
    {
      test: /\.css$/,
      use: [
        "isomorphic-style-loader",
        "style-loader",
        "css-loader"
      ]
    },
    {
      test: /\.scss$/,
      use: [
        "isomorphic-style-loader",
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
              context: '/', 
              name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|gif|ico)$/,
      oneOf: [
        {test: /flags\/\dx\d\//, use: 'file-loader?name=ext/flags/[name].[ext]'},
        {test: /\/amcharts\//,   use: 'file-loader?name=ext/amcharts/[name].[ext]'},
        {test: /.*/,             use: 'file-loader?name=images/[name].[ext]'}
      ]
    },
    {
      test: /\.(mobileconfig)$/,
      use: 'file-loader?name=files/[name].[ext]'
    },
    {
      test: /datatables\.net.*/,
      use: 'imports-loader?define=>false'
    }
  ];
  config.resolve.modules = [
    ...config.resolve.modules,
    ...[path.resolve(__dirname, "../src"), "node_modules"],
  ];
  config.plugins = [
    ... config.plugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(resolveApp('images'), './'), // windows os 대응이 고려 된 버전 
          to: 'images'
        }
      ]
    })
  ];
  return config;
};






