"use client";
import ScreenHeader from "@/components/common/ScreenHeader";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import React from "react";

const OrderList = () => {
  const orders = [
    {
      id: 1,
      sellerName: "Elite Gadgets",
      supplierName: "Tech Distributors",
      date: "2024-09-15",
      totalPrice: 1500,
      deliveryLocation: "New York, USA",
      deliveryStatus: "Delivered",
    },
    {
      id: 2,
      sellerName: "Fashion Forward",
      supplierName: "Style Suppliers",
      date: "2024-09-10",
      totalPrice: 1200,
      deliveryLocation: "Los Angeles, USA",
      deliveryStatus: "In Transit",
    },
    {
      id: 3,
      sellerName: "Book Paradise",
      supplierName: "Book Wholesalers",
      date: "2024-09-08",
      totalPrice: 500,
      deliveryLocation: "Chicago, USA",
      deliveryStatus: "Delivered",
    },
    {
      id: 4,
      sellerName: "Smart Living",
      supplierName: "HomeGoods Inc.",
      date: "2024-09-12",
      totalPrice: 1800,
      deliveryLocation: "Dallas, USA",
      deliveryStatus: "Pending",
    },
    {
      id: 5,
      sellerName: "Tech Savvy",
      supplierName: "Tech Distributors",
      date: "2024-09-14",
      totalPrice: 1300,
      deliveryLocation: "Miami, USA",
      deliveryStatus: "Delivered",
    },
    {
      id: 6,
      sellerName: "Sports Gear Hub",
      supplierName: "Fitness Suppliers",
      date: "2024-09-11",
      totalPrice: 950,
      deliveryLocation: "Houston, USA",
      deliveryStatus: "In Transit",
    },
    {
      id: 7,
      sellerName: "Home Comforts",
      supplierName: "Furniture Warehouse",
      date: "2024-09-07",
      totalPrice: 2200,
      deliveryLocation: "San Francisco, USA",
      deliveryStatus: "Delivered",
    },
    {
      id: 8,
      sellerName: "Trendsetters",
      supplierName: "Style Suppliers",
      date: "2024-09-16",
      totalPrice: 1100,
      deliveryLocation: "Seattle, USA",
      deliveryStatus: "Pending",
    },
    {
      id: 9,
      sellerName: "Office Essentials",
      supplierName: "Office Supplies Co.",
      date: "2024-09-09",
      totalPrice: 1600,
      deliveryLocation: "Boston, USA",
      deliveryStatus: "Delivered",
    },
    {
      id: 10,
      sellerName: "Wellness Goods",
      supplierName: "Health Distributors",
      date: "2024-09-13",
      totalPrice: 1400,
      deliveryLocation: "Denver, USA",
      deliveryStatus: "In Transit",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Seller Name",
      dataIndex: "sellerName",
      key: "sellerName",
    },
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      key: "supplierName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Delivery Location",
      dataIndex: "deliveryLocation",
      key: "deliveryLocation",
    },
    {
      title: "Delivery Status",
      dataIndex: "deliveryStatus",
      key: "deliveryStatus",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the order"
            description="Are you sure to delete this order?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button>View</Button>
        </Space>
      ),
    },
  ];

  const confirm = (e) => {
    console.log(e);
  };
  const cancel = (e) => {
    console.log(e);
  };

  return (
    <div>
      <ScreenHeader
        title="Order List"
        icon={<ShoppingOutlined />}
        isFilter={true}
      />
      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default OrderList;
