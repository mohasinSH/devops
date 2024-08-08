const http = require('express')()
const mongoose = require('mongoose')
const port =  8000
const password = 'WAbF3wEhqHA4YjGA'
const uri = `mongodb+srv://aws-user:${password}@aws-test-cluster.ungtg.mongodb.net/mern`
mongoose.connect(uri)
http.listen(port,()=>{
console.log(`the server is litsening to port ${port}`)
})
mongoose.connection.once('open',()=>{
    console.log('conneted to db')
})
async function connection(){
    const Schema = mongoose.Schema({
        name:String,
        phone:Number
    })
    const model = mongoose.model('USERS',Schema)

    const user =new  model({name:'Mohasin',phone:123490})
    await user.save()
}
connection().catch(err => console.log(err))