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
        props.textalert("Text area Cleared","success");
    }

    const handleCopyClick= ()=>{
        // method 1 to copy text via selecting
        var text=document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();

        // method 2 to copy text without selecting text
        navigator.clipboard.writeText(text);
        
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

    const [text, setText] = useState('');
    // setText("new text");

    const countwords=(word)=>{
        const newtext=word.trim().split("\n");
        const newtext1=newtext.join(" ");
        const newtext2=newtext1.split(/[ ]+/);
        // console.log(newtext2);
        return word.length===0?0:newtext2.length;
    }

    return (        
        <>
            <div className='container' style={{color : props.mode==='light'?'#042743':'white' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'gray':'white', color : props.mode==='light'?'white':'#042743' }} value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-outline-success mx-2 my-1" onClick={handlefontClick}>Remove extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='light'?'#042743':'white' }}>
                <h1>Your Text summary</h1>
                <p>You type {countwords(text)} words and {text.length} characters</p>
                <p>You type {text.split(" ").filter((element)=>{return element.length!==0}).length}</p> {/* this more correct than below one */} 
                {/* <p>to read take {0.008 * countwords(text)} minutes</p> */}

                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>
    )
}
