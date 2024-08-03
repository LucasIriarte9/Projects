"use client";
import React from "react";
export const dataCarousel = [
  {
    id: 1,
    title: "Envio gratis en 24hs",
    desciption:
      "Envio gratis en 24hs com cliente vip. Obten mas informacion y unete",
    link: "#",
  },
  {
    id: 2,
    title: "Consigue un 20% de descuento en compras superiores a 80000",
    desciption: "Consigue un 20% de descuento en compras superiores a 80000",
    link: "#",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    desciption: "devoluciones y entregas gratuitas",
    link: "#",
  },
  {
    id: 4,
    title: "Comprar novedades",
    desciption: "Todas las novedades al mejor precio",
    link: "#",
  },
];

const CarouselBanner = () => {
  return;
  <>
    <div class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </>;
};

export default CarouselBanner;
