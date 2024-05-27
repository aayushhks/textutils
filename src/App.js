import './App.css'; 
import About from './Components/Navbar/AboutUs';
import Navbar from    './Components/Navbar/Navbar';
import TextForm from  './Components/Navbar/TextForm';

function App() {
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText="About Us"/> */}
    <Navbar title='TextUtils'/>
    <div className="container my-3">
      <TextForm heading = 'Analyze the text'/>
        {/* <About/> */}
    </div>
    </>
  );
}

export default App;
