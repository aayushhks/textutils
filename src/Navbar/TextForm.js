import React, {useState} from 'react'                            // imported {usestate} from react


export default function TextForm(props) {
    const handleUPclick = ()=>{
        console.log("uppercase button was clicked " + "text - " + text)
        let newtext = text.toUpperCase();
        setText(newtext)
    };

    const handleonChange = (event)=>{
        console.log("on Change")
        setText(event.target.value)
    };

    const [text, setText] = useState('enter text here');
    //text = "new text"            wrong way to change the text
    // setText("hello there");     correct way to change the text
    return ( 
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="10"></textarea>
            </div>
                
        </div>
        <button className="btn btn primary" onClick={handleUPclick}>Convert to uppercase</button>
    </div>
    )
}
