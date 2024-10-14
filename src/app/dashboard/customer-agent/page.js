"use client";
import ScreenHeader from "@/components/common/ScreenHeader";
import { PlusOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import React from "react";

const CustomerAgent = () => {
  const customerAgents = [
    {
      id: 1,
      name: "John Doe",
      contactNo: "+1 555-1234",
    },
    {
      id: 2,
      name: "Emily Carter",
      contactNo: "+1 555-5678",
    },
    {
      id: 3,
      name: "Michael Lee",
      contactNo: "+1 555-9876",
    },
    {
      id: 4,
      name: "Sophia Wilson",
      contactNo: "+1 555-6543",
    },
    {
      id: 5,
      name: "Daniel Martinez",
      contactNo: "+1 555-3210",
    },
    {
      id: 6,
      name: "Olivia Brown",
      contactNo: "+1 555-8765",
    },
    {
      id: 7,
      name: "James Smith",
      contactNo: "+1 555-4321",
    },
    {
      id: 8,
      name: "Ava Johnson",
      contactNo: "+1 555-5432",
    },
    {
      id: 9,
      name: "William Garcia",
      contactNo: "+1 555-6789",
    },
    {
      id: 10,
      name: "Mia Taylor",
      contactNo: "+1 555-7890",
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
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
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
  return (
    <div>
      <ScreenHeader
        title="Customer Service Agent"
        icon={<RobotOutlined />}
        isFilter={true}
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            Add
          </Button>
        }
      />
      <Table columns={columns} dataSource={customerAgents} />
    </div>
  );
};

export default CustomerAgent;
