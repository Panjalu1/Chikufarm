import Image from "next/image";
import React from "react";
import Jumbo1 from "../image/ayam1.jpg";
import image2 from "../image/logoGambar.png";
import "tailwindcss/tailwind.css";

function Header() {
  return (
    <>
      <div className="relative ">
        <Image src={Jumbo1} className="vh-100" />
        <div className="flex justify-center absolute  left-0 right-0 top-20 mt-20 pt-10">
          <div className="block rounded-lg shadow-lg bg-white bg-opacity-80 max-w-sm text-center">
            <div className="p-6">
              <Image src={image2} width={45} height={45} />
              <h5 className="text-gray-900 text-l font-medium mb-2">
                The Future Farmer
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-emerald-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-400 hover:shadow-lg focus:bg-emerald-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Discovery Our Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
