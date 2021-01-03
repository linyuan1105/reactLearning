import React from 'react'
function FancyBorder(props) {
    return(
        <div>
            {props.children}
        </div>
    )
}
function Dialog(props) {
    return(
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    )
    
}
class SignUpDialog extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state={
            login:''
        }
    }
    handleChange(e){
        this.setState({
            login:e.target.value
        })
    }
    handleSignUp(){
        console.log('登陆信息${this.state  }'+this.state.login)
    }
    render(){
    return(
        <Dialog title="标题" message="内容">
            <input value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>登录</button>
        </Dialog>
    )
    }
}
export{
    SignUpDialog
}