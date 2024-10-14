"use client";
import { Button, Popconfirm, Space, Table } from "antd";
import React from "react";

const SellersTab = () => {
  const sellers = [
    {
      id: 1,
      name: "Elite Gadgets",
      level: 3,
      contactNo: "111-222-3333",
      totalSales: 2000,
    },
    {
      id: 2,
      name: "Fashion Forward",
      level: 2,
      contactNo: "222-333-4444",
      totalSales: 1500,
    },
    {
      id: 3,
      name: "Tech Savvy",
      level: 1,
      contactNo: "333-444-5555",
      totalSales: 1000,
    },
    {
      id: 4,
      name: "Home Comforts",
      level: 2,
      contactNo: "444-555-6666",
      totalSales: 2500,
    },
    {
      id: 5,
      name: "Book Paradise",
      level: 3,
      contactNo: "555-666-7777",
      totalSales: 3000,
    },
    {
      id: 6,
      name: "Sports Gear Hub",
      level: 1,
      contactNo: "666-777-8888",
      totalSales: 800,
    },
    {
      id: 7,
      name: "Smart Living",
      level: 2,
      contactNo: "777-888-9999",
      totalSales: 1900,
    },
    {
      id: 8,
      name: "Trendsetters",
      level: 1,
      contactNo: "888-999-0000",
      totalSales: 1100,
    },
    {
      id: 9,
      name: "Office Essentials",
      level: 3,
      contactNo: "999-000-1111",
      totalSales: 2700,
    },
    {
      id: 10,
      name: "Wellness Goods",
      level: 2,
      contactNo: "000-111-2222",
      totalSales: 2200,
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
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Total Sales",
      dataIndex: "totalSales",
      key: "totalSales",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the seller"
            description="Are you sure to delete this seller?"
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
      <Table columns={columns} dataSource={sellers} />
    </div>
  );
};

export default SellersTab;
