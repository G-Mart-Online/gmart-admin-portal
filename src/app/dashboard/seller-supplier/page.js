import ScreenHeader from "@/components/common/ScreenHeader";
import SellersTab from "@/components/sellers/SellersTab";
import SuppliersTab from "@/components/suppliers/SuppliersTab";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";

const SellerSupplierList = () => {
  const tabItems = [
    {
      label: "Sellers",
      key: 1,
      children: <SellersTab />,
    },
    {
      label: "Suppliers",
      key: 2,
      children: <SuppliersTab />,
    },
  ];

  return (
    <div>
      <ScreenHeader
        title="Sellers & Suppliers"
        icon={<UsergroupAddOutlined />}
      />
      <Tabs defaultActiveKey="1" type="card" size="small" items={tabItems} />
    </div>
  );
};

export default SellerSupplierList;
