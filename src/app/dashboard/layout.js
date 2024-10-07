"use client";
import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  const { Item } = Breadcrumb;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const pathname = usePathname();

  const breadcrumbNameMap = {
    "/dashboard": "Dashboard",
    "/dashboard/product-list": "Product List",
    "/dashboard/seller-supplier": "Sellers & Suppliers",
    "/dashboard/profit-margin": "Profit Margin",
    "/dashboard/customer-agent": "Customer Agent",
    "/dashboard/affiliate-program": "Affiliate Program",
  };

  const items = [
    { key: "1", label: <Link href="/dashboard">Dashboard</Link> },
    {
      key: "2",
      label: <Link href="/dashboard/product-list">Product List</Link>,
    },
    {
      key: "3",
      label: <Link href="/dashboard/seller-supplier">Seller/Supplier</Link>,
    },
    {
      key: "4",
      label: <Link href="/dashboard/profit-margin">Profit Margin</Link>,
    },
    {
      key: "5",
      label: <Link href="/dashboard/customer-agent">Customer Agent</Link>,
    },
    {
      key: "6",
      label: <Link href="/dashboard/affiliate-program">Affiliate Program</Link>,
    },
  ];

  const pathSnippets = pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Item key={url}>
        <Link href={url}>{breadcrumbNameMap[url]}</Link>
      </Item>
    );
  });

  const breadcrumbItems = [
    <Item key="admin">
      <Link href="/dashboard">Admin</Link>
    </Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Layout
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image src={Logo} width={35} height={35} alt="gmart-logo" />

        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "flex-end",
          }}
        />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
            verticalAlign: "middle",
            marginLeft: "50px",
          }}
          size="large"
        >
          A
        </Avatar>
      </Header>
      <Content
        style={{
          padding: "0 48px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          {breadcrumbItems}
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            flexGrow: 1,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#003459",
          color: "white",
          marginTop: "48px",
          height: "35px",
        }}
      >
        GMart ©{new Date().getFullYear()} Created by GMart SL
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
