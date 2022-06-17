const bcrypt= require('bcrypt')
const db= require('../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')



//create main model
const User = db.users
const Seller = db.sellers
const Advertisment =db.advertisments

//create Seller

const addSeller = async (req,res) =>{

    try { 
    
    
          let info ={
        
         name:req.body.name,
         email:req.body.email,
         user_id:req.user.Uid,
         gender:req.body.gender,
         location:req.body.location,
         phonenum:req.body.phonenum,
         user_id: req.user.Uid 
            
     }

     const seller = await Seller.create(info)
     res.status(200).send(seller)
 } catch (e) {
     res.status(500).send(e)
     
 }

  
     
   
    
   
}

//create User  

const addUser = async (req,res) =>{

  const Users = await User.findOne({where: { username:req.body.username }});

if(Users==null){

 try { 
     const hashedPassword = await bcrypt.hash(req.body.password,10)
 
       let info ={
      username:req.body.username,
      password:hashedPassword,
     
         
  }

  const user = await User.create(info)
  res.status(200).send(user)
} catch (e) {
  res.status(500).send(e)
  
}

}
else{
 res.status(500).send('User already exist')
}
  

 

}

//login user 

const loginuser = async (req,res) =>{

  const user = await User.findOne({ where: { username:req.body.username } });
   if(user ==null){
       return res.status(400).send('cannot find user')
   }

   try {
      
    if (await  bcrypt.compare(req.body.password,user.password)){
        
       const Uid =user.id
        const token =jwt.sign({Uid},process.env.ACCESS_TOKEN);
         res.json({ accessToken: token})
      
       
        
    } else{
      res.send('not allowed')
    }
  } catch(e){
      res.status(500).send(e)
  }
      
 
}

//  update seller

const updateSeller = async (req,res) =>{

  try{
   const id =req.user.Uid;
   const seller = await Seller.update(req.body, { where:{ id:id}})
   res.status(200).send('seller updated successfully')
  }
   
  catch(error){
   res.status(500).send(error.message);
  }

   
   
 }

module.exports ={
  addSeller,
  addUser,
  loginuser,
  updateSeller
}

