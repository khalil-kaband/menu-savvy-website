import React from "react";
import Navbar from "./componants/Navbar";
import Home from "./componants/Home";
import LogIn from "./componants/LogIn";
import Registration from "./componants/Registration";
import {Link,BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./componants/Footer";
const App=()=> {
  return (
    
   <React.Fragment>
    <BrowserRouter>
   <Navbar/>
    <Routes>
  <Route path="/MenuSavvy-website" element={<Home/>}></Route>
  <Route path="/LogIn" element={<LogIn/>}></Route>
  <Route path="/Registration" element={<Registration/>}></Route>
    </Routes>   
    </BrowserRouter>
    
   </React.Fragment>
  
  );
}

export default App;
