import express from "express";

let user = [
  { id: 1, name: "avinash", place: "clt", age: 24 },
  { id: 2, name: "leo", place: "rossario", age: 30 },
  { id: 3, name: "njr", place: "brazil", age: 29 },
];

const log = (req, res, next) => {
  const data = req.query.name;
  const userName =user.find((items)=>items.name == data)
  console.log(userName)
  if (userName) {
    res.send({message:"welcome",userName});
    return
  } else {
    res.send({message:"login"});
  }

  next();

};


const signUp = (req,res,next)=>{
    const userId =parseInt(req.params.id);
    const userInfo =user.find((items)=>{
        items.id === userId
    })
    if(userInfo){
        res.send({message:"Welcome to Our Website",userInfo})
        return
    }
    else{
        res.send({message:'Please Login'})
    }
    next()
}


export default log;
export {signUp}
