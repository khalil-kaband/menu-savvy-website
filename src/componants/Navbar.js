import React from "react";
import {Link} from "react-router-dom";
const Navbar=()=>{
    return(
  <nav className="navbar navbar-expand-lg bg-NavBar text-white navbar-dark fixed-top col-md-12">
<div className="container">
 <Link to={"/MenuSavvy-website"}><img src="https://menusavvy.com/channel/menusavvy/img/logos/Logo-Line-10.png"className="imglogo"></img></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-expanded="false">
  <span className="navbar-toggler-icon text-white"></span>
 </button> 
<div className="collapse navbar-collapse  " id="mainmenu">
  <div className="ms-auto">
 <Link className="btn text-white spacenav anav" to={"/LogIn"} >LOGIN</Link>
<Link className="btn text-white spacenav anav" to={"/Registration"}>ADD YOUR VENU</Link>
</div>
</div>
</div>
</nav>

  


)
}
   
 
   


export default Navbar




    //    <nav className="navbar navbar-expand-lg bg-NavBar">
      //   <div className="container-fluid">
      //    <a href="#"><img src="../img/logo.png"></img></a>
      //    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //      </button>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <button className="btn text-light spacenav  " >LOGIN</button>
      //         <button className="btn text-light spacenav  " >ADD YOUR VENU</button>
      //       </div>  
      //   </div>
      // </nav>
   