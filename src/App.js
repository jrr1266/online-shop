import "./App.css";
import { HeaderShoppiCar } from "./Componentes/HeaderShoppiCar";
import { DataContex } from "./Context/DataContex";
import { useContext } from "react";
import { Buy } from "./Componentes/Buy";
function App() {
  const { tienda, pay } = useContext(DataContex);
  return (
    <div className="App" onLoad={tienda}>
      {pay ? <HeaderShoppiCar /> : <Buy />}
    </div>
  );
}

export default App;
