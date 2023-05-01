import "../Estilos/Full.css";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { DataContex } from "../Context/DataContex";
import { useContext } from "react";
export function FullCar() {
  const { subirCar, borrar1 } = useContext(DataContex);
  return subirCar.map((nueva) => (
    <div className="full" key={nueva.id}>
      <div className="input">
        <h3>${Math.round(nueva.price)}</h3>
        <p>{nueva.title}</p>
        <button onClick={() => borrar1(nueva)}>
          <AiFillCloseCircle />
        </button>
      </div>
    </div>
  ));
}
