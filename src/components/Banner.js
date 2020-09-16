import React from "react";
import Char from "../Chart/Chart_One.js";
import CharTwo from "../Chart/ChartTwo.js";
import ChartThree from "../Chart/ChartThree.js";
import ChartFour from "../Chart/ChartFour.js";
export default function Banner() {
  return (
    <div>
      <Char />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto mt-5">
          <CharTwo />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mx-auto mt-5">
          <ChartThree />
        </div>
        <div className="col-12 col-md-6 col-lg-4 mx-auto mt-5">
          <ChartFour />
        </div>
      </div>
    </div>
  );
}
