// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import doughnut2d from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, doughnut2d, FusionTheme);
// Preparing the chart data
const chartData = [
  {
    label: "REACT.JS",
    value: "80",
  },
  {
    label: "VUE.JS",
    value: "70",
  },
  {
    label: "SASS",
    value: "60",
  },
  {
    label: "BOOTSTRAP",
    value: "80",
  },
];

const ChartFour = () => {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "250", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Librarys & Framework & Css Preprocessor",
        captionAlignment: "left",
        smartLineColor: "#ccc",
        borderColor:"red",
        labelFontColor: "#ccc",
        labelFontSize: "10",
        showShadow: true,
        captionFontSize: "15",
        captionFontColor: "#ccc",
        captionFontBold: false,
        theme: "fusion", //Set the theme for your chart
        decimals: 0,
        pieRadius: "40%",
        bgColor: "#27293d",
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartFour;
