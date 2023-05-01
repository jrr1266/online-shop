import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { useContext } from "react";
import { DataContex } from "../Context/DataContex";
import "../Estilos/soom.css";
export function Zoom() {
  const { change, zoom } = useContext(DataContex);
  return zoom.map((item) => (
    <div className="car" onClick={change} key={item.id}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Clothes for woman",
            isFluidWidth: true,
            src: item.image,
          },
          largeImage: {
            src: item.image,
            width: 1200,
            height: 1200,
          },
        }}
      />
      <p>{item.description}</p>
    </div>
  ));
}
