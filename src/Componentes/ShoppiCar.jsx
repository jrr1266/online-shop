import React from "react";
import "../Estilos/Shoppicar.css";
import { useContext } from "react";
import { DataContex } from "../Context/DataContex";
import { EmptyCar } from "./EmptyCar";
import { FullCar } from "./FullCar";
export function ShoppiCar() {
  const { car, color, delet, sum, pagar } = useContext(DataContex);

  return (
    <div className={car ? "show" : "hidden"}>
      {color ? <EmptyCar></EmptyCar> : <FullCar></FullCar>}
      <div className="total">
        <span>${Math.round(sum)}</span> total
      </div>
      <div className="clean">
        <button onClick={delet}>clean car</button>
      </div>
      <div className="add">
        <button onClick={pagar}>buy</button>
      </div>
    </div>
  );
}
