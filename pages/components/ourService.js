import { Tabs } from "antd";
import { Col, Row, Grid, Form, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
import cardImg1 from "../image/quality.png";
import cardImg2 from "../image/payment.png";
import cardImg3 from "../image/pishing.png";
import cardImg4 from "../image/fast respon.png";
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

function OurService() {
  const screens = useBreakpoint();
  return (
    <>
      <div className="text-center mt-5 py-5">
        <h1 className=" text-black text-2xl ">Our Service</h1>

        <p className="text-lg mt-3">Some that chikufarm gave to you</p>
      </div>
      <div className="h-full bg-[#FFF] pb-10">
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-jakarta"
            role="tabpanel"
            aria-labelledby="tabs-jakarta-tab"
          >
            {/* card product */}

            <Row justify="center space-x-5" className="bg-[#FFF]">
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
                    <h5 className="text-gray-900 text-2l font-medium mb-2 text-center">
                      High Quality
                    </h5>
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
                    <h5 className="text-gray-900 text-2l font-medium mb-2 text-center">
                      Easy Payment
                    </h5>
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
                    <h5 className="text-gray-900 text-2l font-medium mb-2 text-center">
                      Warantly and fast delivery
                    </h5>
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
                    <h5 className="text-gray-900 text-2l font-medium mb-2 text-center">
                      Quick Response
                    </h5>
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

export default OurService;
