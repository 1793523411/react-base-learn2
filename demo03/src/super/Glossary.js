import React, { Fragment } from "react";

// 语义化的 HTML 是无障碍辅助功能网络应用的基础。 利用多种 HTML 元素来强化您网站中的信息通常可以使您直接获得无障碍辅助功能
// function ListItem({ item }) {
//   return (
//     <Fragment>
//       {" "}
//       <dt>{item.term}</dt>
//       <dd>{item.description}</dd>
//     </Fragment>
//   );
// }

// React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
// 当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 短语法
function ListItem({ item }) {
  return (
    <>
      {" "}
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />{" "}
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.click3 = this.click3.bind(this);
  }
  click() {
    this.inputElement.current.focus();
  }
  click2 = () => {
    this.inputElement.current.focus();
  };
  click3() {
    this.inputElement.current.focus();
  }
  render() {
    return (
      <>
        <button onClick={() => this.click()}>focus jsx解决</button>
        <button onClick={this.click2}>focus 箭头函数解决</button>
        <button onClick={this.click3}>focus 绑定this解决</button>
        <CustomTextInput inputRef={this.inputElement} />{" "}
      </>
    );
  }
}

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  onClickOutsideHandler(event) {
    if (
      this.state.isOpen &&
      !this.toggleContainer.current.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  }
  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，  // 我们需要通过这个步骤确认这个元素的一个子节点  // 是否得到了焦点。
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({ isOpen: false });
    });
  }
  // 如果一个子节点获得了焦点，不要关闭弹窗。
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }
  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点    // 来帮助我们。
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        {" "}
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export { Glossary, CustomTextInput, Parent, OuterClickExample, BlurExample };
