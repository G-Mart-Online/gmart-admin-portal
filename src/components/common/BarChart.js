import { THEME_OPTIONS } from "@/constants/constants";
import { Column } from "@ant-design/charts";
import React from "react";

const BarChart = ({ data }) => {
  
  const config = {
    data,
    xField: "letter",
    yField: "frequency",
    height: 360,

    onReady: ({ chart }) => {
      try {
        const { height } = chart._container.getBoundingClientRect();
        const tooltipItem = data[Math.floor(Math.random() * data.length)];
        chart.on(
          "afterrender",
          () => {
            chart.emit("tooltip:show", {
              data: {
                data: tooltipItem,
              },
              offsetY: height / 2 - 60,
            });
          },
          true
        );
      } catch (e) {
        console.error(e);
      }
    },
  };
  return <Column {...config} />;
};

export default BarChart;
