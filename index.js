import express from "express"
import 'dotenv/config'
const app = express()
// const port = 3000;
const objData = {
    "name": "John",
    "address":"Basera Colony, near HP gas agency,Darbhanga, Bihar",
    "email": "hv@123.com"
}
const port = process.env.PORT;
app.get('/',(req,res) =>{
    res.send('Hello World')
})
app.get('/twitter',(req,res) =>{
    res.send('Twitter id is - noob_coder')
})
app.get('/user',(req,res) =>{
    res.send(objData);
})
app.listen(port,(req,res) =>{
    console.log(`Server is running on port ${port}`)
})