import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import React from "react";
import Image from "next/image";
import GambarKanan from "../image/telur-bebek 2.png";

function MoreProduct() {
  return (
    <div className="bg-[#A6EEC7]">
      <div className="grid md:grid-cols-2 md:mx-auto w-10/12 mb-10">
        <div className="w-10/12 mr-10 sm:text-start text-start sm:ml-auto mt-20">
          <br />
          <h1 style={{ textAlign: "justify", fontSize: "30px" }}>
            More chicken and duck eggs
          </h1>
          <p style={{ textAlign: "justify" }}>
            <i class="fa-regular fa-circle-check"></i> High-Quality: Good
            process and high yield
          </p>
          <p style={{ textAlign: "justify" }}>
            <i class="fa-regular fa-circle-check"></i>
            Stable and affordable price
          </p>
          <p style={{ textAlign: "justify" }}>
            <i class="fa-regular fa-circle-check"></i>
            Fast and reliable service process
          </p>
          <br />
          <Button style={{ backgroundColor: "#56B280" }}>Primary Button</Button>
        </div>
        <Image
          src={GambarKanan}
          width={293}
          height={555}
          objectFit="contain"
          className="w-10/12 ml-5"
        />
      </div>
    </div>
  );
}

export default MoreProduct;
