# bipu API

## Role
 角色权限
 
| 角色        | 权限    |  查看曲谱  | 收藏曲谱 | 上传曲谱  | 创建谱册 | 收藏谱册 | 审核曲谱 | 
| --------   | ------: | :------: | :----:  |  :----:   |:----: | :----:  | :----: |         
| 游客        | 0       |   √      |         |          |        |         |        |
| 未验证用户   | 0       |   √      |         |          |        |         |        |
| 注册用户     | 10      |   √      |   √     |          |   √    |    √    |        |
| 创作者      | 20      |   √      |   √     |     √     |   √    |    √    |        |
| 管理员      | 30      |   √      |   √     |     √     |   √    |    √    |    √   |

## system Module

### getCatcha
获取验证码,默认type为1
### HTTP Request
`GET /system/catcha`
#### 返回实例
```
{
    "status": 0,
    "message": "success",
    "data": "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0,0,100,40'><path d='M1 3 C63 34,68 34,81 25' stroke='#e480b2' fill='none'/><path fill='#ef8e8e' d='M47.69 32.92L47.70 32.92L47.68 32.91Q47.03 32.83 46.42 32.86L46.56 33.01L46.45 32.90Q45.88 33.04 45.26 33.04L45.26 33.03L45.19 32.96Q45.52 29.83 45.52 26.77L45.71 26.95L45.71 26.96Q44.0135.72L72.68 35.77Q73.20 35.78 75.75 35.84L75.67 35.76L75.63 35.73Q77.36 35.96 78.82 35.38L78.67 35.23L78.83 35.39Q79.70 34.36 79.53 32.80L79.67 32.93L79.58 32.84Q79.45 31.62 79.17 30.06L79.30 30.18L79.17 30.06Q78.50 26.02 76.77 24.56L76.82 24.61L76.73 24.35L76.56 24.15L76.65 24.24Q78.27 29.73L63.79 29.58L63.97 29.76Q63.69 30.59 63.69 31.13L63.74 31.18L63.83 31.27Q63.94 33.14 65.16 33.82L64.98 33.65L64.97 33.64Q66.47 35.84 70.68 35.67L70.66 35.65L70.60 35.59Q71.26 35.57 72.62 35.70Z'/></svg>"
}
```
### songDebug

曲谱报误

#### HTTP Request

`POST /user/songdebug`

#### 请求实例

```
{
  sid: 123,
  context: "特大的"
}
```
#### 返回实例

 ```
 {
 	"sucess": "true",
 	"message": "",
	"data":""
}
 ```


### Search

查询信息

#### HTTP Request

`POST /system/search`

#### 请求实例

```
{
	"type": 1, //1谱子,2谱册,3用户,4标签
 	"context": "特大的"
}
```
#### 返回实例

 ```
 {
 	"sucess": "true",
 	"message": "",
	"data":""
}
 ```
 

## User Module

### Register

注册接口,成功返回用户信息

#### HTTP Request

`POST /user/register`

#### 请求实例

```
{
  
  "phone": "18746442232",
  "password": "bar",
  "sms": "1234"
}
```
#### 返回实例

 ```
 {
 	"sucess": "true",
 	"message": "",
	"data":{
	  "id": "59ecc6efe549a24e4947b42f",
	  "bid": 0,
	  "username": "foo",
	  "nickname": "foo",
	  "avatar": "",
	  "email": "123456@qq.com",
	  "role": 0
	}
}
 ```
 
 
### Check phone
检测用户名重复
#### HTTP Request

`post /user/checkphone`

#### 请求实例

```
{
	"phone":"18746442232"
}
```
#### 返回实例

 ```
200
{
  "sucess": "true",
  "message": "此手机未被使用",
  "data": {}
}

400

{
  "sucess": "false",
  "message": "此手机已被使用",
  "data": {}
}
 ```
 
### Login
用户登录
#### HTTP Request

`POST /user/login`

#### 请求实例

```
{
	"phone": "其实就是用户名",
	"password": "用户密码",
	"captcha": "验证码"
}
```
#### 返回实例

```
{
    "message": "成功登录",
    "data": {
        "id": 1,
        "email": "187.@123.com",
        "avatar": "http://bipu.oss-cn-beijing.aliyuncs.com/egg-multipart-test/akari.jpg",
        "name": "text",
        "password": "202cb962ac59075b964b07152d234b70",
        "signature": "这个人很懒,啥也没写╮(╯_╰)╭",
        "role": 1,
        "created_at": "2018-12-29T06:19:26.336Z",
        "updated_at": "2018-12-29T06:19:26.336Z"
    }
}
```

## ScoreModule
### uploadTag
上传标签
#### HTTP Request
`POST /tag/uploadtag`
#### 请求实例

```
{
	type: 1,
	tag: "测试标签"
}
```
#### 返回实例
```
200
{
  "sucess": "true",
  "message": "请求成功",
  "data": {
  		type:1,
  		tag:"测试标签",
  		id:123
  }
}
400
{
  "message": "标签已经存在",
  "data": {}
}
```

### allTag
全部标签数据
#### HTTP Request
`GET /tag/alltag`

#### 返回实例
```
200
{
  "sucess": "true",
  "message": "请求成功",
  "data": [{
	type:1,
	tag:"测试标签",
	id:123
  }]
}
400
{
  "message": "错误",
  "data": {}
}
```


### searchTag
标签数据模糊搜索
#### HTTP Request
`POST /tag/keyword`
#### 请求实例

```
{
	keyword: "测试"
}
```
#### 返回实例
```
200
{
  "sucess": "true",
  "message": "请求成功",
  "data": [{
	type:1,
	tag:"测试标签",
	id:123
  }]
}
400
{
  "message": "无查询结果",
  "data": {}
}
```

### addTag
标签谱册关系建立
#### HTTP Request
`POST /tag/addTag`
#### 请求实例
```
{
	Tid:123,
	Sid:333
}
```
#### 返回实例
```
200 || 400

```

https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/Spectrum.png

https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/Transparent_Akkarin.jpg

https://bipu.oss-cn-beijing.aliyuncs.com/bipuText/score.jpg
