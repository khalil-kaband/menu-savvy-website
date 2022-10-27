import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Forget from "./Forget";
import {Link,Routes,Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "./input/input";
const LogIn=()=>{
const initialValues={username:"",password:""}
const [fromvalues,setfromvalues]=useState(initialValues)
const [fromerrors,setfromerrors]=useState({})
const [issubmit,setissubmit]=useState(false)
const move=useNavigate('') 
const handlechangeusername=(e)=>{
  setfromvalues({...fromvalues,username:e.target.value})
}
const handlechangepassword=(e)=>{
  setfromvalues({...fromvalues,password:e.target.value})
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

useEffect(()=>{
  if(localStorage.getItem('user-info')){
    move('/menu-savvy-website')
    alert("the mission is complemated")
  }

})
 async function login(){
  let item={fromvalues}
    let result= await fetch("https://ali.bakri.me/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem('user-info',JSON.stringify(result))
    move('/menu-savvy-website')
  }






const validate=(values)=>{
  const error={}
  if(!values.username){
    error.username="username is requierd"
  }
  if(!values.password){
    error.password="password is requierd"
  }
  else if(values.password.length<4)
  {error.password="password most be more than 4 charcters"}
  else if(values.password.length>10)
  {error.password="password most be less than 10 charcters"}
  return error
}

    return(
        <section>
           <img src="https://menusavvy.com/channel/menusavvy/img/patterns/pattern-food.png" className="imglogin"></img>
          <div className="container col-lg-12 col-md-6 col-sm-3">
          <form onSubmit={handlesubmit}>
          <div className="align-items-center justify-content-center py-5 px-5 d-flex  ">
            <div className="div1login col-lg-6 col-md-3 ">
           <h1 className="h1login ">Log in</h1>
           <h5 className="h5login ">Log in to your MenuSavvy account to manage your venues and menus.<a href="#" className="alogin"> Contact us if you have questions.</a></h5>
           </div>
            <div className="div2login col-lg-6 col-md-3  ms-5 ">
          <Input title="username" type="text" handle={handlechangeusername} value={fromvalues.username} errorvalue={fromerrors.username} className="textlogin form-control"/>
          <Input title="password" type="password" handle={handlechangepassword} value={fromvalues.password} errorvalue={fromerrors.password} className="textlogin form-control"/>
           <div className="mt-4 abuttonmr">
           <button  className="btn text-light abuttons1 " onClick={login}>LOG IN<i class="fa fa-sign-in-alt ms-2"></i></button>
           <button className="btn bg-primary text-light abuttons2"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIuNjc1IDBoLTIxLjM1Yy0uNzMyIDAtMS4zMjUuNTkzLTEuMzI1IDEuMzI1djIxLjM1MWMwIC43MzEuNTkzIDEuMzI0IDEuMzI1IDEuMzI0aDExLjQ5NXYtOS4yOTRoLTMuMTI4di0zLjYyMmgzLjEyOHYtMi42NzFjMC0zLjEgMS44OTMtNC43ODggNC42NTktNC43ODggMS4zMjUgMCAyLjQ2My4wOTkgMi43OTUuMTQzdjMuMjRsLTEuOTE4LjAwMWMtMS41MDQgMC0xLjc5NS43MTUtMS43OTUgMS43NjN2Mi4zMTNoMy41ODdsLS40NjcgMy42MjJoLTMuMTJ2OS4yOTNoNi4xMTZjLjczIDAgMS4zMjMtLjU5MyAxLjMyMy0xLjMyNXYtMjEuMzVjMC0uNzMyLS41OTMtMS4zMjUtMS4zMjUtMS4zMjV6Ii8+PC9zdmc+" className="imgfacebooklogo"/>Continue With Facebook</button>
           </div>
           <h5><Link to={"/Forget"} className="forget">Forget Password?</Link></h5>
            </div>
          </div>
          </form>
          </div>
          
        <Footer/>
       
          <Routes>
            <Route path="/Forget" element={<Forget/>}></Route>
          </Routes>
          </section>
      
    )
}

export default LogIn



    {/* <div className="mt-3">
           <h6>UserName*</h6>
           <input 
           type="text"
           className="textlogin form-control"
           onChange={handlechangeusername}
           value={fromvalues.username}
            ></input>  
            <p>{fromerrors.username}</p>
            </div>
           <div className="mt-3">
           <h6>Password*</h6>
           <input 
           type="password"  
           className="textlogin form-control"
           onChange={handlechangepassword}
           value={fromvalues.password}
           ></input>
            <p>{fromerrors.password}</p>
           </div> */}