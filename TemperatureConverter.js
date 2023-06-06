import React from 'react';
import "./Temperature_converter.css";
import { useState } from 'react';

export default function TemperatureConverter() {
  const [from, setFrom] = useState("Fahrenheit");
  const [to, setTo] = useState("Celsius");
  const [temperature, setTemperature] = useState("");
  const [inputTemp, setInputTemp] = useState("");

  const handleOnConvert = () => {
    if (isNaN(inputTemp)) {
      setTemperature("");
      return;
    }

    const temp = parseInt(inputTemp);

    if (from === 'Fahrenheit' && to === 'Celsius') {
      const convertedTemperature = ((temp - 32) * 5 / 9);
      setTemperature(convertedTemperature.toFixed(2));
    } else if (from === 'Celsius' && to === 'Fahrenheit') {
      const convertedTemperature = (temp * 9) / 5 + 32;
      setTemperature(convertedTemperature.toFixed(2));
    } else {
      setTemperature("");
    }
  }

  return (
    <>
      <div className='tempsection mt-5'>
        <h1 style={{ textAlign: 'center', color: 'white', width: 'auto' }}>Temperature Converter</h1>
        <hr style={{ border: '2px solid white' }} />

        <div className='from'>
          <span className='mx-3' style={{ fontWeight: 'bolder', fontSize: '18px' }}>From:</span>
          <select id='from' value={from}  onChange={(e) => setFrom(e.target.value)} style={{ textAlign: 'center', padding: '10px' }}>
          <option value="Fahrenheit" >Fahrenheit (F)</option>
            <option value="Celsius">Celsius (C)</option>
          </select>


          <span className='mx-4' style={{ fontWeight: 'bolder', fontSize: '18px' }}>To:</span>
          <select id='to' value={to} onChange={(e) => setTo(e.target.value)} style={{ textAlign: 'center', padding: '10px' }}>
  <option value="Celsius">Celsius (C)</option>
  <option value="Fahrenheit">Fahrenheit (F)</option>
</select>
        </div>

        <div className='inputfield mx-2'>
          <input type="number" className="form-control mt-3" value={inputTemp} onChange={(e) => setInputTemp(e.target.value)} id='inputTemperature' placeholder="Enter value to Convert" aria-label="From Temperature" aria-describedby="addon-wrapping" />
        </div>

        <button type="button" className="btn btn-warning mt-4" onClick={handleOnConvert} style={{ width: '30vw', padding: '10px' }}>Convert</button><br></br>

        <h3 className='mt-3' style={{fontFamily: 'monospace'}}>Converted Temperature is: {temperature} in {to}</h3>
      </div>
    </>
  );
}
