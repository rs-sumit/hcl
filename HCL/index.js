const mongoose=require("mongoose");
const express=require("express");
const path=require("path");
const app=express();
const Item = require("./model/item.js");
const User = require("./model/user.js");
const methodOverride=require("method-override");
const expressError=require("./expressError.js");


//mongoose connection 
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/HCL");
}


main()
.then(()=>{
    console.log("mongodb is connected!");
})
.catch((err)=>{
    console.log(err);
});


//viewengine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

//middleware
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));



//server setup
const port = 8080;
app.listen(port, () => {
  console.log(`server is connected at port ${port}`);
});


//************route setup*************

//asynchronous error handling fxn
function asyncwrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  };
}

//home

app.get("/signup",asyncwrap(async(req,res)=>{
  res.render("signup");
}));


app.get("/home",asyncwrap(async(req,res)=>{
  const uniqueCategories = await Item.distinct("category");
  res.render("home",{uniqueCategories});
}));

//details

app.get(
  "/details",
  asyncwrap(async (req, res) => {
    const { category } = req.query; 
    if (!category) {
      return res.redirect("/home");
    }
    const allitems = await Item.find({ category: category });
    res.render("details", { allitems, category });
  })
);

//cart
app.get("/cart",asyncwrap(async(req,res)=>{
  // let allchats=await Chat.find();
  res.render("showCart");
}));

//login page
app.get("/login",asyncwrap(async(req,res)=>{
  // let allchats=await Chat.find();
  res.render("login");
}));


// login (POST) - verify user and login
app.post("/login", asyncwrap(async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username, password });

  if (!existingUser) {
    return res.send(`
      <script>
        alert("Invalid username or password");
        window.location.href = "/login";
      </script>
    `);
  }
  res.redirect("/home");
}));



//signup
app.post("/signup", asyncwrap(async (req, res) => {
  const { username, email, mobile, password } = req.body;

  const newUser = new User({
    username,
    email,
    mobile,
    password
  });
  await newUser.save();
  res.redirect("/login");
}));





//address
app.get("/address",asyncwrap(async(req,res)=>{
  // let allchats=await Chat.find();
  res.render("address");
}));

// //add chats
// app.get("/chats/add",(req, res) => {
//   res.render("addChat");
// });


// app.post("/chats/add",asyncwrap(async(req,res)=>{
//   let newChat=req.body;
//   newChat["created_at"]=new Date();
//   newChat=new Chat(newChat);
//   newChat = new Chat(newChat);
//   await newChat.save();
//   res.redirect("/Chats");
// }));


// //details of chat
// app.get("/chats/:id",asyncwrap(async(req,res)=>{
//   let { id } = req.params;
//   let chat=await Chat.findById(id);
//   if(!chat){
//     throw new expressError(403,"CHAT IS NOT FOUND!");
//   }
//   res.render("chatDetails",{chat});
// }));


// //edit page
// app.patch("/chats/:id/edit",asyncwrap(async(req,res)=>{
//   let {id}=req.params;
//   let {newMsg}=req.body;
//   await Chat.updateOne({_id:id},{msg:newMsg,updated_at:new Date()});
//   res.redirect(`/chats`);
// })); 


// //delete chat
// app.delete("/chats/:id/delete",asyncwrap(async(req,res)=>{
//   let {id}=req.params;
//   await Chat.deleteOne({_id:id});
//   res.redirect("/chats");
// }));


// ERROR HANDLING
// app.get("/err",(req,res)=>{
//   throw new expressError(200, "mannual created error");
//   console.log("---------------------------------------");
//   // abcd=abcd;
// });

// app.use((err,req,res,next)=>{
//   let {status=500,message="SOME THING IS GOING WRONG!"}=err;
//   console.log(status,message);
//   res.status(status).send(message);
//   // throw new expressError(403, "mannual created error");
// });

// // app.use((req,res,next)=>{
// //   console.log("-----------error2-----------");
// //   next();
// // })

// // app.use((err,req, res, next) => {
// //   console.log("-----------error3-----------");
// //   next(err);
// // });
