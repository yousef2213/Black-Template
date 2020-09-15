import React, { Component } from "react";

const TemplateContext = React.createContext();

class TemplateProvider extends Component {
  state = {
    OpacityBar: false,
  };

  ChangeColor = (color) => {
    document.querySelector(".n").style.background = color;
  };
  ChangeSetting = () => {
    this.setState({
      OpacityBar: !this.state.OpacityBar,
    });
  };

  OpenSidebar = (e) => {
    let navBar = document.querySelector(".n");
    let Icondiv = document.querySelector(".icon-div");
    navBar.classList.add("addWidth");
    Icondiv.classList.add("addNone");
  };
  CloseSidebar = () => {
    let navBar = document.querySelector(".n");
    let Icondiv = document.querySelector(".icon-div");
    navBar.classList.remove("addWidth");
    Icondiv.classList.remove("addNone");
  };
  render() {
    return (
      <TemplateContext.Provider
        value={{
          ...this.state,
          ChangeColor: this.ChangeColor,
          ChangeSetting: this.ChangeSetting,
          OpenSidebar: this.OpenSidebar,
          CloseSidebar: this.CloseSidebar,
        }}
      >
        {this.props.children}
      </TemplateContext.Provider>
    );
  }
}

const TemplateConsumer = TemplateContext.Consumer;

export { TemplateConsumer, TemplateProvider };
