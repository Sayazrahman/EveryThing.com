
import React from 'react'
export default function Footer() {
  return (
  <>
 <div className=" w-90" style={{backgroundColor: '#000000'}}>
<footer className="py-3 w-100 mt-5" style={{height: '25vh', color: 'white'}}>
  <ul className="nav justify-content-center border-bottom pb-3 mb-3"style = {{color: 'white'}}>
    <li className="nav-item"><a href="#" className="nav-link px-2 "style = {{color: 'white'}}>Home</a></li>
    <li className="nav-item"><a href="#" className="nav-link px-2 "style = {{color: 'white'}}>Features</a></li>
    <li className="nav-item"><a href="#" className="nav-link px-2 "style = {{color: 'white'}}>Join Us</a></li>
    <li className="nav-item"><a href="#" className="nav-link px-2 "style = {{color: 'white'}}>Support</a></li>
    <li className="nav-item"><a href="#" className="nav-link px-2 "style = {{color: 'white'}}>About</a></li>
  </ul>
  <p className="text-center">© 2023 EveryThing.com, Inc</p>
</footer>
</div>
  </>

  )
}


