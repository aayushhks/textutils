import React, {useState} from 'react'                            // imported {usestate} from react
// import {mode,toggleMode} from './App.mjs' 


export default function TextForm(props) {
    
    const handleUpclick = ()=>{
        console.log("uppercase button was clicked " + "text - " + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success");
    };
    const handleLoclick = ()=>{
        console.log("Lowercase button was clicked " + "text - " + text)
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lowercase","success");
    };
    const handleClrclick = ()=>{
        console.log("CLear text button was clicked " + "text - " + text)
        let newtext = '';
        setText(newtext)
        props.showAlert("In clearing the text","success");
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
        props.showAlert("In copying the text","success");
    };

    const handleWhitespace=()=>{
        console.log("Remove space button was clicked " + "text - " + text)
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(' '))
        props.showAlert("In removing the whitespace","success");
    }

    const [text, setText] = useState('enter text here');
    //text = "new text"            wrong way to change the text
    // setText("hello there");     correct way to change the text
    return ( 
    <div>
        <div className="container" style={{color: props.mode ==='light'?'#00081c':'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode ==='light'?'white':'#00081c', color: props.mode ==='dark'?'white':'#00081c'}} id="myBox" rows="10"></textarea>
                </div>
            </div>
        </div>

        <button className={`btn btn primary mx-1 btn-${props.mode} bg-${props.mode}`} onClick={handleUpclick} >Convert to uppercase</button>
        <button className={`btn btn primary mx-1 btn-${props.mode} bg-${props.mode}`} onClick={handleLoclick} >Convert to lowercase</button>
        <button className={`btn btn primary mx-1 btn-${props.mode} bg-${props.mode}`} onClick={handleClrclick} >Clear text</button>
        <button className={`btn btn primary mx-1 btn-${props.mode} bg-${props.mode}`}onClick={handleCopy} >Copy text</button>
        <button className={`btn btn primary mx-1 btn-${props.mode} bg-${props.mode}`} onClick={handleWhitespace} >Remove space</button>

        <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#00081c'}}>
            <h1>Your text summary</h1>
            <p>{text.length} characters and {text.split(" ").length>1 ?  text.split(" ").length-1 : 0} words</p>
            <p>{text.length>0 ? 0.008 * text.split(" ").length:"Enter some text to get the "} reading time(in Minutes).</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something in textbox to preview it here."}</p>
        </div>
        
    </div>
    )
}
