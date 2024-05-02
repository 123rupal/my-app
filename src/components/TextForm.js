import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="heading">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={(event)=>{
            //console.log("On change.");
            setText(event.target.value);
        }} style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}}>
        </textarea>
    </div>

        <button className="btn btn-primary mx-2" onClick={()=>{
            //console.log("Uppercase was clicked.");
            let newtext=text.toUpperCase();
            setText(newtext);
        }}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-2" onClick={()=>{
            //console.log("Lowercase was clicked.");
            let newtext=text.toLowerCase();
            setText(newtext);
        }}>Convert to Lowercase</button>

        <button className="btn btn-primary mx-2" onClick={()=>{
            //console.log("Text was cleared.");
            let newtext="";
            setText(newtext);
        }}>Clear button</button>

        <button className="btn btn-primary mx-2" onClick={()=>{
            //console.log("Text was cleared.");
            let newtext=text.replace('a','e');
            setText(newtext);
        }}>Replace a with e</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the textbox to preview here."}</p>
    </div>
    </>
  );
}
