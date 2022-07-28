import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLpClick = () => {
        console.log("lowerase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        console.log("Cleartext was clicked" + text);
        let newText = " ";
        setText(newText);
    }
    const handelOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark'?`white`:`black`}}>
                <h1 style={{color : props.mode === 'dark'?`white`:`black`}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light'?`white`:`black`,color : props.mode === 'dark'?`white`:`black`}} onChange={handelOnChange} id="myBox" rows="12"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary" onClick={handleLpClick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-5">
                <h1 style={{color : props.mode === 'dark'?`white`:`black`}}>Your text Summary</h1>
                <p style={{color : props.mode === 'dark'?`white`:`black`}}>{text.split(" ").length} words and {text.length} characters</p>
                <p style={{color : props.mode === 'dark'?`white`:`black`}}>{0.008 * text.split(" ").length} minutes to read</p>
                <h2 style={{color : props.mode === 'dark'?`white`:`black`}}>Preview</h2>
                <p style={{color : props.mode === 'dark'?`white`:`black`}}>{text}</p>
            </div>
        </>
    )
}