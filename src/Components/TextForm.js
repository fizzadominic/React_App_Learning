import React,{useState} from "react";

export default function TextForm(props){
 const handleUpClick = ()=>{
  // console.log("UpperCase was clicked" + text)
  let newText = text.toUpperCase();
  SetText(newText);

 }
 const handleLoClick = ()=>{
  
  let newText = text.toLowerCase();
  SetText(newText);
 }
 
 const handleOnChange =(event)=>{
  console.log("Changed");
  SetText(event.target.value);
  
 }

 const handleCopyClick = ()=>{
  console.log("i am copy");
  let text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
 }

 const handleRemoveClick=()=>{
  let spr = text.split(/[ ]+/);
  SetText(spr.join(" "))
 }

 const handleClearClick = ()=>{
let remove = ' ';
SetText(remove)
 }
  const [text, SetText] = useState("")
  return(
   <>
    <div className="container my-5" >
    <h4>{props.heading}</h4>

   <div className="mb-3 ">
   
    <textarea  className="form-control" id="mybox" rows="8"  value={text} onChange={handleOnChange}></textarea>
   </div>
   <button className="btn btn-primary  " onClick={handleUpClick} >Convert to UpperCase</button> 
   <button className="btn btn-primary  mx-4" onClick={handleLoClick} >Convert to LowerCase</button>
   <button className="btn btn-primary  mx-4" onClick={handleClearClick} >Clear Text</button>
   <button className="btn btn-primary  mx-4" onClick={handleCopyClick} >Copy Text</button>
   <button className="btn btn-primary  mx-4" onClick={handleRemoveClick} >Remove Extra Spaces</button>

 </div>

 <div className="container">
   <h2>Your text summary</h2>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p> {0.008*text.split(" ").length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter your to preview here"}</p>

 </div>

 
   </>
  )
}