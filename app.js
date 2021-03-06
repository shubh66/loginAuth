const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
 async function mongo(){
    try {
    
        await mongoose.connect('mongodb+srv://penzyl:penzyl123@cluster0-j7uuv.mongodb.net/penzyl?retryWrites=true&w=majority',{useUnifiedTopology:true})
         console.log(`mongodb is connected`)
         
     } catch (error) {
         console.log(error)
     }
}
mongo()
app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.json())
app.use(cors())
app.use('/apis/v1/user',require('./router/user'))
const port = process.env.port || 3000

app.listen(port,()=>{
    console.log(port)
})