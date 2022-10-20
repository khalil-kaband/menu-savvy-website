import React, { useState,useEffect } from "react"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";
import Input from "./input/input";
const Registration=()=>{
    
   const initialValues={email:"",password:"",username:"",confirmpassword:"",companyname:""}
   const [fromvalues,setfromvalues]=useState(initialValues)
   const [fromerrors,setfromerrors]=useState({})
   const [issubmit,setissubmit]=useState(false)
   const move=useNavigate('') 
   const handlecompanyname=(e)=>{
      setfromvalues({...fromvalues,companyname:e.target.value})
   }
   const handleemail=(e)=>{
    setfromvalues({...fromvalues,email:e.target.value})
 }
 const handleusername=(e)=>{
  setfromvalues({...fromvalues,username:e.target.value})
}
const handlepassword=(e)=>{
  setfromvalues({...fromvalues,password:e.target.value})
}
const handleconfirmpassword=(e)=>{
  setfromvalues({...fromvalues,confirmpassword:e.target.value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  setfromerrors(validate(fromvalues))
  setissubmit(true)
  }

  useEffect(()=>{
    console.log(fromerrors)
   if (Object.keys(fromerrors).length===0 && issubmit){
   console.log(fromvalues)}
  },[fromerrors])




   function registration(){
    let item={fromvalues}
    let result=  fetch("https://ali.bakri.me/register",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    }).then(()=>{
      result= result.json();
      move('/MenuSavvy-website')
    })

  
  }


 const validate=(values)=>{
     const error={}
     if(!values.email)
     {error.email="email is required"}
     if(!values.password)
     {error.password="password is required"}
     if(!values.companyname)
     {error.companyname="companyname is required"}
     if(!values.confirmpassword)
     {error.confirmpassword="confirmpassword is required"}
     if(!values.username)
     {error.username="username is required"}
     else if(values.password.length<4)
     {error.password="password most be more than 4 charcters"}
     else if(values.password.length>10)
     {error.password="password most be less than 10 charcters"}
     else if(values.password!=values.confirmpassword)
     {error.confirmpassword="confirm isn't correct"}
     return error

 }  
  

    return(
        <section>
             <form onSubmit={handlesubmit}>
              <img src="https://menusavvy.com/channel/menusavvy/img/patterns/pattern-food.png" className="imgregis"></img>
              <div className="container px-5 py-5 d-flex col-lg-12">
             
              <div className="div1regis col-md-6">
              
                 <h1 className="h1regis "><i className="fa fa-store"></i>Venue registration</h1>
                 <h5 className="h5regis ">Register your venue today to start offering zero touch menus with MenuSavvy.<a href="#" className="aregis"> Contact us if you have questions.</a></h5>
              </div>
             <div className="div2regis  col-md-6  ms-5 ">
             <Input title="company" type="text" handle={handlecompanyname} value={fromvalues.companyname} errorvalue={fromerrors.companyname }className="textregis form-control "/>
             <Input title="username" type="text" handle={handleusername} value={fromvalues.username} errorvalue={fromerrors.username}className="textregis form-control"/>
           <div className="d-flex">
           <Input title="email" type="email" handle={handleemail} value={fromvalues.email} errorvalue={fromerrors.email}className=" textregis2 form-control" required/>
           </div>
           <div className="d-flex">
           <Input title="password" type="password" handle={handlepassword} value={fromvalues.password} errorvalue={fromerrors.password}className="textregis3 form-control"/>
           <div className=" ms-4">
           <Input title="confirmpassword" type="password" handle={handleconfirmpassword} value={fromvalues.confirmpassword} errorvalue={fromerrors.confirmpassword}className="textregis3 form-control"/>
           </div>
           </div>
           <div className="d-flex">
           <input type="checkbox"></input>
           <h6 className="mt-2 ms-1">I have read and agree to <a href="#"className="a2regis">Terms</a> and <a href="#" className="a2regis">Privacy Policy</a></h6>
           </div>
          <button className="btn abuttonregis" onClick={registration}><a >REGISTER<i className="fa fa-arrow-right ms-2"></i></a></button>
             </div>
           

              </div>
              </form>
            
              <Footer/>
        </section>
    )
}

export default Registration