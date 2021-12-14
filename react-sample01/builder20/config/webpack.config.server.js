const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const nodeExternals = require('webpack-node-externals');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'production',
  entry: [paths.ssrIndexJs],
  target: 'node',
  externals: [
    nodeExternals({
      // yarn workspace issue: https://stackoverflow.com/questions/46010926/how-to-use-webpack-with-a-monorepo-yarnpkg-workspaces
      // it should reference node_modules reside in root dir
      modulesDir: paths.appNodeModules
    })
  ],
  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'chunks/[name].[chunkhash:8].chunk.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [
      ...['node_modules', paths.appNodeModules].concat(
        // It is guaranteed to exist because we tweak it in `env.js`
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      ),
      ...[path.resolve(__dirname, '../src'), 'node_modules']
    ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            // test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              emitFile: false, // 실제로 파일을 생성하지 않음
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: false
            }
          },
          {
            test: /\.css$/,
            // use: [
            //   { loader: require.resolve('css-loader/locals') },
            //   {
            //     // Options for PostCSS as we reference these options twice
            //     // Adds vendor prefixing based on your specified browser support in
            //     // package.json
            //     loader: require.resolve('postcss-loader'),
            //     options: {
            //       // Necessary for external CSS imports to work
            //       // https://github.com/facebook/create-react-app/issues/2677
            //       ident: 'postcss',
            //       plugins: () => [
            //         require('postcss-flexbugs-fixes'),
            //         require('postcss-preset-env')({
            //           autoprefixer: {
            //             flexbox: 'no-2009',
            //           },
            //           stage: 3,
            //         }),
            //       ],
            //     },
            //   },
            // ]
            // loader: require.resolve('css-loader/locals') // 1.0.0 버전일 때
            use: [ // 버전2 이상일때
              'isomorphic-style-loader',
              { 
                loader: 'css-loader', 
                options: {
                  importLoaders: 0,
                  modules: true,
                  esModule: true,
                  onlyLocals: true,
                }
              }
            ]
            // 뒤에 /locals 를 붙여줘야 실제로 파일을 생성하지 않음.
            // postcss-loader 같은건 생략해도됨.
          },
          {
            test: /\.scss$/,
            use: [
              // style-loader that works well on server side
              'isomorphic-style-loader',
              // require.resolve('css-loader/locals'), // 1.0.0 버전일 때
              { // 버전2 이상일때
                loader: 'css-loader', 
                options: {
                  importLoaders: 2,
                  modules: true,
                  esModule: true,
                  onlyLocals: true,
                }
              },
              require.resolve('sass-loader')
            ]
          },

          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.scss$/],
            options: {
              emitFile: false, // 실제로 파일을 생성하지 않게 함
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
        ]
      }
    ]
  },
  plugins: [new webpack.DefinePlugin(env.stringified)],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    __dirname: true
  },
  performance: false
};
