"use client";
import { RightOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import BarChart from "../common/BarChart";

const RevenueSummaryCard = () => {
  const data = [
    { letter: "Last Month", frequency: 20000 },
    { letter: "Last 2 Mon.", frequency: 30000 },
    { letter: "Last 3 mon.", frequency: 35000 },
  ];
  return (
    <Card
      title="Revenue Summary"
      hoverable
      extra={<RightOutlined />}
      style={{}}
    >
      <BarChart data={data} />
    </Card>
  );
};

export default RevenueSummaryCard;
