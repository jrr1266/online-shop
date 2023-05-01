import { createContext, useSyncExternalStore } from "react";
import React from "react";
// import { lista as datos} from "../Data/Datos";
import { useState, useEffect } from "react";
import { API_URL } from "../Data/url";
export const DataContex = createContext();
export function DataContexProvider(props) {
  async function tienda() {
    try {
      const pregunta = await fetch(API_URL);
      const respuesta = await pregunta.json();
      setLista(respuesta);
    } catch (error) {
      document.write("Revise su conexion a internet....");
    }
  }

  /*Estado de la lista de productos */
  const [lista, setLista] = useState([]);

  /*codigo para mostrar y ocultar el carrito */
  const [car, setCar] = useState(false);
  const showHidden = () => {
    if (car === false) {
      setCar(true);
    } else {
      setCar(false);
    }
  };
  /* codigo para incrementar y decrementar el  del carrito*/
  const [, setContador] = useState(0);
  const [color, setColor] = useState(true);
  const [subirCar, setSubirCar] = useState([]);
  //codigo para subir al carrito
  const addToCar = (nuevaLista) => {
    setColor(false);
    setContador(+1);
    const elemento = lista.find((item) => item.id === nuevaLista.id);
    const kit = [...subirCar, elemento];
    if (subirCar.find((item) => item.id === elemento.id)) {
      const dato = subirCar.map((item) =>
        item.id === nuevaLista.id
          ? {
              ...item,
              price: item.price + elemento.price,
            }
          : item
      );
      return setSubirCar(dato);
    }

    return setSubirCar(kit);
  };

  /* Codigo para el zoom */
  const [cambio, setCambio] = useState(true);
  const [zoom, setZoom] = useState([]);
  const change = (id) => {
    let w = window.innerWidth;
    if (cambio) {
      if (cambio && w >= 720) {
        setCambio(false);
      }
      const nueva = lista.filter((item) => item.id === id);
      return setZoom(nueva);
    } else {
      setCambio(true);
    }
  };
  const delet = () => {
    setSubirCar([]);
    setColor(true);
  };
  const borrar1 = (nueva) => {
    const vaciar1 = subirCar.filter((item) => item.id != nueva.id);
    setSubirCar(vaciar1);
    if (subirCar.length <= 1) {
      setColor(true);
    }
  };
  const [sum, setSum] = useState(0);
  useEffect(() => {
    const cantidad = subirCar.map((item) => item.price);
    const resultado = cantidad.reduce((acumlador, numero) => {
      return acumlador + numero;
    }, 0);
    setSum(resultado);
  }, [subirCar]);
  const [pay, setPay] = useState(true);
  const pagar = () => {
    if (sum != 0) {
      setPay(false);
    } else {
      alert("Press on add to car");
    }
  };
  const regreso = () => {
    setPay(false);
  };
  const subir = (cuenta, telefono, total) => {
    // esta funcion es para mandar los datos al servidor porque nu use el hooks form
  };
  return (
    <DataContex.Provider
      value={{
        lista,
        showHidden,
        car,
        addToCar,
        change,
        cambio,
        zoom,
        subirCar,
        delet,
        color,
        borrar1,
        sum,
        tienda,
        pagar,
        pay,
        regreso,
        subir,
      }}
    >
      {props.children}
    </DataContex.Provider>
  );
}
