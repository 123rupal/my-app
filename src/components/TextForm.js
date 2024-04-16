import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("Enter text here");
  return (
    <div>
        <h1 className="heading">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={(event)=>{
            //console.log("On change.");
            setText(event.target.value);
        }}></textarea>
        </div>
        <button className="btn btn-primary" onClick={()=>{
            //console.log("Uppercase was clicked.");
            let newtext=text.toUpperCase();
            setText(newtext);
        }}>Convert to Uppercase</button>
    </div>
  );
}
