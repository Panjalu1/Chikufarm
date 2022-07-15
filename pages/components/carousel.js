import Image from "next/image";
import { Carousel, Col, Divider, Layout, Row, Content } from "antd";
import React from "react";
import Jumbo1 from "../image/ayam1.jpg";

const contentStyle = {
  background: "black",
  color: "#fff",
  position: "relative",
};

function Jumbotron() {
  return (
    <>
      <Carousel>
        <div>
          <div style={contentStyle}>
            <Image src={Jumbo1} layout="responsive" />
            <Layout>
              <Divider orientation="left">Horizontal</Divider>
              <Row
                align="middle"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <Col span={10} offset={1}>
                  <h1
                    style={{
                      color: "black",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </h1>
                </Col>
                <Col span={10} offset={1}>
                  <h1
                    style={{
                      color: "black",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </h1>
                </Col>
              </Row>
            </Layout>
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}

export default Jumbotron;
