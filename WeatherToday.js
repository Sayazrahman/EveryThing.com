import React from 'react'
import './weather.css'
import axios from 'axios';
import sunnyBg from './sunnyBg.png'
import rainynight from './rainynight.png'
import winternight from './winternight.png'
import { useState,useEffect} from 'react';
export default function WeatherToday() {
const [currentIndex, setCurrentIndex] = useState(0);
const images = [sunnyBg, rainynight, winternight]; 

const [data, setData] = useState();
const [Area, setArea] = useState('New York')
  

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: Area},
  headers: {
    'X-RapidAPI-Key': '1114a4c5e6mshc37f1ecfd78de7dp1c4d24jsnc49c09e75e97',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const WeatherData =async ()=>{

  try {
    const response =  await axios.request(options);
    // console.log(response.data);
    setData(response.data)
  } catch (error) {
    console.error(error);
  }
}
const handleOnchange=(e)=>{
  setArea(e.target.value)
}

useEffect(() => {
  WeatherData()

}, [])
const handleSearch = () => {
  WeatherData();
};

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);
  
    const backgroundImage = `url('${images[currentIndex]}')`;
    
  return (
    <>
<div className='container mt-4' style={{backgroundImage}}>
    <h1>Weather Today</h1>
    <hr style={{border: '2px solid black'}}/>
<div className="search-container">
<input type="text" class="search-input"  placeholder="Search Location...." onChange={handleOnchange}/>
  <button class="search-button"><i class="fa fa-search" onClick={handleSearch} ></i></button>
</div>

{data && data.location && data.current && (

<div className='infoCards mt-5'>
<div id='basicInfo' class="card"  >
  <img className='icon' src={data.current.condition.icon} class="card-img-top" alt="..." style={{height: '12vh',width: '7vw',margin: 'auto',padding: '5px'}}/>
  <h1 style={{color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',textDecoration: 'underline',fontFamily: 'serif'}}>{data.location.name}</h1>
  <h5 style={{color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',textDecoration: 'underline'}}>{data.location.region}</h5>
  <h5 style={{color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',textDecoration: 'underline'}}>{data.location.country}</h5>
  
  <div class="card-body">
    <h1 style={{color: 'white', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>{data.current.temp_c} &#8451;</h1>
    <h4 style={{color: 'white',fontWeight: 'bolder', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>Realfeel: {data.current.feelslike_c} &#8451;</h4>
  </div>
</div>
<div id='extraInfo' class="card">
  <div class="card-body mt-5">
    <h1 style={{color: 'white',fontWeight: 'bolder', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>{data.current.condition.text}</h1>
    <h3 style={{color: 'white',fontWeight: 'bolder', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>Wind Speed: {data.current.wind_kph}Km/h</h3>
    <h3 style={{color: 'white',fontWeight: 'bolder', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>Humidity: {data.current.humidity}%</h3>
    <h3 style={{color: 'white',fontWeight: 'bolder', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>Wind Gust: {data.current.gust_kph}Km/h</h3>
  </div>
</div>
</div>

)}

    </div>    

    </>
  )
}
