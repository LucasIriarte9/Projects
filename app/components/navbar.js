"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const toggleNavbar = () => {
    setClick(!click);
  };
  return (
    <div className="flex flex-col py-4 mx-auto bg-black text-white">
      <navbar>
        <div className="flex justify-around text-2xl">
          <div className="text-3xl p-2">
            <Link href="/">MeliCas</Link>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-around">
              <div className="flex gap-10">
                <Link
                  href="/"
                  className=" hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/productos"
                  className=" hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Products
                </Link>
                <Link
                  href="/To-Do"
                  className=" hover:bg-white hover:text-black rounded-lg p-2"
                >
                  To-Do
                </Link>
                <Link
                  href="/PokeApi"
                  className=" hover:bg-white hover:text-black rounded-lg p-2"
                >
                  PokeApi
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white"
              onClick={toggleNavbar}
            >
              {click ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#FFFFFF"
                  fill="none"
                >
                  <path
                    d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#FFFFFF"
                  fill="none"
                >
                  <path
                    d="M4 5L20 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 19L20 19"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {click && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/productos"
                className="block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </navbar>
    </div>
  );
};

export default Navbar;
