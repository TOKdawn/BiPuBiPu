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

## User Module

### Register

注册接口,成功返回用户信息

#### HTTP Request

`POST /api/register`

#### 请求实例

```
{
  "username": "foo",
  "email": "12345678@qq.com",
  "password": "bar",
  "password2": "bar",
  "captcha": "1234"
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
### Verify User
验证用户邮箱
#### HTTP Request

`GET /api/verify`

#### 请求实例

```
/api/verify?code=b7300fcdf45d4848894e046b96bfbcd8
```
#### 返回实例

 ```
200
{
  "sucess": "true",
  "message": "",
  "data": {}
}

400

{
  "sucess": "false",
  "message": "验证码已失效",
  "data": {}
}
 ```
 
### Send Verify Email
验证用户邮箱
#### HTTP Request

`GET /api/verify`

#### 请求实例

```
/api/verify?code=b7300fcdf45d4848894e046b96bfbcd8
```
#### 返回实例

 ```
200
{
  "sucess": "true",
  "message": "",
  "data": {}
}

400

{
  "sucess": "false",
  "message": "验证码已失效",
  "data": {}
}
 ```

