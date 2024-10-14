import { Card } from "antd";
import React from "react";

const DashboardStatCard = ({
  icon,
  title,
  primaryContent,
  secondaryContent,
}) => {
  return (
    <Card hoverable>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <div style={{ fontSize: "24px", marginRight: "12px" }}>{icon}</div>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</div>
      </div>
      <div style={{ fontSize: "36px", fontWeight: "bold", margin: "8px 0" }}>
        {primaryContent}
      </div>
      <div style={{ fontSize: "14px", color: "#888" }}>{secondaryContent}</div>
    </Card>
  );
};

export default DashboardStatCard;
