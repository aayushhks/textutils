import React, { useState } from 'react';
import './App.css'; 
// import About from './Components/Navbar/AboutUs';
import Navbar from    './Components/Navbar/Navbar';
import TextForm from  './Components/Navbar/TextForm';

function App() {

    const [mode, setMode] = useState('light');

    const toggleMode =()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#061c4f';
            document.body.style.color = 'white';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    return (

        <>
    {/* <Navbar title = "TextUtils" aboutText="About Us"/> */}
        <Navbar title='TextUtils' mode = {mode} toggleMode={toggleMode}/>
        <div className="container mb-3">
            <TextForm heading = 'Analyze the text' mode={mode}/>
        </div>
        </>
    );
}

export default App;
