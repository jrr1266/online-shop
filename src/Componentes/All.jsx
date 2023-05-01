import React from "react";
import { useContext } from "react";
import { DataContex } from "../Context/DataContex";
export function All() {
  const { lista, addToCar, change } = useContext(DataContex);
  return lista.map((nuevaLista) => (
    <div className="card" key={nuevaLista.id}>
      <img
        src={nuevaLista.image}
        alt=""
        onClick={() => change(nuevaLista.id)}
      />
      <h3>{nuevaLista.title}</h3>
      <h5 className="categoria">{nuevaLista.category}</h5>
      <h4>${nuevaLista.price}</h4>
      <button onClick={() => addToCar(nuevaLista)}>add to car</button>
    </div>
  ));
}
