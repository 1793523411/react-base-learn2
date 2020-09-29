import React from "react";

function ListKey(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

// 元素的 key 只有放在就近的数组上下文中才有意义
// 比方说，如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上
// 一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性
function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要在这里指定 key：
    <li> {value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 错误！元素的 key 应该在这里指定：
    <ListItem value={number} key={number.toString()} />
  ));
  return <ul>{listItems}</ul>;
}

// key 只是在兄弟节点之间必须唯一
// 数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}> {post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar} <hr />
      {content}{" "}
    </div>
  );
}

// key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值
// const content = posts.map((post) => (
//   <Post key={post.id} id={post.id} title={post.title} />
// ));
// Post 组件可以读出 props.id，但是不能读出 props.key

// 在 JSX 中嵌入 map() ，JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果，这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在 JavaScript 中一样，何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) => (
//         <ListItem key={number.toString()} value={number} />
//       ))}{" "}
//     </ul>
//   );
// }

export { ListKey, NumberList, Blog };

// 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key,如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题,如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值
