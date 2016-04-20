
var express = require('express');
var router = express.Router();
//index
router.get('/',function(req,res,next){
  res.render('index', { title: 'index' });
})
//login页面
router.get('/login',function(req,res,next){
  res.render('login', { title: 'login' });
})
//登陆成功后
router.get('/home',function(req,res,next){
  var user={
    username:'admin'
  }
  res.render('home', { title: 'Homess',user:'admin'});
})

//执行登陆
router.post('/doLogin',function(req,res,next){
  var user={
    username:'admin',
    password:'admin'
  }
  if(req.body.username===user.username && req.body.password===user.password){
    return res.redirect('/home');
  }else{
    res.error='用户名密码输入错误！';
    return res.redirect('/login')
  }
})
//退出登陆
router.get('/logout',function(req ,res){
  return res.redirect('/');
})

module.exports = router;

/*
exports.index = function(req, res){
  res.render('index', { title: 'Index' });
};
exports.login = function(req, res){
  res.render('login', { title: '用户登陆'});
};
exports.doLogin = function(req, res){
  var user={
    username:'admin',
    password:'admin'
  }
  if(req.body.username===user.username && req.body.password===user.password){
   // req.session.user=user;
    return res.redirect('/home');
  } else {
    req.session.error='用户名或密码不正确';
    return res.redirect('/login');
  }
};
exports.logout = function(req, res){
  //req.session.user=nulll;
  res.redirect('/');
};
exports.home = function(req, res){
  var user={
    username:'admin',
    password:'admin'
  }
  res.render('home', { title: 'Home',user: user});
};
*/