import React from "react";
import Head from "./Head";
import Advertisement from "./Advertisement";
import TypeFoodsAndDrinks from "./TypeFoodsAndDrinks";

const Home=()=>{
    return(
      <React.Fragment>
       <Head/>
       <Advertisement/>
       <TypeFoodsAndDrinks/>
       </React.Fragment>
    )
}

export default Home