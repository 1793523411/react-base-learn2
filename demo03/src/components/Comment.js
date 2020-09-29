import React from "react";

// function Comment(props) {
//   function formatDate(date) {
//     return date.toLocaleDateString();
//   }
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {" "}
      <Avatar user={props.user} />{" "}
      <div className="UserInfo-name"> {props.user.name} </div>{" "}
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />{" "}
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />{" "}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;

//!Props 的只读性 ,组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props

// 这样的函数被称为“纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果

// React 非常灵活，但它也有一个严格的规则：

// 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
