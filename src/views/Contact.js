import React from "react";
import Layout from "../components/Layout.js";
export default function Contact() {
  return (
    <Layout>
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="back p-5 mt-4 rounded text-white">
            <h6 className="text-capitalize font-main mb-3 text-light">
              contect with me :
            </h6>
            <form action="https://formspree.io/moqkgrkw" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Yousef Ayman"
                  name="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email.email.com"
                  name="_email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Important !!"
                  name="_important"
                />
              </div>
              <div className="form-group">
                <textarea
                  className ="form-control mb-3  "
                  placeholder="Leave Me Message"
                  rows="4"
                  name="_message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary text-light w-15 font-main">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
