const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/private'
 }))
// route.post('/login',(req,res)=> {
//     Users.findOne({
//         where:{
//             username:req.body.username
//         }
//     }).then((user)=>{
//         if(!user){
//             return res.send("No Such User")             //copied to strateegies in passport.js
//         }
//         if(user.password!==req.body.password){
//             return res.send("Wrong Password")
//         }
//         return res.send("HELLO"+user.firstName)
//     })
// })

route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName 
    }).then((createdUser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route