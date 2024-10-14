"use client";
import { Col, Flex, Row, Select, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const ScreenHeader = ({ title, icon, isFilter = false, extra = null }) => {
  return (
    <Row glutter={30} style={{ marginBottom: "20px" }}>
      <Col span={12}>
        <Flex gap="middle">
          {icon}
          <Text>{title}</Text>
        </Flex>
      </Col>
      <Col span={12}>
        {isFilter && (
          <Flex justify="flex-end" gap="small">
            <Select
              placeholder="Filter"
              allowClear
              style={{ width: 120 }}
              onChange={() => console.log("clicked")}
              options={[{ value: "pending", label: "Pending" }]}
            />
            {extra && extra}
          </Flex>
        )}
      </Col>
    </Row>
  );
};

export default ScreenHeader;
