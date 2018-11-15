### TODO
***
1. 用imagemin-webpack-plugin 压缩图片
2. 用webpack-spritesmith 合并雪碧图

### 项目技术架构
***
*  vue-cli
*  vue
*  vue-resource
*  vue-router
*  vuex
*  font-awesome
*  element-ui
*  scss
*  webpack

### 安装
***
1. 安装[Node.js](https://nodejs.org/)
2. 安装cnpm
```
  npm install -g cnpm --registry=https://registry.npm.taobao.org
```
3. 安装依赖包
```
    注意线上环境,设置环境变量NODE_ENV=production,这样devDependencies的包就不会安装了
  cnpm install
```
4.安装pm2
```
cnpm install -g pm2
```
### 开发环境运行项目步骤
***
1. 修改后端服务器地址,到config目录下,修改index.js文件中, var proxyTarget = 'http://192.168.1.199:8080'
2. 切换到当前目录
3. npm run dev

### 发布前本地预览
> 目的是为了查看发布的压缩代码是否能正常运行
1. 修改config/index.js文件中 build.assetsPublicPath为本地跟目录,即"/";这样静态资源引用路径则为本地相对路径
2. 运行npm run build,构建静态代码
3. 运行npm run preview,注意后端服务器地址修改在config/index.js文件中

### 发布到线上
#### 一 cdn环境
1. 修改config/index.js文件中 build.assetsPublicPath为cdn绝对路径;
2. 运行npm run build,构建静态代码
3. 发布构建好的静态代码到cdn
4. npm run preview 预览一下.看是否能正常运行.
5. 代码提交到git
#### 二 非cdn环境
1. 修改config/index.js文件中 build.assetsPublicPath为本地跟目录,即"/";这样静态资源引用路径则为本地相对路径
2. 运行npm run build,构建静态代码
3. npm run preview 预览一下.看是否能正常运行.
4. 代码提交到git

### 线上运行(服务器运维人员只需关注这一步) 
####nodejs作为接入层以及反向代理服务器
1. 修改后端服务器地址,到config目录下,index.js文件中, var proxyTarget = 'http://192.168.1.199:8080'
####nginx作为接入层以及反向代理服务器
1. dist目录下,html文件作为静态页面文件
2. static 为静态资源文件,注意html中引用路径;如果html中引用的是cdn文件路径,可忽略
3. nginx配置方向代理,请参考config/index.js中配置


###todo 
npm run build 的时候,提供交互式命令行,选择assetsPublicPath
