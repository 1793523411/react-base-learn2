import React from "react";
import ReactDom from "react-dom";

// class Todo extends React.Component {
//   render() {
//     return <li>Hello, 图雀</li>;
//   }
// }

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];

function Todo(props) {
  //   return <li>Hello, {props.content}</li>;
  //   if (props.content === "图雀") {
  //     return <li>你好, {props.content}</li>;
  //   } else {
  //     return <li>Hello, {props.content}</li>;
  //   }

  if (props.index % 2 === 0) {
    return (
      <li style={{ color: "red", backgroundColor: "black" }}>
        Hello, {props.content}
      </li>
    );
  }

  return <li>Hello, {props.content}</li>;
}

function Button() {
  function handleClick() {
    console.log("按钮被点击了");
  }

  return <button onClick={handleClick}>点我</button>;
}

function Link() {
  function handleClick(event) {
    event.preventDefault();
    console.log("链接被点击了，但是它不会跳转页面，因为默认行为被禁用了");
  }

  return (
    <a onClick={handleClick} href="https://tuture.co">
      点我
    </a>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        todoList: todoList,
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleChange(e) {
    this.setState({
      nowTodo: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const newTodoList = this.state.todoList.concat(this.state.nowTodo);

    this.setState({
      todoList: newTodoList,
      nowTodo: "",
    });
  }

  render() {
    //   return <div>Hello, World</div>;
    // const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    const renderTodoList = todoList.map((todo) => <Todo content={todo} />);
    return (
      <ul>
        {/* <li>Hello, {todoList[0]}</li>
        <li>Hello, {todoList[1]}</li>
        <li>Hello, {todoList[2]}</li>
        <li>Hello, {todoList[3]}</li> */}
        {/* <Todo content={this.state.todoList[0]} />
        <Todo content={this.state.todoList[1]} />
        <Todo content={this.state.todoList[2]} />
        <Todo content={this.state.todoList[3]} /> */}
        {/* {renderTodoList}
        {todoList.map((todo,index) => (
          <Todo content={todo} key={key}/>
        ))} */}
        {/* {this.state.todoList.map((todo, index) => (
          <Todo content={todo} key={index} index={index} />
        ))} */}
        <div>
          <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" value={this.state.nowTodo} onChange={(e) => this.handleChange(e)} />
            <div>{this.state.nowTodo}</div>
            <button type="submit">提交</button>
        </form>
          </div>
          <ul>
            {this.state.todoList.map((todo, index) => (
              <Todo content={todo} key={index} index={index} />
            ))}
          </ul>
        </div>
      </ul>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
