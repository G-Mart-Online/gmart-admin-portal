"use client";
import { RightOutlined } from "@ant-design/icons";
import { Card, Flex, Progress, Typography } from "antd";
import React from "react";

const OrderSummaryCard = () => {
  return (
    <Card title="Order Summary" hoverable extra={<RightOutlined />}>
      <Flex vertical gap="large">
        <Flex vertical gap="small">
          <Typography.Paragraph>Pending Orders</Typography.Paragraph>
          <Progress percent={60} size={{ height: 20 }} strokeColor="#faad14" />
        </Flex>
        <Flex vertical gap="small">
          <Typography.Paragraph>Shipped Orders</Typography.Paragraph>
          <Progress percent={20} size={{ height: 20 }} />
        </Flex>
        <Flex vertical gap="small">
          <Typography.Paragraph>Delivered Orders</Typography.Paragraph>
          <Progress percent={10} size={{ height: 20 }} strokeColor="#52c41a" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default OrderSummaryCard;
