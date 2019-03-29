import React, { Component } from "react";
import Routes from "./routes";
import "./global.css";
import { Header, About } from "./components";

export default class App extends Component {
  state = {
    about: [
      {
        key: 1,
        icon: 'react',
        title: "Techy",
        shortDesc:
          "Dolor velit pariatur aute consequat consequat tempor. Duis magna commodo enim ullamco quis nulla exercitation deserunt do commodo ea sint labore dolor."
      },
      {
        key: 2,
        icon: 'vue',
        title: "Desenvolvedor",
        shortDesc:
          "Dolor velit pariatur aute consequat consequat tempor. Duis magna commodo enim ullamco quis nulla exercitation deserunt do commodo ea sint labore dolor."
      },
      {
        key: 3,
        icon: 'git',
        title: "Freelancer",
        shortDesc:
          "Dolor velit pariatur aute consequat consequat tempor. Duis magna commodo enim ullamco quis nulla exercitation deserunt do commodo ea sint labore dolor."
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <About content={this.state.about} />
      </div>
    );
  }
}
