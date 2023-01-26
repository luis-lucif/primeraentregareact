

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';
import Hero from "./components/fondo"

function App() {
  return (
    <>
    <NavBar background={"transparent"} />
    <ItemListContainer greeting={"Bienvenido a la tienda de productos de tecnología"}/>
    <Hero title="tienda online"/>
    </>

  );
}

export default App;
