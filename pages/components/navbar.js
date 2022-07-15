import { Col, Layout, Menu, Row, Button } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;
import "antd/dist/antd.css";
import image1 from "../pages/image/logo.svg";
import Image from "next/image";

function Navigasi() {
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];
  return (
    <>
      <Layout
        style={{
          overflow: "hidden",
          backgroundColor: " #333",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "2",
        }}
      >
        <Header style={{ background: "white" }}>
          <Row>
            <Col>
              <Image src={image1} width={142} height={60} />
            </Col>
            <Col span={12} offset={5}>
              <Menu items={items} mode="horizontal"></Menu>
            </Col>
            <Col>
              <Button
                type="primary"
                size="middle"
                style={{ marginRight: "20px" }}
              >
                Primary
              </Button>
              <Button type="primary" size="middle">
                Primary
              </Button>
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
}

export default Navigasi;
