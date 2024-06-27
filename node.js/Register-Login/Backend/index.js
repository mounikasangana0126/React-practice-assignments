const express= require('express');
const app= express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const middleware=require('./middleware');
const cors=require('cors')

const Registeruser=require('./models/register')

mongoose.connect('mongodb://localhost:27017/login',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(
    ()=>console.log("connection established")
)
 
app.use(express.json());
app.use(cors({origin:"*"}))
app.post('/register',async (req,res)=>{
    try{
        const {username,email,password,confirmpassword}=req.body;
        let exist=await Registeruser.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.status(400).send('Passwords are not matching')
        }
        let newUser=new Registeruser({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save();
        return res.status(200).send('Registered successfully')

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Internal server error')

    }
})


app.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;
        let exist=await Registeruser.findOne({email})
        if(!exist){
            return res.status(400).send('User Not Found')
        }
        if(exist.password !== password){
            return res.status(400).send('Invalid credentials')
        }
        let payload={
            user:{
                id:exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token)=>{
            if(err) throw err;
            return res.json({token})
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Internal server error')

    }
})


app.get('/myprofile',middleware,async(req,res)=>{
    try{
        let exist=await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('user not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server error')
    }
})

app.listen(3000,()=>{
    console.log("Server started running");
})