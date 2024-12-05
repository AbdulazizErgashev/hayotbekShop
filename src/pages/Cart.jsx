import React, { useContext } from "react";
import { TotalContext } from "../context/totalContext";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const {
    cart,
    handleCart,
    cartCount,
    productCount,
    incrementProductCount,
    decrementProductCount,
  } = useContext(TotalContext);
  const navigate = useNavigate();

  return (
    <main className="bg-[#fff]">
      <section className="h-screen flex flex-col items-center md:items-start w-full max-w-[1200px] mx-auto px-5 md:px-0">
        <h1 className="text-xl md:text-2xl font-bold mt-20 text-[#d4a373]">
          Added Products: {cartCount}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center mt-5">
          {cart.length > 0 ? (
            cart.map((item) => (
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
                <div className="flex items-center justify-between gap-x-3 w-full">
                  <div className="w-full flex items-center gap-x-2">
                    <button
                      onClick={() => decrementProductCount(item)}
                      className="bg-red-500 text-white px-2 rounded-md text-2xl transition-all duration-300 active:translate-y-2"
                    >
                      -
                    </button>
                    <span>{productCount}</span>
                    <button
                      onClick={() => incrementProductCount(item)}
                      className="bg-green-500 text-white px-2 rounded-md text-2xl transition-all duration-300 active:translate-y-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleCart(item)}
                    className="text-red-500 text-3xl transition-all duration-300 active:translate-y-2"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p
              className="text-base md:text-xl text-[#d4a373] font-semibold cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              No products added yet!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
