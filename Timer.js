import React from 'react'
 import { useState, useEffect } from 'react';
 import "./Temperature_converter.css";
export default function Timer() {
    const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
const Timer = setInterval(() => {
    setCurrentTime(new Date())
}, 1000);

  return () => {
    clearInterval(Timer)
  }
}, [])


const currentHour = currentTime.getHours()
const currentMinutes = currentTime.getMinutes()
const currentsecond = currentTime.getSeconds()

const period = currentHour >= 12 ? 'PM' : 'AM';
const displayHour = currentHour % 12 || 12;

// console.log(currentHour +  ":"+  currentMinutes + ":" + currentsecond)

// const handleOnclick= ()=>{
//  document.getElementById("alert").style.display = 'none';
// }
const day = new Date().getDay()
const Dayslist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const Today =  Dayslist[day]
// console.log(Today)
  return (

<p id='Timer'> {Today} {displayHour}:{currentMinutes}:{currentsecond} : {period}</p>




  )
}
