const express = require('express')
const hbs = require('hbs')
const app = express()
const path = require('path')
const port = process.env.PORT || 8000




const staticPath = path.join(__dirname , 'public')
const templatePath = path.join(__dirname , 'templates/views')
const partialsPath = path.join(__dirname , 'templates/partials')




hbs.registerPartials(partialsPath);


app.set('view engine' , 'hbs')
app.set('views' , templatePath)

app.use(express.static(staticPath))




app.get('/' , (req,res) => {

  res.render('index')
} )






// ROUTING 

app.get('/about' , (req,res) => {

  res.render('about')
} )


app.get('/weather' , (req,res) => {

  res.render('weather')
} )


app.get('*' , (req,res) => {

  res.render('404error')
} )


app.listen(port , ()=>{
  console.log('listening to the port at 8000');
})

