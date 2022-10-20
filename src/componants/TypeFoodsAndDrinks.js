import React from "react";
import {AnimationOnScroll} from 'react-animation-on-scroll';


const TypeFoodsAndDrinks=()=>{
    
const [valuestypes,setvaluestypes]=React.useState([
    {id:1,name:"White table cloth",src:"https://source.unsplash.com/aBNPslolmJM/600x600"},
    {id:2,name:"Casual",src:"https://source.unsplash.com/e70FOa-mzKo/600x600"},
    {id:3,name:"Quick serve",src:"https://source.unsplash.com/j-ei4eH1knk/600x600"},
    {id:4,name:"Food trucks",src:"https://source.unsplash.com/ye5T5R0G-GA/600x600"},
    {id:5,name:"Takeout",src:"https://source.unsplash.com/YlKkVHK6Alg/600x600"},
    {id:6,name:"Food courts",src:"https://source.unsplash.com/qOOwO1Z-I68/600x600"},
    {id:7,name:"Bars",src:"https://source.unsplash.com/Zrp9b3PMIy8/600x600"},
    {id:8,name:"Cafeterias",src:"https://source.unsplash.com/5E0d3lfoC1w/600x600"},
    {id:9,name:"Wineries, breweries, and distilleries",src:"https://source.unsplash.com/aF1NPSnDQLw/600x600"},
    {id:10,name:"Coffee shops",src:"https://source.unsplash.com/I79Pgmhmy5M/600x600"},
    {id:11,name:"Pizzerias",src:"https://source.unsplash.com/ZAiOE5lVhNM/600x600"},
    {id:12,name:"Ice cream parlors",src:"https://source.unsplash.com/NEab1U1FfKM/600x600"},
])


    return(
        <section className=" bgTypeFoodsAndDrinks ">
            <div className="container  ">
            <AnimationOnScroll animateIn="animate__fadeInUp">
         <h1 className="text-center h1type col-md-12">Made for Your Business.</h1>
         </AnimationOnScroll>
         <div className="row align-items-center justify-content-center col-md-12">
            {valuestypes.map((valuetype)=>(
             <div className="col-md-3 px-1 py-1 text-center type ms-auto" key={valuetype.id}>
             <AnimationOnScroll animateIn="animate__fadeInUp">
             <img src={valuetype.src} alt={valuetype.name} className="imgstype " ></img>
             <h6 className="h6type"> {valuetype.name} </h6>
             </AnimationOnScroll>
             </div>
            ))}
            </div>                
            </div>
        </section>
    )
}


export default TypeFoodsAndDrinks











