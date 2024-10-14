"use client";
import { Button, Popconfirm, Space, Table } from "antd";
import React from "react";

const SuppliersTab = () => {
  const suppliers = [
    {
      id: 1,
      name: "TechSupply Co.",
      level: 1,
      contactNo: "123-456-7890",
      totalOrders: 500,
    },
    {
      id: 2,
      name: "SoundMaster",
      level: 2,
      contactNo: "234-567-8901",
      totalOrders: 320,
    },
    {
      id: 3,
      name: "Comfort Seating",
      level: 1,
      contactNo: "345-678-9012",
      totalOrders: 200,
    },
    {
      id: 4,
      name: "PaperWorld",
      level: 3,
      contactNo: "456-789-0123",
      totalOrders: 780,
    },
    {
      id: 5,
      name: "HydroMakers",
      level: 2,
      contactNo: "567-890-1234",
      totalOrders: 410,
    },
    {
      id: 6,
      name: "FitLife Gear",
      level: 1,
      contactNo: "678-901-2345",
      totalOrders: 150,
    },
    {
      id: 7,
      name: "MobileHub",
      level: 1,
      contactNo: "789-012-3456",
      totalOrders: 220,
    },
    {
      id: 8,
      name: "BrightLight Co.",
      level: 3,
      contactNo: "890-123-4567",
      totalOrders: 360,
    },
    {
      id: 9,
      name: "SpeedWear",
      level: 1,
      contactNo: "901-234-5678",
      totalOrders: 290,
    },
    {
      id: 10,
      name: "MugCraft",
      level: 1,
      contactNo: "012-345-6789",
      totalOrders: 500,
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
    // {
    //   title: "Level",
    //   dataIndex: "level",
    //   key: "level",
    // },
    {
      title: "contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Total Orders",
      dataIndex: "totalOrders",
      key: "totalOrders",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this supplier?"
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
      <Table columns={columns} dataSource={suppliers} />
    </div>
  );
};

export default SuppliersTab;
