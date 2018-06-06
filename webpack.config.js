module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public', //本地服务器加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  module: {
    rules: [{
        test: /(\.jsx | \.js)$/, //一个匹配loaders所处理文件的拓展名的正则表达式 必填项
        use: {
          loader: 'babel-loader', //loader的名称 必须
          options: {
            presets: [
              'env', 'react'
            ]
          }
        },
        exclude: /node_modules/ //手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件  可选
        // query 为loaders提供额外的设置  可选
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true, // 启用css modules
            localIdentName: '[name]__[local]--[hash:base64:5]' //指定css 类名格式
          }
        }]
      }
    ]
  }
}