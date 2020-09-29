import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import Welcome from "./components/Demo01";
import Comment from "./components/Comment";
import Tick from "./components/Tick";
import { ActionLink, Toggle } from "./components/Event";
import { Greeting, LoginControl, Mailbox, Page } from "./components/IF";
import { ListKey, NumberList, Blog } from "./components/ListKey";
import {
  NameForm,
  EssayForm,
  FlavorForm,
  Reservation,
} from "./components/From";
import { Basic } from "./components/Formik";
// eslint-disable-next-line
import {
  BoilingVerdict,
  Calculator,
  TemperatureInput,
} from "./components/BoilingVerdict";
import {
  WelcomeDialog,
  AppSplitPane,
  WelcomeDialog2,
  SignUpDialog,
} from "./components/Composition";
import { FilterableProductTable } from "./components/Finsh";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  const messages = ["React", "Re: React", "Re:Re: React"];

  const numbers = [1, 2, 3, 4, 5, 6];

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
      <hr/>
      <SignUpDialog />
      <WelcomeDialog2 />
      <AppSplitPane />
      <WelcomeDialog />
      {/* <TemperatureInput/> */}
      <Calculator />
      <hr></hr>
      <hr></hr>
      <BoilingVerdict celsius={101} />
      {/* <input value={null} />
      <input value="hi" /> */}
      <Basic />
      <Reservation />
      <hr></hr>
      <FlavorForm />
      <hr></hr>
      <EssayForm />
      <hr></hr>
      <NameForm />
      <Blog posts={posts} />
      <NumberList numbers={numbers} />
      <ListKey numbers={numbers} />
      <Page />
      <Mailbox unreadMessages={messages} />
      <LoginControl />
      <hr></hr>
      <Greeting isLoggedIn={true} />
      <ActionLink />
      <Toggle />
      <Welcome name="ygj" />
      <Welcome name="Sara" /> <Welcome name="Cahal" /> <Welcome name="Edite" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Tick />
      <Tick />
      <Tick />
    </div>
  );
}

export default App;
