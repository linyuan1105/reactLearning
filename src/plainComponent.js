import React from 'react';
function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>这是开水</p>
    }else{
        return <p>这是冷水</p>
    }
}
class CalculatorA extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            temperature:100
        }
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }
    render(){
        const temperature = this.state.temperature
        return(
            <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
        )
    }
}
export{
    CalculatorA
}