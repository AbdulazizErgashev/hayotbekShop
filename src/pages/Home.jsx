import React, { useContext, useState } from "react";
import Product1 from "../img/bir.png";
import Product2 from "../img/ikki.png";
import Product3 from "../img/uch.png";
import Product4 from "../img/tort.png";
import Product5 from "../img/besh.png";
import Product6 from "../img/olti.png";
import Product7 from "../img/yetti.png";
import Product8 from "../img/sakkiz.png";
import Product9 from "../img/toqqiz.png";
import Product10 from "../img/on.png";
import Product11 from "../img/onbir.png";
import Product12 from "../img/onikki.png";
import Product13 from "../img/onuch.png";
import Product14 from "../img/ontort.png";
import Product15 from "../img/onbesh.png";
import Product16 from "../img/onolti.png";
import Product17 from "../img/onyetti.png";
import Product18 from "../img/onsakkiz.png";
import Product19 from "../img/ontoqqiz.png";
import Product20 from "../img/yigirma.png";
import Product21 from "../img/yigirmabir.png";
import Product22 from "../img/yigirmaikki.png";
import Product23 from "../img/yigirmauch.png";
import Product24 from "../img/yigirmatort.png";
import Product25 from "../img/yigirmabesh.png";
import { BsHeart, BsHeartFill, BsCartFill } from "react-icons/bs";
import { TotalContext } from "../context/totalContext";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro",
      price: 785,
      discount: 760,
      totalCount: 16,
      img: Product1,
      like: false,
    },
    {
      id: 2,
      title: "Note 10",
      price: 685,
      discount: 630,
      totalCount: 7,
      img: Product2,
      like: false,
    },
    {
      id: 3,
      title: "Nokia 8210",
      price: 25,
      discount: 20,
      totalCount: 22,
      img: Product3,
      like: false,
    },
    {
      id: 4,
      title: "Honor 70",
      price: 250,
      discount: 223,
      totalCount: 13,
      img: Product4,
      like: false,
    },
    {
      id: 5,
      title: "Headphones",
      price: 12,
      discount: 10,
      totalCount: 9,
      img: Product5,
      like: false,
    },
    {
      id: 6,
      title: "14 Pro Max",
      price: 789,
      discount: 780,
      totalCount: 11,
      img: Product6,
      like: false,
    },
    {
      id: 7,
      title: "14 Pro Max",
      price: 776,
      discount: 754,
      totalCount: 8,
      img: Product7,
      like: false,
    },
    {
      id: 8,
      title: "14 Pro Max",
      price: 773,
      discount: 744,
      totalCount: 7,
      img: Product8,
      like: false,
    },
    {
      id: 9,
      title: "iPhone SE",
      price: 364,
      discount: 354,
      totalCount: 6,
      img: Product9,
      like: false,
    },
    {
      id: 10,
      title: "Xiaomi 11T",
      price: 243,
      discount: 237,
      totalCount: 8,
      img: Product10,
      like: false,
    },
    {
      id: 11,
      title: "Lenovo",
      price: 212,
      discount: 200,
      totalCount: 8,
      img: Product11,
      like: false,
    },
    {
      id: 12,
      title: "Huawei GT3",
      price: 17,
      discount: 15,
      totalCount: 3,
      img: Product12,
      like: false,
    },
    {
      id: 13,
      title: "Mi 11 Ultra",
      price: 321,
      discount: 305,
      totalCount: 4,
      img: Product13,
      like: false,
    },
    {
      id: 14,
      title: "S23 Ultra",
      price: 325,
      discount: 315,
      totalCount: 6,
      img: Product14,
      like: false,
    },
    {
      id: 15,
      title: "S22 Plus",
      price: 205,
      discount: 197,
      totalCount: 2,
      img: Product15,
      like: false,
    },
    {
      id: 16,
      title: "Oppo A96",
      price: 215,
      discount: 198,
      totalCount: 1,
      img: Product16,
      like: false,
    },
    {
      id: 17,
      title: "Huawei Nova9",
      price: 198,
      discount: 185,
      totalCount: 3,
      img: Product17,
      like: false,
    },
    {
      id: 18,
      title: "Note 11 Pro",
      price: 243,
      discount: 227,
      totalCount: 10,
      img: Product18,
      like: false,
    },
    {
      id: 19,
      title: "Pixel 7 Pro",
      price: 232,
      discount: 215,
      totalCount: 6,
      img: Product19,
      like: false,
    },
    {
      id: 20,
      title: "X5 Lite",
      price: 202,
      discount: 196,
      totalCount: 15,
      img: Product20,
      like: false,
    },
    {
      id: 21,
      title: "Vostro 3910",
      price: 294,
      discount: 250,
      totalCount: 8,
      img: Product21,
      like: false,
    },
    {
      id: 22,
      title: "Cyber Wolf",
      price: 155,
      discount: 110,
      totalCount: 15,
      img: Product22,
      like: false,
    },
    {
      id: 23,
      title: "Asus",
      price: 485,
      discount: 470,
      totalCount: 22,
      img: Product23,
      like: false,
    },
    {
      id: 24,
      title: "S22 Ultra",
      price: 335,
      discount: 325,
      totalCount: 5,
      img: Product24,
      like: false,
    },
    {
      id: 25,
      title: "S22",
      price: 175,
      discount: 160,
      totalCount: 11,
      img: Product25,
      like: false,
    },
  ]);

  const { favorites, handleLike, cart, addCart, handleCart } =
    useContext(TotalContext);

  // const handleLike = (product) => {
  //   if (favorites.some((item) => item.id === product.id)) {
  //     removeFavorite(product.id);
  //   } else {
  //     addFavorite(product);
  //   }
  // };

  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center h-screen w-full max-w-[1200px] mx-auto mt-36">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-y-5 relative max-w-[15rem] mx-auto p-10 bg-[#fff] shadow-2xl rounded-xl"
          >
            <img src={item.img} alt={item.title} />
            <span className="absolute right-0 top-0 flex items-center justify-center bg-[#222] text-[#d4a373] text-lg font-bold rounded-l-lg size-[3rem]">
              {item.totalCount}
            </span>
            <h1 className="text-lg font-bold tracking-widest text-[#d4a373]">
              {item.title}
            </h1>
            <div className="flex items-center gap-x-2">
              <span className="text-[#d4a373] text-base font-semibold">
                ${item.discount}
              </span>
              <span className="line-through text-base font-semibold text-gray-400">
                ${item.price}
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                onClick={() => addCart(item)}
                className="bg-[#222] border border-[#222] text-[#d4a373] py-2 px-4 rounded-md transition-all duration-300 active:translate-y-2"
              >
                <BsCartFill />
              </button>
              <button
                onClick={() => handleLike(item)}
                className="bg-transparent border border-[#222] py-2 px-4 rounded-md transition-all duration-300 active:translate-y-2"
              >
                {favorites.some((fav) => fav.id === item.id) ? (
                  <BsHeartFill color="red" />
                ) : (
                  <BsHeart />
                )}
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
