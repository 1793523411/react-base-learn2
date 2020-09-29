import React from "react";

function ActionLink() {
  function handleClick(e) {
    // 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写
    // <a href="#" onclick="console.log('The link was clicked.'); return false">
    //   Click me
    // </a>;
    // e.preventDefault();
    console.log("The link was clicked.");
  }
  return (
    // eslint-disable-next-line
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, id: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  //!你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined,这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this
  //   如果觉得使用 bind 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数
  //   如果你没有使用 class fields 语法，你可以在回调中使用箭头函数
  //?共三种方法：1绑定2，js里箭头函数3，jsx里箭头函数，这是要加调用函数的括号
  //* 最后一种语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题
  // 为了在回调中使用 `this`，这个绑定是必不可少的    this.handleClick = this.handleClick.bind(this);  }
  handleClick() {
    this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  }

  //   handleClick = ()=> {
  //     this.setState((state) => ({ isToggleOn: !state.isToggleOn }));
  //   }

  deleteRow(id, e) {
    console.log(id);
    console.log(e);
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick}> */}
        <button onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/* 向事件处理程序传递参数  */}
        {/*在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递 */}
        <button onClick={(e) => this.deleteRow(this.state.id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, this.state.id)}>
          Delete Row
        </button>
      </div>
    );
  }
}

export { ActionLink, Toggle };
