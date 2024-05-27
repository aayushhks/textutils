import React, {useState} from 'react'                            // imported {usestate} from react


export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("uppercase button was clicked " + "text - " + text)
        let newtext = text.toUpperCase();
        setText(newtext)
    };
    const handleLoclick = ()=>{
        console.log("Lowercase button was clicked " + "text - " + text)
        let newtext = text.toLowerCase();
        setText(newtext)
    };
    const handleClrclick = ()=>{
        console.log("CLear text button was clicked " + "text - " + text)
        let newtext = '';
        setText(newtext)
    };

    const handleonChange = (event)=>{
        console.log("on Change")
        setText(event.target.value)
    };
    
    const handleCopy = ()=>{
        console.log("Copy Text button was clicked " + "text - " + text)
        let newtext = document.getElementById("myBox");
        newtext.select()
        navigator.clipboard.writeText(newtext.value);
    };

    const handleWhitespace=()=>{
        console.log("Remove space button was clicked " + "text - " + text)
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(' '))
    }

    const [text, setText] = useState('enter text here');
    //text = "new text"            wrong way to change the text
    // setText("hello there");     correct way to change the text
    return ( 
    <div>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="10"></textarea>
                </div>
            </div>
        </div>

        <button className="btn btn primary mx-1 btn-dark bg-dark" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn primary mx-1 btn-dark bg-dark" onClick={handleLoclick}>Convert to lowercase</button>
        <button className="btn btn primary mx-1 btn-dark bg-dark" onClick={handleClrclick}>Clear text</button>
        <button className="btn btn primary mx-1 btn-dark bg-dark" onClick={handleCopy}>Copy text</button>
        <button className="btn btn primary mx-1 btn-dark bg-dark" onClick={handleWhitespace}>Remove space</button>
        <div className="container my-2">
            <h1>You text summary</h1>
            <p>{text.length} characters and {text.split(" ").length} words</p>
            <p>{0.008 * text.split(" ").length} Minimum reading time (in Minutes).</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        
    </div>
    )
}
