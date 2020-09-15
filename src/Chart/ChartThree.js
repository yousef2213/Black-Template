// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import bar2d from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, bar2d, FusionTheme);

const chartData = [
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
];

const ChartThree = () => {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "250", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        captionAlignment: "left",
        labelFontSize: "10",
        yAxisValueFontSize: "10",
        yAxisValueFontColor: "#ccc",
        labelFontColor: "#ccc",
        captionFontSize: "20",
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

export default ChartThree;
