const http = require('express')()
const mongoose = require('mongoose')
const cors = require('cors');
const port =  8000
const password = 'WAbF3wEhqHA4YjGA'
const uri = `mongodb+srv://aws-user:${password}@aws-test-cluster.ungtg.mongodb.net/mern`
mongoose.connect(uri)
app.use(cors());
app.use(express.json());

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
    var model = mongoose.model('USERS',Schema)

    const user = new model({name:'Mohasin',phone:123490})
    await user.save()

http.get('/',async (req,res)=>{
        await model.find().then(resp=>{
         res.json(resp)
         })

     })
http.get('/fetch',async(req,res)=>{
    await model.find().then(resp=>{
        res.json(resp)
        })
})
}

connection()

