const PORT = process.env.PORT || 6000;
const localhost = process.env.LOCALHOST || 'http://localhost';

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${localhost}/${PORT}.`);
})