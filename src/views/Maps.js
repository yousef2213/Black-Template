import React from "react";
import Layout from "../components/Layout.js";
import Map from "../components/Map.js";
export default function Maps() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <Map />
        </div>
      </div>
    </Layout>
  );
}
