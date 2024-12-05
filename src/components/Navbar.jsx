import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCartFill, BsHeartFill } from "react-icons/bs";
import { TotalContext } from "../context/totalContext";

export default function Navbar() {
  const { favoritesCount, cartCount } = useContext(TotalContext);
  return (
    <main className="w-full bg-[#222] fixed top-0 right-0 left-0 z-50">
      <nav className="text-[#d4a373] flex items-center justify-between gap-x-5 w-full max-w-[1200px] mx-auto py-5 px-5 md:px-0">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest active:opacity-60">
            onStore
          </h1>
        </Link>

        <div className="flex items-center justify-between w-full max-w-[15rem] md:max-w-[25rem]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-[#d4a373] text-[#222] font-medium px-3 py-1 rounded-l-lg capitalize placeholder:text-[#222] placeholder:text-sm md:placeholder:text-base focus:outline-none"
          />
          <button className="bg-[#d4a373] text-[#222] py-2 px-3 rounded-r-lg border-l-2 border-[#222]">
            <BsSearch />
          </button>
        </div>

        <div className="flex items-center gap-x-6 md:gap-x-12">
          <Link to="/favorite" className="relative">
            <BsHeartFill className="text-xl active:opacity-60" />
            <span className="absolute -top-3 -right-4 size-6 border-2 border-[#222] text-lg bg-[#d4a373] rounded-full text-[#222] flex items-center justify-center">
              {favoritesCount > 9 ? "9+" : favoritesCount}
            </span>
          </Link>
          <Link to="/cart" className="relative">
            <BsCartFill className="text-xl active:opacity-60" />
            <span className="absolute -top-3 -right-4 size-6 border-2 border-[#222] text-lg bg-[#d4a373] rounded-full text-[#222] flex items-center justify-center">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
