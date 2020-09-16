import React, { Component } from "react";
import Navbar from "./Navbar";
export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="coll-1 rounded mt-3  px-0 n">
            <Navbar />
          </div>
          <div className="col-12 col-md-10 col-lg-10 pt-5 bg-layout mx-auto rounded">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
