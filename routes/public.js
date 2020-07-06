const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("VISIBLE TO ALL")
})

exports= module.exports = route