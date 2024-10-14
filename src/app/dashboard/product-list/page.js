"use client";
import ScreenHeader from "@/components/common/ScreenHeader";
import { ProductOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 150,
    price: 25.99,
    supplier: "TechSupply Co.",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    quantity: 85,
    price: 99.99,
    supplier: "SoundMaster",
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    quantity: 20,
    price: 199.99,
    supplier: "Comfort Seating",
  },
  {
    id: 4,
    name: "Notebook",
    category: "Stationery",
    quantity: 500,
    price: 2.49,
    supplier: "PaperWorld",
  },
  {
    id: 5,
    name: "Water Bottle",
    category: "Kitchenware",
    quantity: 300,
    price: 15.49,
    supplier: "HydroMakers",
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports",
    quantity: 50,
    price: 30.0,
    supplier: "FitLife Gear",
  },
  {
    id: 7,
    name: "Smartphone",
    category: "Electronics",
    quantity: 40,
    price: 699.0,
    supplier: "MobileHub",
  },
  {
    id: 8,
    name: "Desk Lamp",
    category: "Home Decor",
    quantity: 120,
    price: 45.0,
    supplier: "BrightLight Co.",
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "Sports",
    quantity: 60,
    price: 80.0,
    supplier: "SpeedWear",
  },
  {
    id: 10,
    name: "Coffee Mug",
    category: "Kitchenware",
    quantity: 250,
    price: 10.0,
    supplier: "MugCraft",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
    key: "supplier",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Popconfirm
          title="Delete the product"
          description="Are you sure to delete this product?"
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

const ProductList = () => {
  return (
    <div>
      <ScreenHeader
        title="Product List"
        icon={<ProductOutlined size="small" />}
        isFilter={true}
      />
      <Table columns={columns} dataSource={products} />
    </div>
  );
};

export default ProductList;
