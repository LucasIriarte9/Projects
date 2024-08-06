"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductId = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { productId } = params;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <h2 className="flex justify-center text-4xl mt-12">Loading....</h2>;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-24 mb-4">
        <img src={product.images} alt={product.title} className="size-96" />
        <p className="md:w-[600px] text-center flex items-center text-2xl mb-4">
          {product.description}
        </p>
      </div>
      <div className="mx-4">
        <h2 className="flex justify-center text-3xl mt-4 items-center text-pretty">
          {product.title}
        </h2>
        <p className="flex justify-center text-5xl mt-3 mx-auto text-green-500">
          {product.price}$
        </p>
      </div>

      <div className="flex flex-row items-center justify-center">
        <button className=" flex flex-row text-3xl mt-3 bg-blue-500 text-white  rounded p-3 hover:bg-blue-700">
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fff"
            fill="none"
            className="flex items-center justify-center size-8 mt-1 ml-2"
          >
            <path
              d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="10.5"
              cy="20.5"
              r="1.5"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <circle
              cx="17.5"
              cy="20.5"
              r="1.5"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ProductId;
