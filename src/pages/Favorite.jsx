import React, { useContext } from "react";
import { TotalContext } from "../context/totalContext";
import { BsCartFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const { favorites, handleLike, favoritesCount, addCart } =
    useContext(TotalContext);
  const navigate = useNavigate();

  return (
    <main className="bg-[#fff]">
      <section className="h-screen flex flex-col items-center md:items-start w-full max-w-[1200px] mx-auto px-5 md:px-0">
        <h1 className="text-xl md:text-2xl font-bold mt-20 text-[#d4a373]">
          Liked Products: {favoritesCount}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center mt-5">
          {favorites.length > 0 ? (
            favorites.map((item) => (
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
            ))
          ) : (
            <p
              className="text-base md:text-xl text-[#d4a373] font-semibold cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              No products liked yet!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

// like funsiyasi tugatildi
