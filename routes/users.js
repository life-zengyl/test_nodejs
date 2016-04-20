var express = require('express');
var router = express.Router();
var Douser = require('../modules/Douser')

/* GET users listing. */
router.get('/', function(req, res, next) {

/*    Douser.selectAll(req, res, function(data){
        console.log(data);
       res.render('user/userlist',{'userlist':data[0]})
    });*/
    Douser.selectAll(req, res,next)
    es.render('user/userlist',{'userlist':res[0]})

});

module.exports = router;
