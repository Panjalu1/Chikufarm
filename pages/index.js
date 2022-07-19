import Head from "next/head";
import Image from "next/image";
import Jumbotron from "./components/header";
import NavigasiTiga from "./components/navbar3";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import FooterCustomer from "./components/footer";
import "antd/dist/antd.css";
import ProductHome from "./components/product";
import OurService from "./components/ourService";
import MoreProduct from "./components/moreProduct";

export default function Home() {
  return (
    <>
      <NavigasiTiga />
      <Header />
      <ProductHome />
      <MoreProduct />
      <OurService />
      <FooterCustomer />
    </>
  );
}
