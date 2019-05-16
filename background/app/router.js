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
    router.get('/user/collectionList/:uid', controller.user.getMyCollection); //获取自己收藏谱册 page  
    router.get('/user/likeList/:uid', controller.user.getMyLike); //获取自己喜爱乐谱 page 
    router.get('/user/starList/:uid', controller.user.getMyStar); //获取自己关注 page 
    router.get('/user/uploadList/:uid', controller.user.getMyUpload); //获取自己上传 page 
    router.get('/user/createList/:uid',controller.user.getMyCreate) //获取自己创建谱册 page
    router.get('/user/:uid', controller.user.getInfo);//获取其他用户信息
    router.get('/user/collection/:uid', controller.user.getUserCollection); //拉取用户收藏谱册
    router.get('/user/updateNum/:uid',controller.user.getUpdateNum); //拉取用户上传的谱子数
    router.get('/user/createNum/:uid',controller.user.getCreateNum); //拉取用户创建的谱册数 uid == own 为查询自己
    router.get('/user/focusNum/:uid',controller.user.getFocusNum); //拉取用户上传的谱子数
    router.post('/user/updateInfo',controller.user.updateInfo); //更新用户信息
    router.post('/user/thirdParty/:type',controller.user.thirdParty); //更新用户第三方数据
    router.get('/volumeCollection/:vid', controller.score.addCollectionVolume); //收藏谱册
    router.delete('/volumeCollection/:vid', controller.score.deleteCollectionVolume); //删除收藏谱册
    router.post('/user/likescore/', controller.user.addLikeScore); //喜欢一个乐谱
    router.delete('/user/likescore/:sid', controller.user.deleteLikeScore); //取消喜欢一个乐谱
    router.post('/user/staruser', controller.user.addStarUser); //关注一个用户
    router.delete('/user/staruser/:uid', controller.user.deleteStarUser); //取消关注一个用户
    router.get('/score/allscore',controller.score.getAllScore); //拉取所有乐谱
    router.get('/system/catcha',controller.system.getCatcha);// 获取验证码
    router.post('/system/sms',controller.system.getSMS);// 发送短信验证码
    router.post('/system/searchAll',controller.system.searchAll)
    router.post('/system/searchUser',controller.system.searchUser);// 查询用户
    router.post('/system/searchScore',controller.system.searchScore);// 查询乐谱
    router.post('/system/searchVolume',controller.system.searchVolume);// 查询谱册 keyword
    router.get('/system/checkuser',controller.system.checkUserInfo) //查询用户登录状态
    // router.get('/tag/alltag',controller.tag.allTag); //拉取tag标签
    // router.post('/tag/uploadtag',controller.tag.upLoadTag); //创建标签
    router.get('/volume/volumeList', controller.volume.getVolumeList); //拉取歌单
    router.post('/volume/createVolume', controller.volume.createVolume); // 创建谱册
    router.delete('/volume/:vid', controller.volume.deleteVolume); //删除谱册
    router.put('/volume/:vid', controller.volume.editVolume); // 编辑谱册
    router.get('/volume/:vid', controller.volume.getVolumeInfo); // 获取谱册信息
    router.get('/getVolume/score/:vid', controller.volume.getVolumeScore); // 拉取谱册内谱子
    router.post('/postVolume/score/:vid', controller.volume.addVolumeScore); //增加谱子到谱册
    router.post('/deleteVolume/score/:vid', controller.volume.deleteVolumeScore); //删除谱子
    router.get('/volume/author/:vid',controller.volume.getVolumeAuthor ); //获取谱册作者
    router.get('/socre/author/:sid',controller.score.getScoreAuthor ); //获取谱册作者
    router.get('/volume/collector/:vid',controller.volume.getVolumeCollector ); //获取谱册作者
    router.get('/socre/collector/:sid',controller.score.getScoreCollector ); //获取谱册作者
    // router.get('/scoreType/:sid',controller.score.getScoreType);
    // router.get('/volumeType/:vid',controller.volume.getVolumeType);
    router.post('/upload', controller.multipart.upload); //上传图像
    router.post('/score/upload',controller.score.upload) //上传曲谱
    router.get('/score/getscore/:sid',controller.score.getScore) // 获取乐谱
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