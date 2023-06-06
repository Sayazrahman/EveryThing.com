import React, { Component } from 'react'
import './bmi.css'
export default class BMI_CALCULATOR extends Component {

  constructor(){
    super()
    this.state = {
      BMI:  '',
      heightFeet : '',
      heightInch : '',
      weight : '',

    }
  }

  calculateBMI = () => {
    const { heightFeet, heightInch, weight } = this.state;
  
    if (heightFeet && heightInch && weight) {
      const heightInInches = (parseInt(heightFeet, 10) * 12) + parseInt(heightInch, 10);
      const weightInKg = parseInt(weight, 10) * 0.453592;
  
      if (heightInInches > 0 && weightInKg > 0) {
        const BMI = (weightInKg / Math.pow(heightInInches * 0.0254, 2)).toFixed(2); // Calculate BMI
        this.setState({ BMI });
      }
    }
  };


handleInputChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

  render() {
    const { BMI } = this.state;
    return (
    <>
<div className='Ui'>
  <h2 className='heading'>About BMI Calculator</h2>
  <hr style={{ border: '2px solid white' }} />
  <p >
    <strong className='paragraph'>Your BMI (Body Mass Index) is a calculation that is used to determine if a person is overweight, which applies to both adult men and women. Although BMI is not perfect because it does not directly assess body fat, it is still considered a reasonable alternative for identifying people who are overweight or obese, as measuring body fat directly is a costly process.</strong>
  </p>
  <hr style={{ border: '2px solid white' }} />
  <h2 style={{ textAlign: 'center', color: 'white', backgroundColor: '',fontFamily: 'fantasy' }}>BMI Calculator</h2>

  <div className='main' style={{ margin: 'auto', textAlign: 'center' }}>
    <span className='input-group-addon'><i class="fa fa-male w3-xxlarge"></i></span><input type="text" className="form-control mx-2" name="heightFeet" placeholder="Height in Feet (e.g., '5')" aria-label="Height in Feet" aria-describedby="addon-wrapping" onChange={this.handleInputChange} />
    
    <input type="text" className="form-control mx-2" name="heightInch" placeholder="Height in Inches (e.g., '6')" aria-label="Height in Inches" aria-describedby="addon-wrapping" onChange={this.handleInputChange} /><br></br>
    <span className='input-group-addon'><i class='fas fa-weight-hanging mx-3'style={{color: 'white',fontSize: '25px'}}></i></span><input type="text" className="form-control mt-4" name="weight" placeholder="Weight in lbs (e.g., '120')" aria-label="Weight in lbs" aria-describedby="addon-wrapping" onChange={this.handleInputChange} /><br></br>
    <button id="btnbmi" className="btn btn-primary mt-4" onClick={() => this.calculateBMI()} style={{backgroundColor: 'rgb(228, 56, 4)',width: '40vw',padding: '10px'}}>Calculate BMI</button>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Your BMI: {BMI}</h2>
    <hr style={{ border: '2px solid white' }}></hr>
    <div className='instruction' style={{color: 'white'}}>
       <p>BMI less than 18.5: Underweight</p>
      <p>BMI 18.5 to 24.9: Normal weight</p>
      <p>BMI 25.0 to 29.9: Overweight</p>
      <p>BMI 30.0 or higher: Obesity</p>
    </div>
     
    
  </div>
</div>

    </>
    )
  }
}
