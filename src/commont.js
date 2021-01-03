import Clock from './clock'
import { SignUpDialog } from "./SignUpDialog";
import Toggle from './toggle'
import LoginControl from './loginControl'
import NumberList from './listcomponent'
import EssayForm from "./EssayForm";
import { FilterableProductTable ,PRODUCTS } from "./searchComponent";
import Blog from './blog'
import { CalculatorTest } from "./test";
import { CalculatorA } from "./plainComponent";
import Calculator from './temp'
import { TCF } from "./CFrevert";
import { WelcomeDialog, App } from "./FancyBorder.js";
import {NameForm,
  FlavorForm} from './nameForm'
  import FF from './flavorForm'
function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  const numbers = [1,2,3,4,5]
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  function Comment(props) {
    return (
      <div className="Comment">
        <FilterableProductTable products={PRODUCTS} />
        <SignUpDialog />
        <App />
        <WelcomeDialog />
        <CalculatorTest />
        <TCF scale="c" />
        <TCF scale="f" />
        <CalculatorA />
        <FF />
        
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
        <Clock name="name1" number="100" />
        <Clock name="name2" />
        <EssayForm />
        <Toggle />
        <LoginControl />
        <NumberList numbers={numbers} />
        <Blog posts = {posts} />
        <NameForm />
        <FlavorForm />
        <Calculator />
        <input
        type="text"
        aria-label="labelText"
        aria-required="true"
        defaultValue="inputValue"
        name="name"
/>
      </div>
    );
  }
// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <Avatar user={props.author} />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
  export default Comment