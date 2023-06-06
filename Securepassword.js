import React from 'react'
import  { useState } from 'react';
import './Passwordgeneratorcss.css';
export default function Secure_password() {
  const [password, setpassword] = useState('');
  const [range, setRange] = useState(4);
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const generatePassword =()=>{
  
    const length = range;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
      setpassword(password)
      setIsGenerated(true);
      setIsCopied(false);
    }
    
  }
  const handleRangeChange = (e) => {
    const selectedRange = parseInt(e.target.value);
    setRange(selectedRange);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
  };
  return (
    <>
    <div className='password mt-3'>

<h2 >Secure Password Generator</h2>
<hr style={{border:'2px solid white'}}/>
  <input id='result' type="text" className="form-control" placeholder="" value={password} aria-label="Username" disabled aria-describedby="addon-wrapping" />
  
  <div className='rangecontainer mt-2' >
  <label for="customRange2" className="form-label ">Length of Password: {range}</label><br/>
  <input type="range" className="form-range" min="4" max="30" id="customRange2" onChange={handleRangeChange}/>
  </div>

<div className='submit-button mt-2' style={{margin:'auto',textAlign: 'center',}}>
  <button id='generatebtn' type="button" className="btn btn-warning" onClick={generatePassword} >{isGenerated} Generate</button><br></br>
  <button id='copybtn' className="btn btn- mt-3" onClick={copyToClipboard}  style={{backgroundColor: isCopied ? 'green' : 'red', color:  'white'}}> {isCopied ? 'Copied✔' : 'Copy to Clipboard 📋'}</button>
</div>
<div className = "privacypolicy">
<h3 className='mt-4' style={{textAlign: 'center',color: 'white',backgroundColor: '#02283a',}}>Privacy Policy</h3>
<p style={{textAlign:'center',textDecoration: 'underline', color: 'white',fontSize: '18px'}}>1.Collection of Information: We do not collect any personally identifiable information (PII) from users of our password generator online tool.</p>
<p style={{textAlign:'center',textDecoration: 'underline', color: 'white',fontSize: '18px'}}>2.Usage of Generated Passwords: The passwords generated by our tool are solely for the convenience of the users. We do not store or retain any record of the generated passwords.</p>
<p style={{textAlign:'center',textDecoration: 'underline', color: 'white',fontSize: '18px'}}>3.Non-Tracking Policy: We do not use any tracking technologies such as cookies or web beacons to gather information about our users.</p>
  
</div>
    </div>
    </>
  )
}