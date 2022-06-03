
   
const mongoose = require('mongoose')
require('dotenv').config()

const user = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

mongoose.connect(`mongodb+srv://${user}:${password}@apicluster.geygt.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})
.then(()=>{
    

    console.log('banco de dados on!')


})