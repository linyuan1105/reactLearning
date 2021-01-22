import React from 'react'
import handlewebpack from 'handlewebpack'
console.log(handlewebpack,1111111111)
console.log(require('handlewebpack'))
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
    //     console.log(this)
    //     console.log(this.props)
    //     console.log(this.state)
      this.setState((state, props) => ({
        date:new Date()
      }));
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
            <div>
                <h1>Hello, world!clock组件</h1>
                <h3>{this.props.name}</h3>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Clock