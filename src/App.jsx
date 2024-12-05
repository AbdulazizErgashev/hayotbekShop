import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import { ContextProvider } from "./context/totalContext";

export default function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </ContextProvider>
    </React.Fragment>
  );
}
