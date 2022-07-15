import { Card, Col, Row } from "antd";
import React from "react";
import LoginForm from "./LoginForm";
import "antd/dist/antd.css";
import image1 from "../image/logo.svg";
import Image from "next/image";

const CardLogin = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col>
          <Card
            bordered={false}
            style={{
              width: 450,
              height: 350,
              margin: "auto",
              backgroundColor: "#56B280",
              borderRadius: "10px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Image src={image1} width={"280%"} margin={"auto"} />
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default CardLogin;
