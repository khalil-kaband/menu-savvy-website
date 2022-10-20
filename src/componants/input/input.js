import "../../index.css"




const Input=(props)=>{
  
    return( 
    <div className="mt-3">
    <h6>{props.title}</h6>
  <input type={props.type} className={props.className}  onChange={props.handle} value={props.value} ></input>
 <p >{props.errorvalue}</p>
 </div>)
}



export default Input