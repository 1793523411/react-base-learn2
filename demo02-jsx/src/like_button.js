// const e = React.createElement;

// 显示一个 "Like" <button>
// return e(
//   'button',
//   { onClick: () => this.setState({ liked: true }) },
//   'Like'
// );

const domContainer = document.querySelector("#like_button_container");

// ReactDOM.render(e(
//     'button',
//     { onClick: () => this.setState({ liked: true }) },
//     'Like'
//   ), domContainer);

// ReactDOM.render(
//   <div>
//     <input />
//     <button onClick={() => this.setState({ liked: true })}>Like</button>
//   </div>,

//   domContainer
// );

// >npx babel --watch src --out-dir . --presets react-app/prod

//!在 JSX 中嵌入表达式
// const name = "Josh Perez";
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(element, domContainer);

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
};


// const element = (
//   <div>
//     Hello, {getGreeting(user)}
//   </div>
// );


//!JSX 特定属性 
// const element = <div tabIndex="0"></div>;

// 在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号
// const element = <img src={user.avatarUrl}></img>;
// const element = <img src={user.avatarUrl} />;



//!JSX 也是一个表达式 
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

//!JSX 防止注入攻击 
let response = '>?id=1'
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;




ReactDOM.render(element, domContainer);
