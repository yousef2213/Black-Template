import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Personal from "../imgs/personal.png";
import styled from "styled-components";

export default function UserProfile() {
  const [Username, setUsername] = useState("yousef ayman");
  const [Work, setWork] = useState("Front-end Developer React/Vue");
  const [email, setEmail] = useState("yousefaymanelsayed@gmail.com");
  const [Country, setCountry] = useState("Eg");
  const [City, setCity] = useState("Cairo");
  const [Firstname, setFirstname] = useState("yousef");
  const [Lastname, setLastname] = useState("ayman");
  return (
    <div className="row">
      <div className="col-12 col-md-7  rounded">
        <FormWrapper className="rounded mt-2">
          <h6 className="text-light font-main pb-3 rounded">
            Put Your Information :
          </h6>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <small
                  htmlFor="Username "
                  className="text-light font-main pb-2 d-inline-block"
                >
                  Username
                </small>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={Username || Firstname + Lastname}
                  placeholder="Username"
                />
              </div>
              <div className="form-group col-md-6">
                <small
                  htmlFor="email "
                  className="text-light font-main pb-2 d-inline-block"
                >
                  Email address
                </small>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <small
                  htmlFor="FirstName"
                  className="text-light font-main pb-2 d-inline-block"
                >
                  First Name
                </small>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="FirstName"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={Firstname}
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <small
                  htmlFor="Username "
                  className="text-light font-main pb-2 d-inline-block"
                >
                  Last Name
                </small>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="LastName"
                  onChange={(e) => setLastname(e.target.value)}
                  value={Lastname}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <small
                htmlFor="Working"
                className="text-light font-main pb-2 d-inline-block"
              >
                Working
              </small>
              <input
                type="text"
                className="form-control form-control-sm"
                id="Working"
                placeholder="Egypt"
                onChange={(e) => setWork(e.target.value)}
                value={Work}
              />
            </div>{" "}
            <div className="form-row">
              <div className="form-group col-md-6">
                <small
                  htmlFor="City"
                  className="text-light font-main pb-2 d-inline-block"
                >
                  City
                </small>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(e) => setCity(e.target.value)}
                  value={City}
                  id="City"
                  placeholder="Cairo, or Zagazig"
                />
              </div>
              <div className="form-group col-md-6">
                <small
                  htmlFor="Country"
                  className="text-light font-main pb-2 d-inline-block"
                >
                  Country
                </small>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="Country"
                  placeholder="Egypt"
                  onChange={(e) => setCountry(e.target.value)}
                  value={Country}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <small
                  htmlFor="about"
                  className="text-light font-main pb-2 d-inline-block"
                >
                  Message For You
                </small>
                <p className="parg">
                  Make Your World <BiWorld className="icon-world" />
                </p>
              </div>
            </div>
          </form>
        </FormWrapper>
      </div>
      <div className="col-12 col-md-5">
        <InfoWrapper className="info rounded mt-2">
          <img src={Personal} alt="Personal Img" />
          <h6 className="text-capitalize pt-3">{Username}</h6>
          <small className="text-capitalize">{Work}</small>
          <br />
          <small className="text-capitalize text-muted">{email}</small>
          <br />
          <small className="text-capitalize text-primary">
            {Country} / {City}
          </small>
          <p className="pt-5 text-muted">
            Hello, I am Yousef Ayman and I am a web developer. I live and work
            in Cairo . I spend most of my day, experimenting with HTML, CSS and
            JavaScript (and React Library, Vue JavaScript Framework ). I enjoy
            coding and the challenge of learning something new everyday. You can
            also find me at Github{" "}
            <a href="https://github.com/yousef2213" target="blank">
              Yousef Ayman.
            </a>
          </p>
          <div className="icons">
            <a
              className="text-muted"
              target="blank"
              href="https://www.facebook.com/profile.php?id=100006110625520"
            >
              <FaFacebook className="link" />
            </a>
            <a
              className="text-muted"
              href="https://twitter.com/yousefayman88 "
              target="blank"
            >
              <AiFillTwitterCircle className="link" />
            </a>
            <a
              className="text-muted"
              href="https://github.com/yousef2213"
              target="blank"
            >
              <AiFillGithub className="link" />
            </a>
          </div>
        </InfoWrapper>
      </div>
    </div>
  );
}

const FormWrapper = styled.div`
  background-color: #27293d;
  overflow: hidden;
  padding: 20px;
  .parg {
    border: 1px solid #96007f;
    padding: 10px;
    border-radius: 6px;
    color: #ccc;
  }
  .icon-world {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;
const InfoWrapper = styled.div`
  background-color: #27293d;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  color: #fff;
  img {
    width: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
  }
  .link {
    font-size: 25px;
    margin: 2px;
  }
`;
