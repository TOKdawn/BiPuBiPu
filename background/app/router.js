'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.post('/user/register',controller.user.register);//注册
    router.post('/user/login',controller.user.login);//登录
    router.post('/user/remakespassword',controller.user.remakespassword);// 重制密码
    router.post('/user/changepassword',controller.user.changepassword); // 更改密码
    router.post('/user/changephone',controller.user.changephone); // 更改手机
    router.get('/user', controller.user.getMyInfo);//获取自己信息
    router.get('/user/logout', controller.user.logout);//注销
    router.get('/user/collection/', controller.user.getMyCollection); //获取自己收藏
    router.get('/user/:uid', controller.user.getInfo);//获取其他用户信息
    router.get('/user/collection/:uid', controller.user.getUserCollection); //拉取用户收藏
    router.post('/user/collection', controller.user.addCollectionVolume); //收藏谱子
    router.delete('/user/collection/:vid', controller.user.deleteCollectionVolume); //删除谱子
    router.get('/system/catcha',controller.system.getCatcha);// 获取验证码
    router.post('/system/sms',controller.system.getSMS);// 发送短信验证码
    router.get('/system/search/:keyword',controller.system.searchWord);// 查询
    router.get('/system/checkuser',controller.system.checkUserInfo) //查询用户登录状态
    router.get('/tag/alltag',controller.tag.allTag); //拉取tag标签
    router.post('/tag/uploadtag',controller.tag.upLoadTag); //创建标签
    router.get('/volume', controller.volume.getVolumeList); //拉取歌单
    router.post('/volume', controller.volume.createVolume); // 创建
    router.delete('/volume/:vid', controller.volume.deleteVolume); //删除谱册
    router.put('/volume/:vid', controller.volume.editVolume); // 编辑谱册
    router.get('/volume/:vid', controller.volume.getVolumeInfo); // 获取谱册信息
    router.get('/volume/:vid/score', controller.volume.getVolumeScore); // 拉取谱册内谱子
    router.post('/volume/:vid/score', controller.volume.addVolumeScore); //增加谱子到谱册
    router.delete('/volume/:vid/score/:sid', controller.volume.deleteVolumeScore); //删除谱子
    router.post('/upload', controller.multipart.upload); //上传图像
    router.post('/score/upload',controller.score.upload) //上传曲谱
    // router.post('/uploadScore', controller.multipart.uploadScore); //拥有者
    router.get('/volume/:vid/comment', controller.volume.getComment);//拉取评论
    router.post('/volume/:vid/comment', controller.volume.addComment); //添加评论
    router.delete('/comment/:cid', controller.volume.delectComment); //拥删评论
    router.delete('/subcomment/:cid', controller.volume.delectSubcomment); //添加子评论 
    // router.get('/login',controller.user.login);
    // router.get("/success",controller.user.success);
    // app.passport.mount('github', {
    //     successRedirect: '/'
    // });
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
};