"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (loading)
    return <h2 className="flex justify-center text-4xl mt-12">Loading....</h2>;
  return (
    <>
      <h1 className="text-center text-3xl my-4 font-bold">Fake Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-4 mx-auto gap-10">
        {productos.map((product) => (
          <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto content-center p-3">
              <Link href={`/productos/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-96 h-96"
                />
              </Link>
              <div class="p-5 flex justify-center">
                <Link href={`/productos/${product.id}`}>
                  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </Link>
              </div>
              <div>
                <p class="font-bold text-3xl flex justify-center">
                  {product.price}$
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Productos;
