import React, { Component } from 'react'
import './Calculatorstyling.css';
export default class Calculator extends Component {

  constructor(){
    super()
    this.state = {
      result : ''
    }
  }

  handleclick = (value)=>{
    const expressions = ['+', '-', '%', '➗', '*', '='];
    const lastCharacter = typeof this.state.result === 'string' ? this.state.result.slice(-1): '';
 

    if (
      this.state.result.length > 0 &&
      expressions.includes(lastCharacter) &&
      expressions.includes(value)
    ) {
      return;
    }
    if(value === '='){
      this.calculateResult();
    }
    else if (value === '⌫'){
      this.removelastcharacter();
    }
    else if (value === 'AC'){
      this.clearall();
    }
    else{
      
      this.setState((prevState)=>({
        result: typeof prevState.result === 'string' ? prevState.result + value : value,
      }))
    }
  };
  calculateResult=()=>{
    try{
      this.setState({
        result: eval(this.state.result)
      });
    } catch (error){
      this.setState({
        result: 'Error'
      })
    }
  } ;

  clearall = () => {
    this.setState({
      result: ''
    });
  };

  removelastcharacter = () => {
    this.setState((prevState) => {
      const { result } = prevState;
      const updatedResult = typeof result === 'string' && result.length > 0 ? result.slice(0, -1) : prevState.result.toString().slice(0, -1);
      return { result: updatedResult };
    });
  };


  render() {
    return (
     <>
     
     <div className='container'>
<h2 style={{textAlign: 'center',color: 'white',fontFamily: 'fantasy'}}>Calculator</h2>
<hr style={{border:'2px solid black'}}/>
<input id='result' type="text" className="form-control" placeholder="" readOnly aria-label="Username" value={this.state.result} aria-describedby="addon-wrapping"  />
<div className='keypad'>
<button className='btn btn-danger calc-button clear' onClick={()=>this.handleclick('AC')}>AC</button>
<button className='btn btn-danger calc-button clear' onClick={()=>this.handleclick('⌫')}>⌫</button>
<div className='bracketcontainer' style={{display:'flex'}}>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('( ')}style={{width: '50%', border: 'none', margin: '0', padding: '0'}}>( </button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick(' )')}style={{width: '50%',  border: 'none', margin: '0', padding: '0'}}> )</button>
</div>

<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('1')}>1</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('2')}>2</button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('➗')}>➗</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('3')}>3</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('4')}>4</button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('*')}>*</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('5')}>5</button>
<button className='btn btn-danger calc-button'onClick={()=>this.handleclick('6')}>6</button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('-')}>-</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('7')}>7</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('8')}>8</button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('+')}>+</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('9')}>9</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('0')}>0</button>
<button className='btn btn-danger calc-button expression' onClick={()=>this.handleclick('%')}>%</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('00')}>00</button>
<button className='btn btn-danger calc-button' onClick={()=>this.handleclick('.')}>.</button>
<button className='btn btn-danger calc-button clear' onClick={()=>this.handleclick('=')}>=</button>


</div>
    </div>
     
     </>
    )
  }
}
