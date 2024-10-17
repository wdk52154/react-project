//自定义webpack打包规则
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  //开发环境
  mode: 'development',
  //入口文件
  entry: './src/Index.tsx',
  //出口文件
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  //优化项
  optimization: {
    //设置压缩方式
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
  },
  // 设置打包的最大资源大小
  performance: {
    maxAssetSize: 100 * 1024 * 1024, //100兆
    maxEntrypointSize: 100 * 1024 * 1024,
  },
  //路径模块解析规则
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'], // 添加其他需要的扩展
    //配置别名,@以后代表的就是src这个路径
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //使用插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      //打包后CSS文件的名字
      filename: 'main.[hash:8].css',
    }),
  ],
  //dev-server
  devServer: {
    //利用 gzips 压缩 public/ 目录当中的所有内容并提供一个本地服务
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '127.0.0.1', //域名
    port: 3000, //端口号
    open: true, //自动打开浏览器
    hot: true, //热更新
    compress: true, //开启服务器端的GZIP压缩
    /* 
         跨域代理的处理  
           "/xxx" 前缀：主要就是用来区分，以“什么前缀”发的请求，我们代理到哪一台服务器上 「一般设置为"/api"」
           target：代理的真正服务器地址
           pathRewrite：地址重写，主要用于把用来区分不同代理的前缀，从最后请求的真正地址中移除掉
           changeOrigin：修改请求头中的origin源信息
           ws：支持webscoket通信机制
        */
    proxy: [
      {
        context: ['/zhi'],
        target: 'https://news-at.zhihu.com/api/4',
        pathRewrite: { '^/zhi': '' },
        changeOrigin: true,
        ws: true,
      },
    ],
  },
  //模块加载规则
  module: {
    //Loader 加载器   执行顺序：下->上    右->左
    rules: [
      {
        test: /\.(css|less)$/, // 基于正则匹配：哪些文件是我们需要处理的
        use: [
          MiniCssExtractPlugin.loader, //抽离CSS代码的
          //'style-loader', // 把css以内嵌式导入到页面
          'css-loader', //处理特殊语法
          'postcss-loader', //配合autoprefixer&browserlist给css3属性设置前缀【兼容】
          'less-loader', //把less编译为css
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'javascript/auto', //webpack5需要的
        use: [
          {
            // 把指定大小内的图片BASE64
            loader: 'url-loader',
            options: {
              limit: 200 * 1024, //1024=1kb,换句话就是 【<=200kb的要进行base64】
              esModule: false,
              name: 'images/[name].[hash:8].[ext]', //编译后，没有base64的图片，编译输出的路径和名称
            },
          },
        ],
      },
    ],
  },
};
