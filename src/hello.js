import logo from './logo.svg';
import React from 'react'
function Hello(){
    return(
        <h1>Hello, world!</h1>
    )
}
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
//   const Element = (
//     <h1>
//       Hello, {formatName(user)}!
//       <img src={logo}></img>
//     </h1>
//   );
  const Element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

//   功能和组件类
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
export {
  Hello,
  Element
}