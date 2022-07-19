import Image from "next/image";
import logo from "../image/logo.png";
import { Layout, Col, Row } from "antd";
import React from "react";
import Link from "next/link";
const { Header, Footer, Sider, Content } = Layout;

function FooterCustomer() {
  return (
    <>
      <Layout>
        <footer className="bg-emerald-600 py-5">
          <div className="  border-white">
            <div className="ml-20">
              <hr className="ml-10" style={{ width: "900px" }}></hr>
            </div>
          </div>
          <Row className="flex w-10/12 ml-20 ">
            <Col lg={{ span: 5 }} offset={1}>
              <Image src={logo} objectFit="contain" width={241} height={80} />
              <p className="text-white">
                Farms with processes and quality that are maintained and
                reliable
              </p>
            </Col>

            <Col lg={{ span: 3 }}></Col>
            <Col lg={{ span: 3 }}></Col>
            <Col lg={{ span: 3 }} offset={1} className="py-7">
              <Link href="/product">
                <a className="text-white">Discovery</a>
              </Link>
              <p className="mt-4 mb-4">
                <a href="#!" className="text-white">
                  Product
                </a>
              </p>
            </Col>
            <Col lg={{ span: 3 }} offset={1} className="py-7">
              <Link href="/product">
                <a className="text-white">About</a>
              </Link>
              <p className="mt-4 mb-4">
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white">
                  Agen
                </a>
              </p>
            </Col>
            <Col lg={{ span: 3 }} offset={1} className="py-7">
              <Link href="/product">
                <a className="text-white">Info</a>
              </Link>
              <p className="mt-4 mb-4">
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white">
                  Privacy Policies
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-white">
                  Term and Condition
                </a>
              </p>
            </Col>
          </Row>
        </footer>
      </Layout>
    </>
  );
}

export default FooterCustomer;
