"use client";
import { RightOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import BarChart from "../common/BarChart";

const PaymentSummaryCard = () => {
  const data = [
    { letter: "Last Month", frequency: 2000 },
    { letter: "Last 2 Mon.", frequency: 1500 },
    { letter: "Last 3 mon.", frequency: 1000 },
  ];
  return (
    <Card title="Order Summary" hoverable extra={<RightOutlined />} style={{}}>
      <BarChart data={data} />
    </Card>
  );
};

export default PaymentSummaryCard;
