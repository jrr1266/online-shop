import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../Estilos/Header.css";
import { DataContex } from "../Context/DataContex";
import { useContext } from "react";
export function Header() {
  const { showHidden, color } = useContext(DataContex);
  return (
    <header>
      <div className="logo">
        <img
          src="https://i.pinimg.com/originals/91/f0/07/91f00793e3223dee57a089f5f66cb7c7.jpg"
          alt="Top Fashion"
          title="Shopping-Top"
        />
      </div>
      <h1>shoppipay</h1>
      <div className="shoppingcar">
        <div>
          <button onClick={showHidden} className={color ? "red" : "green"}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
}
