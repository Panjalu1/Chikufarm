/* This example requires Tailwind CSS v2.0+ */
import "tailwindcss/tailwind.css";
import image1 from "../image/logo.png";
import Link from "next/link";

import "tailwindcss/tailwind.css";
import { useState } from "react";

import Image from "next/image";

export default function NavigasiTiga() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div
        className="w-full bg-white shadow fixed-top"
        style={{ position: "fixed", zIndex: "999" }}
      >
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between md:block">
            <Link href="/">
              <a>
                <Image
                  src={image1}
                  width={142}
                  height={50}
                  objectFit="contain"
                />
              </a>
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-emerald-500 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black ">
                <Link href="">
                  <a className="text-black hover:text-white hover:bg-emerald-500 pt-5 pb-5 px-5 text-lg">
                    Home
                  </a>
                </Link>
              </li>
              <li className="text-black ">
                <Link href="">
                  <a className="text-black hover:text-white hover:bg-emerald-500 pt-5 pb-5 px-5 text-lg">
                    Product
                  </a>
                </Link>
              </li>
              <li className="text-black ">
                <Link href="">
                  <a className="text-black hover:text-white hover:bg-emerald-500 pt-5 pb-5 px-5 text-lg">
                    Contact US
                  </a>
                </Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden sm:inline-block">
              <a
                href=""
                className="inline-block w-full px-4 py-2 text-center text-white bg-emerald-500 rounded-md shadow hover:bg-white hover:text-emerald-500 border-solid border-2 border-emerald-500"
              >
                <i class="fa-regular fa-user"></i>
              </a>
              <a
                href=""
                className="inline-block w-full px-4 py-2 my-2 text-center text-white bg-emerald-500 border-solid border-2 border-emerald-500 rounded-md shadow hover:bg-white hover:text-emerald-500"
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>

          <div className="hidden space-x-2 md:inline-block">
            <Link href="/login">
              <button
                href="jbuttonvascript:void(0)"
                className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2  text-black mr-4 border-solid border-white border-2 rounded-md shadow hover:bg-emerald-500 hover:text-white ..."
              >
                <i class="fa-regular fa-user"></i>
              </button>
            </Link>
            <button
              href=""
              className="transition ease-in-out hover:-translate-x-2 hover:scale-110 delay-150 px-5 py-2 text-black bg-white rounded-md shadow hover:bg-emerald-500 hover:text-white ..."
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
