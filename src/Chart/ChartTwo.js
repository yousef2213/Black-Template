// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import area2d from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, area2d, FusionTheme);
// Preparing the chart data
const chartData = [
  {
    label: "DEVELOPER API",
    value: "90",
  },
  {
    label: "PAYPAL API",
    value: "70",
  },
  {
    label: "FACEBOOK API",
    value: "60",
  },
  {
    label: "GITHUB API",
    value: "85",
  },
];

const Chart_One = () => {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "area2d", // The chart type
    width: "100%", // Width of the chart
    height: "250", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "APIS",
        captionAlignment: "left",
        captionFontSize: "20",
        yAxisValueFontSize: "10",
        yAxisValueFontColor: "#ccc",
        captionFontColor: "#ccc",
        labelFontSize: "10",
        labelFontColor: "#ccc",
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

export default Chart_One;
