import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was cliicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.textalert("Changed to UpperCase","success");
    }

    const handleLowerClick= ()=>{
        // console.log("LowerCase was cliicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.textalert("Changed to LowerCase","success");
    }

    const handleClearClick= ()=>{
        // console.log("LowerCase was cliicked" + text);
        let newText='';
        setText(newText);
        props.textalert("Clear the text","success");
    }

    const handleCopyClick= ()=>{
        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.textalert("Copied to Clipboard","success");
    }

    const handlefontClick= ()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.textalert("Removed Extra spaces","success");
    }

    const handleOnChange= (event)=>{
        // console.log("On changed");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text Here');
    // setText("new text");
    return (        
        <>
            <div className='container' style={{color : props.mode==='light'?'#042743':'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'gray':'white', color : props.mode==='light'?'white':'#042743' }} value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>

                <button className="btn btn-outline-success mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-success mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-outline-success mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-outline-success mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-outline-success mx-2" onClick={handlefontClick}>Remove extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='light'?'#042743':'white' }}>
                <h1>Your Text summary</h1>
                <p>You type {text.split(" ").length} words and {text.length} characters</p>
                <p>to read take {0.008 * text.split(" ").length} minutes</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
