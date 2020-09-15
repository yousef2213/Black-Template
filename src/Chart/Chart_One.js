// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import spline from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, spline, FusionTheme);

const Chart_One = (props) => {
  const chartConfigs = {
    type: "spline", // The chart type
    width: "100%", // Width of the chart
    height: "250", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Skills",
        subCaption: "Template React.js",
        captionAlignment: "left",
        labelFontSize: "10",
        yAxisValueFontSize: "10",
        yAxisValueFontColor: "#ccc",
        labelFontColor: "#ccc",
        captionFontSize: "20",
        captionFontColor: "#ccc",
        captionFontBold: false,
        decimals: 0,
        pieRadius: "40%",
        bgColor: "#27293d",
        theme: "fusion",
      },
      // Chart Data
      data: [
        {
          label: "HTML",
          value: "80",
        },
        {
          label: "HTML5",
          value: "70",
        },
        {
          label: "CSS",
          value: "80",
        },
        {
          label: "CSS3",
          value: "75",
        },
        {
          label: "JAVASCRIPT",
          value: "80",
        },
        {
          label: "JQUERY",
          value: "50",
        },
        {
          label: "REACT.JS",
          value: "80",
        },
        {
          label: "VUE.JS",
          value: "70",
        },
        {
          label: "PAYPAL API",
          value: "60",
        },
        {
          label: "STYLED-COMPONENT",
          value: "60",
        },
        {
          label: "SASS",
          value: "60",
        },
        {
          label: "BOOTSTRAP",
          value: "80",
        },
      ],
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Chart_One;
