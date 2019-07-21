'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const qs = require('qs')
const db = require('../mongo/dbbb');
const ObjectId = require('mongodb').ObjectId;
const multiparty = require('multiparty');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}) )


const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


var apiRoutes = express.Router()
app.use('/api', apiRoutes)

app.use(express.static(path.join(__dirname, 'public')));
// 配置静态服务
app.use('/static/back/upload', express.static('upload'));

var appData = require('../static/mock/product.json')//加载本地数据文件
var HotkeyData = require('../static/mock/hotkey.json')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/queryProducts', (req, res) => {
        console.log('来了!')
        db.query('product',{},function(err, data){
          let result = data
          res.send(result);
      })
      }),
      // 返回关键字查询数据接口
      app.post('/api/getInfoKeyword', (req, res) => {
        console.log('keyword来了！')
        let arr = []
        req.on("data",function(data){//监听数据过来
           let keyword = decodeURIComponent(data)
          console.log(keyword)
          //处理字符串
           keyword = keyword.split(':')[1]
           keyword = keyword.substr(0, keyword.length-2)

           keyword = keyword.substring(1, keyword.length)
          
           let info = appData.houseInfo.houses
           
           let reg = new RegExp(keyword,'i');
           info.forEach((item) =>{
             for(var key in item){
               console.log(item[key])
               if(typeof item[key] === 'string') {
        
                 let result = item[key].match(reg)
                 
                 if(result !== null){
                   arr.push(item)
                 }
                 
               }

             }
           })
           console.log('arr=', arr)
          res.json({
            ret:true,
            data: arr
          })//接口返回json数据，上面配置的数据appData就赋值给data请求后调用
        })
       }), 


      app.get('/api/getHotkey', (req,res) => {
        console.log('又来了!')
        res.json(
          {
            ret: true,
            data: HotkeyData
          }
        )
      }),
      app.post('/api/upload', function(req, res) {
        req.on("data",function(data){//监听数据过来
          let result = decodeURIComponent(data)
          result = JSON.parse(result)
          console.log('res', result)
          let arr = []
          for (var k in result) {
            if(result[k] !== ''){
              let abc =  '{'+ k +':'+ '"'+ result[k] +'"'+ '}';
              let abc1 = eval("("+abc+")");
              console.log('abc=1',abc1)
              arr.push(abc1);
              }
              console.log(arr);
            }

          db.query('product',{$and:arr},function(err, data){
            let result = data;
            if(result){
                console.log('查询成功！');
                res.send(result);
            }
        })

        })
      }),

      app.post('/uploadProduct', function (req, res) {
        let pro = {};
        let form = new multiparty.Form();
        form.uploadDir = './static/back/upload';
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log(err);
            }
            console.log('fields =', files.pic);
            pro = {
              // 城市
              city: fields.city[0],
              // 房屋标题
              title : fields.title[0],
              // 地址
              address : fields.address[0],
              // 线路
              line: fields.line[0],
              // 区域
              area: fields.area[0],
              // 车站
              station: fields.station[0],
              // 描述
              desc : fields.desc[0],
              // 关键字
              hotkey: fields.hotkey || [],
              // 性别筛选
              sex: fields.sex[0] || '',
              // 房源类型
              types: fields.types[0] || '',
              // 租金
              rentPrice : fields.rentPrice[0],
              // 卧室数量
              bedroom: fields.bedroom[0],
              // 房间数量
              livingroom: fields.livingroom[0],
              // 卫生间
              bathroom: fields.bathroom[0]
            }
      
            if(files.pic) {
               let picAddr = []
              files.pic.forEach((item) =>{
               picAddr.push(item.path)

              })
             pro.picAddr = picAddr
            }
 
    
                console.log('pro =',pro);
                
            if(pro.title) {
    
                db.insertOne('product',pro,function(err,data){
                    let result = data;
                    console.log(result);
                })
            
                res.redirect('/back/product.html');  
            }
    
    
       })
        
        
    })
  // 根据id删除某一条数据
app.get('/delProduct', function(req, res){
    
  db.deleteOne('product', {_id:ObjectId(req.query.id)}, function(err, data){
      let result = data;
      if(result) {
          res.send({"success":"400"});
      }
  })

})
    }
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})





module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
