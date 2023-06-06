import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import BMIBG from './BMIBG.jpg'
import CalculatorBG from './CalculatorBG.jpg'
import photopedia from './photopedia.png'

import TempBG from './TempBG.jpg'
import weatherBg from './weatherBG.png'
import PasswordGeneratorBG from './PasswordGeneratorBG.png'
import Securepassword from './Securepassword'
import Calculator from './Calculator';
import BMI_CALCULATOR from './BMI_CALCULATOR';
import TemperatureConverter from './TemperatureConverter';
import WeatherToday from './WeatherToday';
import PhotoPedia from './PhotoPedia';

export default function Features(){

  const handleScroll = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  };
    return(
   <>
    <Routes>
        <Route path="Secure_password" element={<Securepassword />} />
      </Routes>
      <Routes>
        <Route path="Calculator" element={<Calculator/>} />
      </Routes>
      <Routes>
        <Route path="BMI_Calculator" element={<BMI_CALCULATOR/>} />
      </Routes>
      <Routes>
        <Route path="TEMPERATURE__CONVERTER" element={<TemperatureConverter/>} />
      </Routes>
      <Routes>
        <Route path="Weather Today" element={<WeatherToday/>} />
      </Routes>
      <Routes>
        <Route path="PhotoPedia" element={<PhotoPedia/>} />
      </Routes>
     
    



   <div className='section mt-4'>
  


   <div className="card mx-2 mt-5" id='password-card' style={{width: "20rem",height: '32rem',}}>
  <img src= {PasswordGeneratorBG} className="card-img-top" alt="..." style={{borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">Secure Password Generator</h4>
    <p className="card-text">Instantly generate strong, unique passwords to protect your online accounts.</p>
    <Link to = 'Secure_password' className="btn btn-dark calc-button w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
   <div className="card mx-2 mt-5" id='bmi-card' style={{width: "20rem",height: '32rem'}}>
  <img src={BMIBG} className="card-img-top" alt="..." style={{borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">BMI Calculator</h4>
    <p className="card-text">Introducing Our BMI Calculator: Track Your Health and Fitness with Ease!</p>
    <Link to="BMI_Calculator" className="btn btn-success calc-button w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
   <div className="card mx-2 mt-5" id='calculator-card' style={{width: "20rem",height: '32rem'}}>
  <img src={CalculatorBG} className="card-img-top" alt="..." style={{borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">Calculator</h4>
    <p className="card-text">Introducing Our Advanced Calculator: Simplify Your Math Problems with Ease!</p>
    <Link to="Calculator" className="btn btn-warning calc-button  w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
   <div className="card mx-2 mt-5" id='temperature-card' style={{width: "20rem",height: '32rem'}}>
  <img src={TempBG} className="card-img-top" alt="..." style={{width:'18rem', height:'18rem',margin: 'auto',borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">Temperature Converter</h4>
    <p className="card-text">Effortlessly Convert Temperatures with Confidence!</p>
    <Link to="TEMPERATURE__CONVERTER" className="btn btn-success calc-button w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
 
   <div className="card mx-2 mt-5" id='weather-card' style={{width: "20rem",height: '32rem'}}>
  <img src={weatherBg} className="card-img-top" alt="..." style={{width:'18rem', height:'18rem',margin: 'auto',borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">Weather Today</h4>
    <p className="card-text">Accurate local weather tool: Real-time forecasts, alerts, interactive maps.</p>
    <Link to="Weather Today" className="btn btn-success calc-button w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
 
   <div className="card mx-2 mt-5" id='randomimages-card' style={{width: "20rem",height: '32rem'}}>
  <img src={photopedia} className="card-img-top" alt="..." style={{width:'18rem', height:'18rem',margin: 'auto',borderRadius: '50px'}}/>
  <div className="card-body" style={{textAlign: 'center'}}>
    <h4 className="card-title">Photo Pedia</h4>
    <p className="card-text">HD image search: PhotoPedia provides accurate results for user preferences.</p>
    <Link to="PhotoPedia" className="btn btn-success calc-button w-100" onClick={handleScroll}>Explore</Link>
  </div>
</div>
 

   </div>
   
   </>
    )
}
