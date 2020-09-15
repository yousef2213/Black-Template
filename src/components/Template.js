import React from "react";
import Projects from "../data/Projects";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
export default function Template() {
  console.log(Projects);
  return (
    <ListWrapper>
      <h6 className="font-main text-light text-capitalize pb-3">
        some templates
      </h6>
      <ul className="list-group back">
        {Projects.map((temp) => {
          return (
            <li
              key={temp.id}
              className="list-group-item back text-muted template1 mb-2 rounded"
            >
              <div className="d-flex">
                <img src={temp.img} className="img-template" alt="Personal" />
                <h6 className="align-self-center text-white font-main pl-3">
                  {temp.name}
                  <br />
                  <small className="text-muted">{temp.small}</small>
                </h6>
              </div>
              <a href={temp.link} target="blank">
                <BsArrowRightShort className="arrow" />
              </a>
            </li>
          );
        })}
      </ul>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  .template1 {
    display: flex !important;
    justify-content: space-between;
  }
  .template1 img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .arrow {
    font-size: 25px;
  }
`;
