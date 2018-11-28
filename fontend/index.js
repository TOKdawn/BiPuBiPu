require('./build/check-versions')()
var config = require('./config')
var path = require('path')
var express = require('express')
var helmet = require('helmet')
var proxyMiddleware = require('http-proxy-middleware')
var port = process.env.PORT || config.build.port
var proxyTable = config.build.proxyTable

process.env.NODE_ENV = 'production'

var app = express()
var server = require('http').createServer(app)
var domain = require('domain')

app.use(helmet( //安全性的http头
    /*{
        noCache: true
    }*/
))

// 使用 domain 来捕获大部分异常
app.use(function (req, res, next) {
  var reqDomain = domain.create()
  reqDomain.on('error', function () {
    try {
      var killTimer = setTimeout(function () {
        process.exit(1)
      }, 30000)
      killTimer.unref()

      server.close()

      res.send(500)
    } catch (e) {
      console.log('error when exit', e.stack)
    }
  })

  reqDomain.run(next)
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(context, options))
})

app.use(require('connect-history-api-fallback')({
  index: '/dist/index.html'
}))
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
app.use(staticPath, express.static('./dist/static'))
app.use('/dist', express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
})

app.use(function (err, req, res, next) {
    // 带有四个参数的 middleware 专门用来处理异常
  res.render(500, err.stack)
})

// uncaughtException 避免程序崩溃
process.on('uncaughtException', function (err) {
  console.log(err)

  try {
    var killTimer = setTimeout(function () {
      process.exit(1)
    }, 30000)
    killTimer.unref()

    server.close()
  } catch (e) {
    console.log('error when exit', e.stack)
  }
})
