import React from "react";
import { ThemeContext } from "./theme-context";

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return (
      <div>
        {/* <Button theme={this.props.theme} /> */}
        <div>{this.props.theme}</div>
      </div>
    );
  }
}

// //通过context传递
// function Toolbar() {
//   return (
//     <div>
//      <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。  // React 会往上找到最近的 theme Provider，然后使用它的值。  // 在这个例子中，当前的 theme 值为 “dark”。
//    static contextType = ThemeContext;
//   render() {
//     return (
//       <div>
//         {/* <Button theme={this.props.theme} /> */}
//         <div>{this.context}</div>
//       </div>
//     );
//   }
// }

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}
ThemedButton.contextType = ThemeContext;

export { Toolbar, ThemedButton };
