const app = require('./app.js')

const PORT = process.env.PORT || 6000;



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}.`);
});


