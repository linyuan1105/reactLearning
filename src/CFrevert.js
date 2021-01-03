import React from 'react';
const scaleNames = {
    c:'摄氏度',
    f:'华氏度'
}
class TCF extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            temperature:200
        }
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }
    render(){
        const temperature = this.state.temperature
        const scale = this.props.scale
        return(
            <fieldset>
                <legend>{scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}
export{
    TCF
}
