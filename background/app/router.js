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
    router.post('/user/changepassword',controller.user.changepassword); // 更改=密码
    router.post('/user/changephone',controller.user.changephone); // 更改手机
    router.get('/user', controller.user.getMyInfo);//获取自己信息
    router.get('/user/logout', controller.user.logout);//注销
    router.get('/user/collection/', controller.user.getMyCollection); //获取自己收藏
    router.get('/user/:uid', controller.user.getInfo);//获取其他用户信息
    router.get('/user/collection/:uid', controller.user.getUserCollection); //拉取用户收藏
    router.post('/user/collection', controller.user.addCollectionVolume); //收藏谱子
    router.delete('/user/collection/:vid', controller.user.deleteCollectionVolume); //删除谱子
    // router.get('/user/checkemail/:email',controller.user.checkEmail);  //检查邮箱是否复用
    //router.put('/user/userinfo',controller.user.updateUserInfo);
    //router.put('/user/password',controller.user.updatePassword);// 更改密码
    //router.post('/user/registered', controller.user.registered);// 注册
    router.get('/system/catcha/:type',controller.system.getCatcha);// 获取验证码
    router.get('/system/search/:keyword',controller.system.searchWord);// 查询
    router.get('/tag/alltag',controller.tag.allTag); //拉取tag标签
    router.post('/tag/uploadtag',controller.tag.upLoadTag); //创建标签
    router.get('/volume', controller.volume.getVolumeList); //拉取歌单
    router.post('/volume', controller.volume.createVolume); // 创建
    router.delete('/volume/:vid', controller.volume.deleteVolume); //删除谱册
    router.put('/volume/:vid', controller.volume.editVolume); // 编辑谱册
    router.get('/volume/:vid', controller.volume.getVolumeInfo); // 获取谱册信息
    router.get('/volume/:vid/score', controller.volume.getVolumeScore); // 
    router.post('/volume/:vid/score', controller.volume.addVolumeScore); //拥有者
    router.delete('/volume/:vid/score/:sid', controller.volume.deleteVolumeScore); //拥有者
    router.post('/upload', controller.multipart.upload); //拥有者
    // router.post('/uploadScore', controller.multipart.uploadScore); //拥有者
    router.get('/volume/:vid/comment', controller.volume.getComment);
    router.post('/volume/:vid/comment', controller.volume.addComment); //用户
    router.delete('/comment/:cid', controller.volume.delectComment); //拥有者
    router.delete('/subcomment/:cid', controller.volume.delectSubcomment); //拥有者 
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