import React from "react";

// function Tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   return element
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: props.date };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Tick() {
  return <Clock date={new Date()} />;
}

export default Tick;

//!正确地使用 State

// 不要直接修改 State 而是应该使用 setState():,构造函数是唯一可以给 this.state 赋值的地方

// // State 的更新可能是异步的
// 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
// // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

// 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数
// // Correct
// this.setState((state, props) => ({
//   counter: state.counter + props.increment,
// }));

// // Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

// State 的更新会被合并 

// 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state,这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments

//!数据是向下流动的 
// 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件,这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问,组件可以选择把它的 state 作为 props 向下传递到它的子组件中
// eslint-disable-next-line
{/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}

// 这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件

// 在 React 应用中，组件是有状态组件还是无状态组件属于组件实现的细节，它可能会随着时间的推移而改变。你可以在有状态的组件中使用无状态的组件，反之亦然