import { Tabs } from "antd";
import {
  Col,
  Row,
  Grid,
  Form,
  Select,
  Button,
  Dropdown,
  Menu,
  message,
  Space,
  Tooltip,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import cardImg1 from "../image/telur-ayam 1.png";
import cardImg2 from "../image/bibit-ayam 1.png";
import cardImg3 from "../image/kandang-ayam 1.png";
import cardImg4 from "../image/ayam2 2.png";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
const { useBreakpoint } = Grid;
const { TabPane } = Tabs;
const styleTab = {
  fontWeight: "bold",
  fontSize: "50pt",
  borderRight: "solid red 5px",
};

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const pilihAgen = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "Cikarang",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "Pondok Gede",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "Cibitung",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

function ProductHome() {
  const screens = useBreakpoint();
  return (
    <>
      <div className="text-center mt-5 py-10">
        <h4 className=" text-black text-2xl ">Products</h4>
        <div>
          <Row>
            <Col lg={{ span: 5 }} offset={2}>
              <Dropdown overlay={pilihAgen}>
                <Button>
                  <Space>
                    Pilih Agen
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Col>
            <Col lg={{ span: 8 }} offset={1}>
              <p className="text-lg mt-3">
                Order it for you or for your beloved ones
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="h-full bg-[#fff] pb-10">
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-jakarta"
            role="tabpanel"
            aria-labelledby="tabs-jakarta-tab"
          >
            {/* card product */}

            <Row justify="center space-x-5" className="bg-[#fff]">
              {Object.entries(screens)
                .filter((screen) => !!screen[1])
                .map((screen) => console.log(screen[0]))}
              <Col
                lg={{ span: 5 }}
                md={{ span: 5 }}
                sm={{ span: 10 }}
                xs={{ span: 10 }}
                className="pt-5"
              >
                <div className="rounded-lg shadow-lg bg-white ">
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image className="rounded-t-lg" src={cardImg1} alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-l font-medium mb-2">
                      Telur Ayam
                    </h5>
                    <p className="text-gray-700 text-base mb-4">Rp. 25,0000</p>
                  </div>
                </div>
              </Col>
              <Col
                lg={{ span: 5 }}
                md={{ span: 5 }}
                sm={{ span: 10 }}
                xs={{ span: 10 }}
                className=" pt-5"
              >
                <div className="rounded-lg shadow-lg bg-white ">
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image className="rounded-t-lg" src={cardImg2} alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-l font-medium mb-2">
                      Bibit Ayam
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      Rp. 63,600,000
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg={{ span: 5 }}
                md={{ span: 5 }}
                sm={{ span: 10 }}
                xs={{ span: 10 }}
                className="pt-5"
              >
                <div className="rounded-lg shadow-lg bg-white ">
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image className="rounded-t-lg" src={cardImg3} alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-l font-medium mb-2">
                      Siap Panen
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      Rp. 50,000,000
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg={{ span: 5 }}
                md={{ span: 5 }}
                sm={{ span: 10 }}
                xs={{ span: 10 }}
                className="pt-5"
              >
                <div className="rounded-lg shadow-lg bg-white ">
                  <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <Image className="rounded-t-lg" src={cardImg4} alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-l font-medium mb-2">
                      Ayam Afkir
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      Rp. 66,600,000
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductHome;
