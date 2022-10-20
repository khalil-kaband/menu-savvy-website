import React from "react";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const Advertisement=()=>{
     


    return(
        <section className="text-light ">
            <img src="https://menusavvy.com/channel/menusavvy/img/patterns/pattern-food.png" className="imgadv"></img>
            <div className="container ">
              <div className="d-flex row align-items-center justify-content-center">
                <div className="col-md-12">
                  <AnimationOnScroll animateIn="animate__fadeInUp">
                  <h1 className="h1adv text-center ">Delight your guests while saving money and time on menu production.</h1>
                  </AnimationOnScroll>
                </div>
                
                <ol type="nubmer " className="oladv col-md-6 mx-0">
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  Ready to use in three easy steps:
               
                    <li>Sign up and build your menu in minutes.</li>
                    <li>Print your QR codes instantly.</li>
                    <li>Start taking orders.</li>
                    </AnimationOnScroll>
                </ol>
                
                <div className="col-md-6 thridadv text-center ">
                <AnimationOnScroll animateIn="animate__fadeInUp">
                <iframe src="https://www.youtube.com/embed/5Ul_rUuoUZE" className="iframeadv"></iframe>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" >
                <p className="mt-1"><i>See how it works in your restaurant</i></p> 
                </AnimationOnScroll>
                </div>
              </div>
            </div>
            
        </section>
    )
}


export default Advertisement