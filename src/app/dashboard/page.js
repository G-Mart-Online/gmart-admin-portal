import {
  ProductOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import OrderSummaryCard from "@/components/dashboard/OrderSummaryCard";
import PaymentSummaryCard from "@/components/dashboard/PaymentSummaryCard";

const Dashboard = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DashboardStatCard
            title="Total Orders"
            icon={<ShoppingCartOutlined style={{ color: "#1890ff" }} />}
            primaryContent="400"
            secondaryContent="10% vs last month"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DashboardStatCard
            title="Total Sellers"
            icon={<UserOutlined style={{ color: "#52c41a" }} />}
            primaryContent="20"
            secondaryContent="5% vs last month"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DashboardStatCard
            title="Total Suppliers"
            icon={<UserOutlined style={{ color: "#faad14" }} />}
            primaryContent="35"
            secondaryContent="12% vs last month"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DashboardStatCard
            title="Total Products"
            icon={<ProductOutlined style={{ color: "#eb2f96" }} />}
            primaryContent="200"
            secondaryContent="8% vs last month"
          />
        </Col>
        {/* Order Summary, Payment Summary, Order Reviews */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <OrderSummaryCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <PaymentSummaryCard />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8}></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
