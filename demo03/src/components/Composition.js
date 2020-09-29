import React from "react";
import "./Composition.css";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}{" "}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title"> Welcome </h1>{" "}
      <p className="Dialog-message"> Thank you for visiting our spacecraft! </p>{" "}
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}

{
  /* <Contacts /> 和 <Chat /> 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。这种方法可能使你想起别的库中“槽”（slot）的概念，但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递 */
}
function AppSplitPane() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

function Contacts() {
  return <div>Contacts</div>;
}

function Chat() {
  return <div>Chat</div>;
}

function Dialog2(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title} </h1>
      <p className="Dialog-message">{props.message} </p>
    </FancyBorder>
  );
}

function WelcomeDialog2() {
  return (
    <Dialog2
      title="Welcome2"
      message="Thank2 you2 for2 visiting2 our2 spacecraft2!"
    />
  );
}

// 组合也同样适用于以 class 形式定义的组件。
function Dialog(props) {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}{" "}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />{" "}
        <button onClick={this.handleSignUp}> Sign Me Up! </button>{" "}
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export { WelcomeDialog, AppSplitPane, WelcomeDialog2 ,SignUpDialog};


// 那么继承呢？ 
// 层次的情况。

// Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。

// 如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们