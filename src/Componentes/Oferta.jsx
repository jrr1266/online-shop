import React from "react";
import "../Estilos/Oferta.css";
import { All } from "./All";
import { Zoom } from "./Zoom";
import { useContext } from "react";
import { DataContex } from "../Context/DataContex";
function Oferta() {
  const { cambio } = useContext(DataContex);
  return (
    <>
      <div className="container">{cambio ? <All></All> : <Zoom></Zoom>}</div>
    </>
  );
}
export default Oferta;
