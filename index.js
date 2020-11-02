
const  static = require("express");
const express=require("express");
const Path= require("path"); 
const app=express();
var router=express.router();
app.use(bodyParser.urlencoder({extended:false}));
const userModule=require('../module');
app.use(express.static('../css'));

app.use(express.static('../fonts'));

app.use(express.static('../img'));

app.use(express.static('../js'));


const staticPath=path.join(__dirname,"../project/index.html");
//middleware

app.use(express.static(path));

 
app.use("/submit", adminRoutes);
app.use(storeRoutes);

router.get('./',function(req,res)
{
    res.render('index',{title:'hotel'});
})

//here the login data
router.post('/submit',function(req,res)
{
   
    var email=req.body.email;
    var password=req.body.password;
   var userDetails=new userModule({
    password=password,
       email:email
   } );
});

app.listen(5000,()=>
{
    console.log("connect");
});