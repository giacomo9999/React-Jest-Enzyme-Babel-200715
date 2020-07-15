import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Form from "./Form.js";

class App extends Component {
  state = { listItem: "", items: [], isDarkTheme: false };

  handleChange = ({ target: { value } }) => {
    this.setState({ listItem: value });
  };

  handleClick = () => {
    this.setState((state) => ({
      items: [...state.items, this.state.listItem],
      listItem: "",
    }));
  };

  handleToggleTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    const theme = this.state.isDarkTheme ? "dark" : "light";
    return (
      <div className={theme}>
        <Header
          theme={theme}
          message={this.props.message}
          handleToggleTheme={this.handleToggleTheme}
        />
        <Form
          handleChange={this.handleChange}
          value={this.state.listItem}
          handleClick={this.handleClick}
        />
        <List items={this.state.items} />
      </div>
    );
  }
}

App.defaultProps = { message: "Hello World" };

export default App;
