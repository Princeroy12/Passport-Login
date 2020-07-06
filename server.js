const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app=express()

app.set("view engine", "hbs")
app.set('views',__dirname+'/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/', require('./routes/root'))

app.listen(1976,()=> console.log("server is hosted at http://localhost:1976"))