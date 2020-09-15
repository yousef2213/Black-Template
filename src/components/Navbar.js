import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiDashboardFill } from "react-icons/ri";
import { FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { HiTemplate, HiUser } from "react-icons/hi";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import ReactLogo from "../imgs/react.png";
import { TemplateConsumer } from "../context/context.js";
import { BiChevronLeft } from "react-icons/bi";

export default function Navbar() {
  return (
    <TemplateConsumer>
      {(value) => {
        const { CloseSidebar } = value;
        return (
          <NavWrapper className="mt-5 p">
            <div className="div-iconss">
              <BiChevronLeft className="iconss" onClick={CloseSidebar} />
            </div>
            <div className="d-flex justify-content-between mx-auto">
              <img src={ReactLogo} className="react-logo" alt="react logo" />

              <h6 className="text-center text-white font-main align-self-center link mr-4 pr-4 pt-2">
                <a
                  className="text-white"
                  href={
                    `https://www.facebook.com/profile.php?id=100006110625520` ||
                    `https://twitter.com/yousefayman88`
                  }
                  target="blank"
                >
                  <span className="text">creative tim</span>
                </a>
              </h6>
            </div>
            <hr className="w-75" />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-none text-white text-center border-0 pb-4">
                <Link to="/" className="link" onClick={CloseSidebar}>
                  <span className="icon-link">
                    <RiDashboardFill />
                  </span>
                  <span className="pl-2 text">dashboard</span>
                </Link>
              </li>
              <li className="list-group-item bg-none text-white text-center border-0 py-4">
                <Link to="/profile" className="link" onClick={CloseSidebar}>
                  <span className="icon-link">
                    <HiUser />
                  </span>
                  <span className="text">user profile</span>
                </Link>
              </li>
              <li className="list-group-item bg-none text-white text-center border-0 py-4">
                <Link to="/map" className="link" onClick={CloseSidebar}>
                  <span className="icon-link">
                    <FaMapMarkerAlt className="icon-link" />
                  </span>
                  <span className="pl-1 pr-4 text">map</span>
                </Link>
              </li>
              <li className="list-group-item bg-none text-center border-0 py-4">
                <Link to="/templates" className=" link" onClick={CloseSidebar}>
                  <span className="icon-link">
                    <HiTemplate />
                  </span>
                  <span className="text">templates</span>
                </Link>
              </li>
              <li className="list-group-item bg-none text-center border-0 py-4">
                <Link to="/contact" className=" link" onClick={CloseSidebar}>
                  <span className="icon-link">
                    <IoMdContacts />
                  </span>
                  <span className="text">Contact</span>
                </Link>
              </li>
              <li>
                <div className="icons">
                  <a
                    className="text-muted"
                    target="blank"
                    href="https://www.facebook.com/profile.php?id=100006110625520"
                  >
                    <FaFacebook className="link-a" />
                  </a>
                  <a
                    className="text-muted"
                    href="https://twitter.com/yousefayman88 "
                    target="blank"
                  >
                    <AiFillTwitterCircle className="link-a" />
                  </a>
                  <a
                    className="text-muted"
                    href="https://github.com/yousef2213"
                    target="blank"
                  >
                    <AiFillGithub className="link-a" />
                  </a>
                </div>
              </li>
            </ul>
          </NavWrapper>
        );
      }}
    </TemplateConsumer>
  );
}

const NavWrapper = styled.div`
  .react-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .icon-link {
    font-size: 20px;
    margin-right: 10px;
  }
  .icons {
    text-align: center;
    margin-top: 60px;
  }
  .link-a {
    font-size: 25px;
    margin: 2px;
    color: #fff;
  }
`;
