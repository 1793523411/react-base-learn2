import React, { useState } from "react";
import {
  Glossary,
  Parent,
  OuterClickExample,
  BlurExample,
} from "./super/Glossary";
// import { Toolbar } from "./super/Context";

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext("light");

function Super() {
  const [inputValue, setInputValue] = useState("");
  const labelText = "labelText";
  function onchangeHandler(e) {
    setInputValue(e.target.value);
  }

  const items = [
    {
      id: 1,
      term: "term",
      description: "description",
    },
    {
      id: 2,
      term: "term2",
      description: "description2",
    },
  ];
  return (
    <div>
      {/* <ThemeContext.Provider value="dark">
        {" "}
        <Toolbar />
      </ThemeContext.Provider> */}
      {/* <Toolbar theme="dark" /> */}
      <BlurExample />
      <OuterClickExample />
      <Parent />
      <Glossary items={items} />
      <input
        type="text"
        aria-label={labelText}
        aria-required="true"
        onChange={onchangeHandler}
        value={inputValue}
        name="name"
      />
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。  // React 会往上找到最近的 theme Provider，然后使用它的值。  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <div>{this.context}</div>;
  }
}

export default Super;
