import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="bg-white rounded-lg shadow  m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                Melicas
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="/productos" class="hover:underline me-4 md:me-6">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:underline me-4 md:me-6">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" class="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm  sm:text-center ">
            © 2024{" "}
            <a href="/" class="hover:underline">
              Melicas™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
