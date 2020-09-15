import React from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import { TemplateConsumer } from "../../context/context.js";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
export default function setting() {
  return (
    <TemplateConsumer>
      {(value) => {
        const { ChangeColor, OpacityBar, ChangeSetting } = value;
        return (
          <SettingWrapper Opacity={OpacityBar}>
            <div className="setting" onClick={ChangeSetting}>
              <AiFillSetting className="icon-setting" />
            </div>
            <div className="options">
              <div className="row">
                <div className="col-11 mx-auto text-white">
                  <div className="mx-auto text-center p-4">
                    <small className="font-main text-uppercase">
                      siderbar background
                    </small>
                    <div className="sidebar">
                      <span
                        className="one"
                        onClick={() =>
                          ChangeColor("linear-gradient(0deg, #ba54f5, #e14eca)")
                        }
                      ></span>
                      <span
                        className="two"
                        onClick={() =>
                          ChangeColor("linear-gradient(0deg, #3358f4, #1d8cf8)")
                        }
                      ></span>
                      <span
                        className="three"
                        onClick={() =>
                          ChangeColor("linear-gradient(0deg, #0098f0, #00f2c3)")
                        }
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="col-11 mx-auto">
                  <button className="btn btn-git w-100 mb-3">
                    <a
                      className="text-light btn-git"
                      href="https://github.com/yousef2213"
                      target="blank"
                    >
                      Github
                      <AiFillGithub className="link-a" />
                    </a>
                  </button>
                  <button className="btn btn-facebook w-100 mb-3 rounded">
                    <a
                      className="text-light btn-facebook"
                      target="blank"
                      href="https://www.facebook.com/profile.php?id=100006110625520"
                    >
                      Facbook
                      <FaFacebook className="link-a" />
                    </a>
                  </button>
                  <button className="btn btn-twitter w-100 mb-3">
                    <a
                      className="text-light btn-twitter"
                      href="https://twitter.com/yousefayman88 "
                      target="blank"
                    >
                      Twitter
                      <AiFillTwitterCircle className="link-a" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SettingWrapper>
        );
      }}
    </TemplateConsumer>
  );
}

const SettingWrapper = styled.div`
  .setting {
    position: fixed;
    right: 0;
    top: 130px;
    width: 64px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1031;
    border-radius: 8px 0 0 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .setting .icon-setting {
    color: #ccc;
    font-size: 29px;
    border-radius: 0 0 6px 6px;
  }

  .options {
    position: fixed;
    right: 60px;
    background-color: #212121;
    width: 250px;
    border-radius: 8px 0 0 8px;
    text-align: center;
    top: ${(props) => (props.Opacity ? "100px" : "-329px")};;
    padding: 10px;
    z-index: 111111;
    transition: all 0.3s ease-in-out;
    opacity: ${(props) => (props.Opacity ? "1" : "0")};
  }

  .light,
  .dark {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    margin: 5px;
    border: 1px solid #2185f8;
  }

  .dark {
    background-color: #1e1e2e;
  }

  .light {
    background-color: #f6f6f6;
  }

  .sidebar span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    margin: 5px;
    border: 1px solid #f6f6f6;
  }

  .sidebar span.one {
    background: linear-gradient(0deg, #ba54f5, #e14eca);
  }

  .sidebar span.two {
    background: linear-gradient(0deg, #3358f4, #1d8cf8);
  }

  .sidebar span.three {
    background: linear-gradient(0deg, #0098f0, #00f2c3);
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
  .btn-git {
    background: linear-gradient(0deg, #ba54f5, #e14eca);
  }

  .btn-facebook {
    background: linear-gradient(0deg, #3358f4, #1d8cf8);
  }

  .btn-twitter {
    background: linear-gradient(0deg, #0098f0, #00f2c3);
  }

  .btn-git:hover,
  .btn-facebook:hover,
  .btn-twitter:hover {
    text-decoration: none;
  }
`;
