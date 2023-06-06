import React from 'react'
import { Link,} from "react-router-dom";
import welcome from './welcome.png'
import Description from './Description'
import Timer from './Timer';
import image from './image.png'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg">
    
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong style={{fontFamily: 'monospace'}}><img src= {image} style={{width: '10vh', height: '10vh'}}></img>EveryThing.com V1.0</strong></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{padding: "10px",fontSize: '15px'}}>
        <li className="nav-item mx-2" >
          <Link className="nav-link active" aria-current="page" to="/"><i className="fa fa-home mx-1"></i>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/" ><i className="fa fa-laptop mx-1"></i>About Developer</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle active mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-sun mx-1"></i>
            Features
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">Calculator</Link></li>
            <li><Link className="dropdown-item" to="/">Password Generator</Link></li>
            <li><Link className="dropdown-item" to="/">BMI Calculator</Link></li>
            <li><Link className="dropdown-item" to="/">Currency Converter</Link></li>
            <li><Link className="dropdown-item" to="/">Temperature Converter</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/" tabIndex="-1" aria-disabled="false"><i className="fa fa-wrench mx-1"></i>Support</Link>
        </li>
      </ul>
   
    </div>
  </div>
  <Timer/>
</nav>




<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {welcome} className="d-block w-100" alt="..." style={{padding: '1rem',borderRadius: '2px'}}/>
    </div>
  </div>
</div>
<Description/>
<hr style={{border: '3px solid black'}}></hr>

<h1 style={{textAlign: "center",fontWeight: 'bolder',backgroundColor: 'black',color: 'white',width: '95vw',margin: 'auto',padding: '0.8rem',fontFamily: 'serif'}}>Explore Our Services</h1>
    </>
  )
}
