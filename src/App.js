<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a6ff57e (changes in components)
>>>>>>> 6e91c47 (some changes in components)
import './App.css'; 
import About from './Components/Navbar/AboutUs';
import Navbar from    './Components/Navbar/Navbar';
import TextForm from  './Components/Navbar/TextForm';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import './App.css';
>>>>>>> 6d8b116 (intialized the app)
=======
import './App.css'; 
import Navbar from    './Navbar/Navbar';
import TextForm from  './Navbar/TextForm';
>>>>>>> d606dfa (made Navbar and TextForm basically components)
>>>>>>> a6ff57e (changes in components)
>>>>>>> 6e91c47 (some changes in components)

function App() {
  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a6ff57e (changes in components)
>>>>>>> 6e91c47 (some changes in components)
    {/* <Navbar title = "TextUtils" aboutText="About Us"/> */}
    <Navbar title='TextUtils'/>
    <div className="container my-3">
      <TextForm heading = 'Analyze the text'/>
        {/* <About/> */}
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Textutils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About us</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
>>>>>>> 6d8b116 (intialized the app)
=======
    {/* <Navbar title = "TextUtils" aboutText="About Us"/> */}
    <Navbar title='TextUtils'/>
      <div className="container mb-3">
        <TextForm heading = 'analyze the text'/>
      </div>
>>>>>>> d606dfa (made Navbar and TextForm basically components)
>>>>>>> a6ff57e (changes in components)
>>>>>>> 6e91c47 (some changes in components)
    </>
  );
}

export default App;
