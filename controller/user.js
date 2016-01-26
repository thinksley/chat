var models=require('../models');

exports.reg=function(req,res){
    var user=req.body;
    models.User.findOne({username:user.username},function(err,user){
        if(user){
            res.send({code:0,msg:'用户存在'})
        }else{
            new models.User(user).save(function(err,user){
                res.send({code:1,msg:'注册成功'});
            })
        }
    })

}


exports.login = function(req,res){
    var user = req.body;
    models.User.findOne(user,function(err,user){
        if(err){
            return res.send({code:0,msg:'登陆失败'});
        }else{
            if(user){
                req.session.user = user;
                return res.send({code:1,user:user});
            }else{
                return res.send({code:0,msg:'登陆失败'});
            }
        }
    });
}
