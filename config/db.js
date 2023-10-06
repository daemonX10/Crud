const mongoose =require('mongoose')



const connectToDB= async () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to DB :${conn.connection.host}`);
    })

    .catch ((err)=>{
        console.log(err.message);
    })
}

module.exports=connectToDB