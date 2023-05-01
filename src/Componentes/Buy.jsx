import React from "react";
import { DataContex } from "../Context/DataContex";
import { useContext, useState } from "react";
import "../Estilos/buy.css";

export function Buy() {
  const { sum, regreso, subir } = useContext(DataContex);
  const [total, setTotal] = useState(sum);
  const convertir = () => {
    const valor = document.querySelector("#precio").value;
    switch (valor) {
      case "1":
        setTotal(sum);
        break;
      case "2":
        setTotal(sum * 1.03);
        break;
      case "3":
        alert("El cambio vigente actual es de 190 pesos por cada usd");
        setTotal(total * 190);
        break;
    }
  };
  const enviar = (e) => {
    e.preventDefault();
    const valor = document.querySelector("#precio").value;
    const cuenta = document.getElementById("cuenta").value;
    const telefono = document.getElementById("telefono").value;
    const buleanoCuenta =
      cuenta === "" ||
      cuenta.length < 16 ||
      cuenta.length > 16 ||
      isNaN(cuenta);
    const buleanoTelefono =
      telefono === "" ||
      telefono.length < 8 ||
      telefono.length > 8 ||
      isNaN(telefono);
    if (buleanoCuenta || buleanoTelefono) {
      return alert(
        "Debe completar los campos de la siguiente manera: La cuenta debe tener una una longitud de 16 caracteres.El telefono debe tener una longitud de 8 caracteres"
      );
    } else {
      switch (valor) {
        case "1":
          alert(
            `A successful payment of ${Math.round(
              total
            )} dollars has been made.Enjoy your purchase `
          );
          break;
        case "2":
          alert(
            `A successful payment of ${Math.round(
              total
            )} euro has been made.Enjoy your purchase `
          );
          break;
        case "3":
          alert(
            `A successful payment of ${Math.round(
              total
            )} cuban peso has been made.Enjoy your purchase `
          );
          break;
      }
      subir(cuenta, telefono, total);
    }
  };
  return (
    <form method="get">
      <div>
        <label htmlFor="cuenta">Bank account</label>
        <input
          type="number"
          id="cuenta"
          placeholder="Account number...."
          name="cuenta"
        />
      </div>
      <div className="pago">
        <span>{Math.round(total)}</span>
        <select name="" id="precio" onChange={convertir}>
          <option value="1">Dolares</option>
          <option value="2">Euros</option>
          <option value="3">MN</option>
        </select>
      </div>
      <div className="telefono">
        <label htmlFor="telefono">Number Phone</label>
        <input type="tel" id="telefono" placeholder="+53...." name="telefono" />
      </div>
      <div className="botones">
        <input type="submit" className="pay" value="Pay" onClick={enviar} />
        <button className="back" onClick={regreso}>
          Back
        </button>
      </div>
    </form>
  );
}
