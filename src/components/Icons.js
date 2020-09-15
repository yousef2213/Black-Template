import React from "react";
import { BsList } from "react-icons/bs";
import { TemplateConsumer } from "../context/context.js";
function Icons() {
  return (
    <TemplateConsumer>
      {(value) => {
        const { OpenSidebar } = value;
        return (
          <div className="icon-div">
            <BsList className="icon-nav" onClick={OpenSidebar} />
          </div>
        );
      }}
    </TemplateConsumer>
  );
}

export default Icons;
