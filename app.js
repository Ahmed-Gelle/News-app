const express = require('express');

const app = express();
const port = 5000 ;

const bodyParser = require('body-parser')
// const cartRouter = require('./src/routes/cart')

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//tempalting engine 

app.set('views','./src/views/partials')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))

// routes

const newsRoutes = require('./src/routes/news')
// app.use('/cart', cartRouter) 
app.use('/',newsRoutes)
app.use('/article',newsRoutes)




//listen on oprt 5000
app.listen(port,()=>{
console.log(`Listening on port ${port}`)
})