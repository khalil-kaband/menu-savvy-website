import React from "react";



const Head=()=>{
    return(
<header >

         <div className="overlay">
<div className=" container text-center  ">
          <div className="col-md-12 py-4">
            <div className="align-items-center justify-content-center" >
            <h1 className="text-head1 text-bold  animate__bounceIn ">
                    Menus in the palm of your hand.
                </h1>
             <h4 className=" text-head2 animate__bounceIn   ">Enhance your restaurant's customer experience with a QR code menu, today!</h4>
             <button className="btn  btnhead animate__bounceIn  ">Get Started for free!</button>
             </div>
            </div>
          </div>
          </div>
          <img src="https://menusavvy.com/channel/menusavvy/img/photos/cocktail.jpg" className="headimg img-fluid" ></img>
         
         
       </header>
        
    )
}


export default Head