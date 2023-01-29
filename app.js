import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/",(req,res)=>{
  try{
      res.render("home");
  }catch(err){
    res.send('some error occurred!');
    console.log(err);
  }
})


let port = process.env.PORT||8000;
app.listen(port, function() {
  console.log("<---------------Server started on PORT:"+port+"--------------->");
});
