"use client";
import { Button, Form, Input, Typography } from "antd";
import styles from "./page.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "../assets/images/logo.png";

export default function Home() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={styles.login_page}>
      <div>
        <Image src={Logo} width={75} height={75} alt="gmart-logo" />
      </div>
      <div className={styles.login_page_form_container}>
        <Form
          className={styles.login_page_form}
          name="login"
          initialValues={{
            remember: true,
          }}
          variant="filled"
          onFinish={onFinish}
        >
          <Typography.Title className={styles.login_page_form_title} level={4}>
            Admin Portal
          </Typography.Title>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
