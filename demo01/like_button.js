const e = React.createElement;

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
ReactDOM.render(
  <button onClick={() => this.setState({ liked: true })}>Like</button>,
  domContainer
);
