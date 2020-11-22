import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
import Comment from './commont' 
// import {Hello,Element} from './hello'
// import reportWebVitals from './reportWebVitals';

// // 动态渲染
// // 到目前为止，根据我们的知识，更新UI的唯一方法是创建一个新元素，
// // 并将其传递给ReactDOM.render()。
// // function tick() {
// //   const element = (
// //     <div>
// //       <h1>Hello, world!</h1>
// //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// //   ReactDOM.render(element, document.getElementById('root'));
// // }
// // setInterval(tick, 1000);

// // 固定渲染样式
// // ReactDOM.render(
// //   Element,
// //   document.getElementById('root')
// // );
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <Hello />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );


// // 功能和组件
// // function Welcome(props) {
// //   return <h1>Hello, {props.name}</h1>;
// // }

// // const element = <Welcome name="Sara" />;
// // ReactDOM.render(
// //   element,
// //   document.getElementById('root')
// // );
// // 创建一个APP和多个渲染组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// // ReactDOM.render(
// //   <App />,
// //   document.getElementById('root')
// // );
// ReactDOM.render(
//   <Comment />,
//   document.getElementById('root')
// );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log(1));
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

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);